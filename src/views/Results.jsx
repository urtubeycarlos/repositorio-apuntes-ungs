import './styles/results.css';
import React, { Component } from 'react';
import { Container, Row, Jumbotron } from "react-bootstrap";
import Loading from "../components/Loading.jsx";
import Note from '../components/Note';
import { Accordion } from 'react-bootstrap';


const { getNoteByAssignature } = require('../services/notesService');

class Results extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      results: null
    }
  }
  
  render() {
    const { results } = this.state;
    return !results ?
      <Container>
        <Jumbotron>
          <Row className="justify-content-center">
            <h5>Buscando apuntes</h5>
          </Row>
          <Loading />
        </Jumbotron>
      </Container> :
      <Container>
        <Jumbotron>
          <Row className="justify-content-center my-3">
            <h4>{results && results.length ? 'Apuntes encontrados' : 'Materia sin apuntes'}</h4>
          </Row>
          <Accordion>
              {this.generateNotes()}
          </Accordion>
        </Jumbotron>
      </Container>
  }

  componentDidMount() {
    const searchParams = this.getParams();
    if (searchParams.assignature) {
      getNoteByAssignature(searchParams.assignature)
        .then(response => {
          this.setState({
            results: response.data,
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

  generateNotes(){
    let notes = []
    const { results } = this.state;
    results.forEach((note, index) => 
      notes.push(
        <Note 
          filename={note.filename} 
          extension={note.extension} 
          description={note.description}
          url={note.url}
          index={index} />));

    return notes;
  }
  
}

export default Results;