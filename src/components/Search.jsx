import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import Logo from './Logo';

export default class Search extends Component {
    
    constructor(props){
        super(props);
        console.log("Algo")
    }

    render(){
        return (
            <Container>
                <Logo></Logo>
                <Form></Form>
            </Container>
        )
    }
}