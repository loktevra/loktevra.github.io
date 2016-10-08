import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history'
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './scripts/components/App';
import MainPage from './scripts/components/MainPage'
import Blog from './scripts/components/Blog'
import Portfolio from './scripts/components/Portfolio'
import Experiments from './scripts/components/Experiments'

injectTapEventPlugin();
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

render(
    <Router history={appHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={MainPage} />
            <Route path='blog' component={Blog} />
            <Route path='portfolio' component={Portfolio} />
            <Route path='experiments' component={Experiments} />
        </Route>
    </Router>,
    document.getElementById('cont')
)
