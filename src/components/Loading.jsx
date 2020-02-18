import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

export default class Loading extends Component {

    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <Row className="justify-content-center">
                <Spinner animation="border" variant="primary"/>
            </Row>
        )
    }

}