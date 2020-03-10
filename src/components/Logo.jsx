import React from 'react';
import { Row } from 'react-bootstrap';
import './styles/logo.css'

export default class Logo extends React.Component {

    constructor(props){
        super(props)
        this.redirect = this.redirect.bind(this);
    }

    render(){
        return(
            <Row className="justify-content-center" onClick={this.redirect}>
                <img id="logo" alt="" src="./logo.png" style={{'cursor':'pointer'}}/>
            </Row>
        );
    }

    redirect(){
        window.location.href="/home"
    }

}