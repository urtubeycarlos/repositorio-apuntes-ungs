import React, { Component } from 'react';
import './App.css';
import Login from './views/Login.jsx'
import Home from './views/Home.jsx'
import Results from './views/Results.jsx'
import { Router, Route, browserHistory } from "react-router";

const App = () => (
    <Router history = {browserHistory}>
      <Route path = "/" component = {Login}/>
        <Route path = "/home" component = {Home}/>
        <Route path = "/results" component = {Results}/>
      </Router>);

export default App;
