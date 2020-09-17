import React, { Component } from 'react'
import {  Router, Switch, Route } from "react-router-dom";
import App from "./App.js"
import Home from "./Home.js"
//import { BrowserHistory as history } from 'react-history'
import history from './history';
export default class Routes extends Component {
    render() {
        console.log({history});
        
        return (
         <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/play/:id" component={Home}/>
                    <Route exact path="/App/:id" component={App } />
                </Switch>
        </Router >
        )
    }
}
