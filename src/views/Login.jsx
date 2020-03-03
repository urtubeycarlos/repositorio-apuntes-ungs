import React, { Component } from 'react';
import Logo from '../components/Logo.jsx';
import Loading from '../components/Loading.jsx';
import { Container, Jumbotron, Row } from 'react-bootstrap';
import { Redirect } from "react-router-dom";

import { loginIn } from '../services/loginService';

export default class Login extends Component {

    constructor(props){
        super(props)

        this.state = {
          redirect: undefined,
        }
        this.login = this.login.bind(this);
    }

    render(){
      if( this.state.redirect )
          return <Redirect to={this.state.redirect} />
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

    componentDidMount() {
      this.login();
    }

    login() {
      let gpsOptions = {
        enableHighAccuracy: true,
        maximumAge: 3600000
      };

      navigator.geolocation.getCurrentPosition((position) => {
        const lonlat = {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        }
        
        loginIn(lonlat).then(response => {
          if( response.data.isLogged ) {
            this.setState({'redirect':'home'});
          }
        });
      }, (error) => {
        console.dir(error);
        this.login();
      }, gpsOptions);
      
    }

}