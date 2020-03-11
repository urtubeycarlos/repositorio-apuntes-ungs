import './styles/results.css';
import React, { Component } from 'react';
import { Container, Row, Jumbotron } from "react-bootstrap";
import Loading from "../components/Loading.jsx";
import Logo from '../components/Logo';
import Note from '../components/Note';

import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';

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
    if (searchParams.assignature) {
      getNoteByAssignaure(searchParams.assignature)
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
    results.forEach(note => 
      notes.push(
        <Note 
          filename={note.filename} 
          extension={note.extension} 
          url={note.url} 
          description={note.description} />));

    return notes;
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
          <Row className="justify-content-center">
            <IconButton
              className="home-button" 
              color="primary"  
              component="span"
              onClick={() => window.location.href = 'home'}>
              <HomeIcon />
            </IconButton>
            <h5>{results && results.length ? 'Apuntes encontrados' : 'Materia sin apuntes'}</h5>
          </Row>
            {this.generateNotes()}
        </Jumbotron>
      </Container>
  }
  
}

export default Results;