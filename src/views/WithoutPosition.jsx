import './styles/without_position.css';
import React, { Component } from 'react';

import { Container, Jumbotron, Row } from 'react-bootstrap';

const WithoutPosition = () => (
  <Container>
    <Jumbotron>
      <Row className="justify-content-center">
        <h5>Sin ubicación detectada</h5>
      </Row>
      <Row className="description-row">
        <span>Por favor intente de nuevo y acepte la petición de acceso a su ubicación</span>
      </Row>
    </Jumbotron>
  </Container>
);

export default WithoutPosition;