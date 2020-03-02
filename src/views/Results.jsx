import React, { Component } from 'react';
import { Container, Row, Jumbotron } from "react-bootstrap";
import Loading from "../components/Loading.jsx";
import Logo from '../components/Logo';
import Note from '../components/Note';

const { getNoteByAssignaure } = require('../services/notesService');

class Results extends Component {
  constructor(props){
    super(props)
      this.state = {
        results: null
      }
  }

  componentDidMount() {
    const searchParams = this.getParams();
    console.log(searchParams);
    if (searchParams.assignature) {
      getNoteByAssignaure(searchParams.assignature)
        .then(response => {
          this.setState({
            results: response.data.Notes,
          });
        })
        .catch((err) => {
          //handle somehow this error
        });
    }
  }

  getParams() {
    const params = {};
    const searchParams = new URLSearchParams(window.location.search)

    for (let param of searchParams)
      params[param[0]] = param[1];
    return params
  }

  render() {
    const { results } = this.state;
    return !results ?
      <Container>
        <Logo />
        <Jumbotron>
          <Row className="justify-content-center">
            <h5>Buscando apuntes</h5>
          </Row>
          <Loading />
          <Note 
            filename={'complejidad_computacional'} 
            extension={'.java'} 
            url={"https://www.youtube.com/"} 
            description={"Soy una describicion."}
            />   
        </Jumbotron>
      </Container> :
      <Container>
        <Logo />
        <Jumbotron>
          <Row className="justify-content-center">
            <h5>Apuntes encontrados</h5>
          </Row>
        </Jumbotron>
      </Container>
  }
}

export default Results;