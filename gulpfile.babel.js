import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import concat from 'gulp-concat';
import sourcemaps from 'gulp-sourcemaps';
import gulpIf from 'gulp-if';
import newer from 'gulp-newer';
import debug from 'gulp-debug';
import autoprefixer from 'gulp-autoprefixer';
import remember from 'gulp-remember';
import browserSync from 'browser-sync';
import del from 'del';
import path from 'path';
import webpackStream from 'webpack-stream';
import named from 'vinyl-named';

const webpack = webpackStream.webpack;
const browserSyncer = browserSync.create();
let isDevelopment = false;


gulp.task('styles',function(){
	return gulp.src('dev/styles/**/*.css', {since: gulp.lastRun('styles')})
		.pipe(gulpIf(isDevelopment, sourcemaps.init()))
		.pipe(autoprefixer())
		.pipe(remember('styles'))
		.pipe(concat('main.css'))
		.pipe(gulpIf(isDevelopment, sourcemaps.write()))
		.pipe(gulp.dest('dist/styles'));
});

gulp.task('webpack', function(callback){
	let firstBuildReady = false;

	function done(err,stats){
		firstBuildReady = true;
		if(err){
			return;
		}
	}

	return gulp.src('dev/*.js')
		.pipe(plumber({
			errorHandler: notify.onError(err => ({
				title: 'webpack',
				message: err.message
			}))
		}))
		.pipe(named())
		.pipe(webpackStream({
			output:{
				publicPath:'/'
			},
			watch: isDevelopment,
			devtool: isDevelopment ? 'cheap-module-inline-source-map' : null,
			module: {
				loaders: [{
					test: /\.js$/,
					include: path.join(__dirname,'dev'),
					loader: 'babel?presets[]=es2015'
				}]
			},
			plugins: [
				new webpack.NoErrorsPlugin()
			]
		},null,done))
		.pipe(gulp.dest('dist'))
		.on('data',function(){
			if(isDevelopment && !callback.called){
				callback.called = true;
				callback();
			}
		});
});

gulp.task('clean',function(){
	return del('dist');
});

gulp.task('assets', function(){
	return gulp.src('dev/**/*.html', {since: gulp.lastRun("assets")})
		.pipe(newer('dist'))
		.pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
	gulp.watch('dev/styles/**/*.css', gulp.series('styles')).on('unlink',function(filepath){
		remember.forget('styles',path.resolve(filepath));
	});
	gulp.watch('dev/assets/**/*.*', gulp.series('assets'));
	gulp.watch('dev/**/*.html', gulp.series('assets'));
})

gulp.task('build', gulp.series(
	'clean', 
	gulp.parallel('styles','assets','webpack')
));


gulp.task('server', function (){
	browserSyncer.init({
		server:'./'
	});
	browserSyncer.watch(['dist/**/*.*','index.html']).on('change',browserSyncer.reload);
});

gulp.task('dev', 
	gulp.series(
		function(callback){isDevelopment=true;callback();},
		'build',
		gulp.parallel('watch','server')
	)
);

gulp.task('default', gulp.series('dev'));
