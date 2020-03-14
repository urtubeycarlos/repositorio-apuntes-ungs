import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

export default class About extends React.Component {
    
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Container>
                <Jumbotron>
                    <h1>About</h1>
                </Jumbotron>
            </Container>
        )
    }

}