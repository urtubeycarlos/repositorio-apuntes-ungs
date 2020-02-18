import React, { Component } from 'react';
import { Controller } from 'react-controller'
import $ from 'jquery';
import Logo from './Logo.jsx';
import Loading from './Loading.jsx';
import { Container, Jumbotron, Row, Spinner } from 'react-bootstrap';
import { Redirect } from "react-router-dom";

export default class Login extends Component {

    constructor(props){
        super(props)

        this.state = {
            "redirect": null
        }

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    render(){

        if( !this.state.redirect ){
            return (
                <Container className="mt-8">
                    <Jumbotron>
                        <Row className="justify-content-center">                         
                            <h1>{this.state.redirect}</h1>
                            <h5>Detectando ubicación...</h5>
                        </Row>
                        <Loading />
                    </Jumbotron>
                </Container>
                
            )
        } else {
            return <Redirect to={this.state.redirect}></Redirect>
        }        

    }

    componentDidMount(){

        var self = this;
        var options = {
            enableHighAccuracy: true,
            maximumAge: 3600000,
        }
        
        navigator.geolocation.getCurrentPosition(onSuccess, onError, options)

        function onSuccess(position) {
            $.support.cors = true
            $.ajax("http://localhost/login.php")
                .then(function(json){
                    if( json )
                        self.setState({"redirect": "search"});
                });
        };
      
        function onError(error) {
            navigator.geolocation.getCurrentPosition(onSuccess, onError, options)
        }

    }

}

class Position {
    constructor(lat, lon){
        this.lat = lat;
        this.lon = lon;
    }
}