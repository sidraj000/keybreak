import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import App from './App'
import Link from './Links'
import * as firebase from 'firebase';
import * as serviceWorker from './serviceWorker';

const firebaseConfig =require('./config').firebaseConfig
firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <Link />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
