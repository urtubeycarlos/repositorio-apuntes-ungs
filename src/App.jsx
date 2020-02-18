import React, { Component } from 'react';
import './App.css';
import Logo from './components/Logo.jsx';
import Login from './components/Login.jsx'
import Search from './components/Login.jsx'
import $ from 'jquery'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    return (
      <Router>
        <Switch>
          <Route path="/">
            <Search />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
    </Router>
    );

  }
}
