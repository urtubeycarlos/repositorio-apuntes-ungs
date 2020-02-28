import React from 'react';
import { Row } from 'react-bootstrap';
import './styles/logo.css'

const Logo = () => {
    return (
        <Row className="justify-content-center">
            <img alt="" src="./logo.png"></img>
        </Row>);
};

export default Logo;