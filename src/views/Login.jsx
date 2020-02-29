import React, { Component } from 'react';
import Logo from '../components/Logo.jsx';
import Loading from '../components/Loading.jsx';
import { Container, Jumbotron, Row } from 'react-bootstrap';

import { loginIn } from '../services/loginService';

export default class Login extends Component {

    constructor(props){
        super(props)

        this.login = this.login.bind(this);
    }

    componentDidMount() {
      this.login();
    }

    login() {
      let gpsOptions = {
        enableHighAccuracy: true,
        maximumAge: 3600000
      };

      navigator.geolocation.getCurrentPosition((position) => {
        const data = new FormData();
        data.append('lat', position.coords.latitude);
        data.append('lon', position.coords.longitude);
      
        loginIn(data).then(response => {
          if( response.data.isLogged ) {
            window.location.href = "/home";
          }
        });
      }, (error) => {
        console.dir(error);
        this.login();
      }, gpsOptions);
      
    }

    render(){
      return (
        <Container>
          <Logo />
          <Jumbotron>
            <Row className="justify-content-center">
              <h5>Detectando ubicación...</h5>
            </Row>
            <Loading />
          </Jumbotron>
        </Container>);
    }
}