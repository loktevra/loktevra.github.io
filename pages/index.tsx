import styles from 'styles/Home.module.css';
import {getLayout} from '@components/Layout';

export default function Home() {
    return (
        <div className={styles.container}>
            <section>
                <h2>About me:</h2>
                <p><b>Date of birth: </b>05 september 1990</p>
                <p><b>e-mail: </b>loktevra@gmail.com</p>
                <p><a href="www.linkedin.com/in/loktevra" target="_blank">linkedin</a></p>
            </section>
            <br />
            <section>
                <h2>Summary:</h2>
                <p>{`A teacher with first category in IT disciplines
                    Software engineer and game developer.
                    Mentor of junior programmers
                    I improve my English by lessons with my teacher weekly, watch series with subtitles, and read books and comics with a dictionary.`}
                </p>
            </section>
            <br />
            <section>
                <h2>{'Technical Skills:'}</h2>
                <ul>
                    <li>JavaScript (ES6 +), TypeScript, HTML5 / CSS3 (including adaptive layout)</li>
                    <li>Experience with Cocos2D-HTML5, React (SSR), Redux, Redux-Thunk, Redux-Saga, Vue, RxJS.</li>
                    <li>Build projects using npm, yarn, webpack, gulp, eslint, babel.</li>
                    <li>Testing JS applications using Karma, mocha, chai, jest.</li>
                    <li>Skills of working with NodeJS, GIT.</li>
                    <li>Basic database skills: MySQL.</li>
                    <li>Experience using Linux Ubuntu as a home, work and server OS.</li>
                </ul>
            </section>
            <br />
            <section>
                <h2>{'Work experience:'}</h2>
                <ul>
                    <li><b>October 2021 - Until now</b> <cite>Yandex - Frontend developer</cite> Work on systems of authorization</li>
                    <li><b>May 2019 - October 2021</b> <cite>z-Media - Full-stack developer.</cite> Work on web-games for social networks (odnoklassniki, vk, etc). Mentor of junior developer.</li>
                    <li><b>May 2018 - May 2019. </b> <cite>Antida Software - Middle JavaScript/TypeScript software engineer.</cite> Worked in teams of new buildings and country real estate in cian.ru (microservice architecture, a/b experiments). Participated as a teacher at “Frontend School” twice. </li>
                    <li><b>August 2016 - May 2018.</b> <cite>LLC “Rusoft”.</cite>I was accepted as a junior programmer, after passing the probationary period, the position was given to the programmer, in the summer of 2017 I was promoted to the 3rd category programmer. I worked in the banking application development team. </li>
                    <li><b>July 2015 - August 2016.</b> <cite>Freelance - web programming.</cite>I worked as a freelancer for several companies as a full-stack developer, mainly on SoleIT. More than 10 projects were completed during the year.</li>
                    <li><b>September 2013 - July 2015.</b> <cite>Teacher.</cite> State’s budgetary professional educational institution "Chelyabinsk State Industrial and Humanitarian College named after A. V. Yakovlev". A teacher by profession “hardware and software adjuster”, in combination with maintenance of computers and network. I got the qualification "Teacher of the first category"</li>
                </ul>
            </section>
            <br />
            <section>
                <h2>Education:</h2>
                <p>{`Higher education; Teacher of professional education in the specialty “Professional education (computer science, computer engineering and computer technologies)”. Graduate work on the topic: “Virtual representation of the institution of professional education”`}</p>
            </section>
            <br />
            <section>
                <h2>{`Additionally:`}</h2>
                <p><a href="https://loktevra.ru/portfolio/" target="_blank">{`portfolio`}</a></p>
                <p><a href="https://github.com/loktevra" target="_blank">{'github'}</a></p>
            </section>
        </div>
    )
}

Home.getLayout = getLayout;
