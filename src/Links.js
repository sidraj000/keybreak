import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './css/Styling.css'
import Routes from './Routes';
export default class Links extends Component {

   
    render() {
        return (
        <div className="App">
            <Router>
                <Routes/>
            </Router>
        </div>
        )
    }
}
