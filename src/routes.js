import React from 'react';
import {Switch, Route} from 'react-router-dom';
// import Poker from './Components/PokerTable/Gameplay/Poker'
import Auth from './Components/Auth';
import App from './App';

export default (
    <Switch>
        <Route exact path='/' component={App} />
        <Route path='/login' component={Auth} />
    </Switch>
)