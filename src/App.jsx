import React, { Component } from 'react';
import './App.css';
import Login from './views/Login.jsx'
import Home from './views/Home.jsx'
import Results from './views/Results.jsx'
import { BrowserRouter, Route } from "react-router-dom";

const App = () => (
    <BrowserRouter>
      <Route exact path = "/" component = {Login}/>
      <Route path = "/home" component = {Home}/>
      <Route path = "/results" component = {Results}/>
    </BrowserRouter>);

export default App;
