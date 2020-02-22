import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

const Loading = () => {
    return(
        <Row className="justify-content-center">
            <Spinner animation="border" variant="primary"/>
        </Row>);
}

export default Loading;