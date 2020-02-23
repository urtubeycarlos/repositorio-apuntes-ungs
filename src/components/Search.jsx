import React, { Component } from 'react';

import { Container, Row, Form } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CareerSelect from './CareerSelect';

const { getAssignatureByCareer } = require('../services/assignaturesService');

class Search extends Component {
    constructor(props) {
      super(props);

      this.state = {
        career: null,
        assignature: null,
        assignatureList: [],
        isLoading: null,
      }

      this.setCareer = this.setCareer.bind(this);
    }


    setCareer(newCareer) {
      this.setState({
        career: newCareer,
        isLoading: true,
      }, () => {
        debugger
        getAssignatureByCareer(newCareer.Id)
        .then(response => {
          this.setState({
            assignatureList: response.data.Assignatures,
            isLoading: false,
          });
        })
        .catch((err) => {
          //handle somehow this error
        });
      })
    }

    search() {

    }

    render() {
      const { assignatureList, isLoading } = this.state;
      return (
        <Row className="justify-content-center">
          <Form>
            <Form.Group>
              <CareerSelect onChange={(event, career) => this.setCareer(career)}/>
            </Form.Group>
            <Form.Group>
              <Autocomplete
                id="assignature-select"
                disabled={isLoading}
                options={assignatureList}
                onChange={(event, newValue) => this.setState({ assignature: newValue })}
                getOptionLabel={option => option.Name}
                renderInput={params => (<TextField {...params} label="Materia" fullWidth />)} />
            </Form.Group>
            <div className="float-right">
              <Button variant="contained" color="primary" onClick={() => this.search()}>Buscar</Button>
            </div>  
          </Form>
        </Row>);
          
    } 
}

export default Search;