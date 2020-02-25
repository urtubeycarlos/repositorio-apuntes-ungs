import React, { Component } from 'react';
import { Controller } from 'react-controller'
import Logo from '../components/Logo.jsx';
import Loading from '../components/Loading.jsx';
import { Container, Jumbotron, Row, Spinner } from 'react-bootstrap';
import { loginIn } from '../services/loginService';

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

        console.log(loginIn);
        
    }

//     componentDidMount(){

//         var self = this;
//         var options = {
//             enableHighAccuracy: true,
//             maximumAge: 3600000,
//         }
        
//         navigator.geolocation.getCurrentPosition(onSuccess, onError, options)

//         function onSuccess(position) {
//             $.support.cors = true
//             $.ajax("http://localhost/login.php")
//                 .then(function(json){
//                      if( json )
//                         window.location.href = "home"
//                 });
//         };
      
//         function onError(error) {
//             navigator.geolocation.getCurrentPosition(onSuccess, onError, options)
//         }

//     }

}