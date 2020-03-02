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
        </Jumbotron>
      </Container> :
      <Container>
        <Logo />
        <Jumbotron>
          <Row className="justify-content-center">
            <h5>Apuntes encontrados</h5>
            {this.generateNotes()}
          </Row>
        </Jumbotron>
      </Container>
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

  generateNotes(){
    let notes = []

    const { results } = this.state;
    results.forEach(note => {
      let newJsx4Note = `<Note 
      filename=${note.Name} 
      extension=${note.Extension} 
      url=${note.Url} 
      description=${note.Description}
      />`;  
      notes.push(newJsx4Note);
    });

    return notes;
  }
  
}

export default Results;