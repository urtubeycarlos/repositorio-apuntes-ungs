import React, { Component } from 'react';
import './App.css';
import Logo from './components/Logo.jsx';
import View from './components/View.jsx';
import { Container } from 'react-bootstrap';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    return (
      <Container>
            <Logo></Logo>
            <View></View>
      </Container>
    );
  }
}
