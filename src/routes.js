import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {HashRouter} from 'react-router-dom';
import Home from './components/Home'
import OneSub from './components/OneSub'

export default(
    <HashRouter>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/subreddit/:id' component={OneSub}/>
        </Switch>
    </HashRouter>

)