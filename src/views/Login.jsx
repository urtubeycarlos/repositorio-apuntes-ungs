import React, { Component } from 'react';
import { Controller } from 'react-controller'
import Logo from '../components/Logo.jsx';
import Loading from '../components/Loading.jsx';
import { Container, Jumbotron, Row, Spinner } from 'react-bootstrap';
import { login } from '../services/loginService';
const axios = require('axios');

export default class Login extends Component {

    constructor(props){
        super(props)
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
                </Container>
            )

    }

    componentDidMount(){

        let gpsOptions = {
            enableHighAccuracy: true,
            maximumAge: 3600000
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError, gpsOptions);

        function onSuccess(position) {
            let data = new FormData()
            data.append('lat', position.coords.latitude);
            data.append('lon', position.coords.longitude);
            login(data)
                .then( validation => {
                    if( validation.isLogged )
                        window.location.href = "/home"
                });
        }
      
        function onError(error) {
            this.componentDidMount();
        }

    }

}