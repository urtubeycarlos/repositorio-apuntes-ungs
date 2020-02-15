import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

export default class Logo extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return (
            <Row className="justify-content-center">
              <img src="./logo_ungs_blanco.svg" id="logoUNGS"></img>
            </Row>
        )
    }
}