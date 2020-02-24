import React, { Component } from 'react';

import { Row, Form } from 'react-bootstrap';
import Button from '@material-ui/core/Button';

import CareerSelect from './CareerSelect';
import AssignatureSelect from './AssignatureSelect';

const { getAssignatureByCareer } = require('../services/assignaturesService');

class Search extends Component {
    constructor(props) {
      super(props);

      this.state = {
        career: null,
        assignature: null,
        isLoading: null,
      }

      this.setCareer = this.setCareer.bind(this);
    }

    setCareer(newCareer) {
      this.setState({
        career: newCareer,
        isLoading: true,
      });
    }

    search() {

    }

    render() {
      const { career, isLoading } = this.state;
      return (
        <Row className="justify-content-center">
          <Form>
            <Form.Group>
              <CareerSelect 
                onChange={(event, newCareer) => this.setState({ career: newCareer, isLoading: true })} 
              />
            </Form.Group>
            <Form.Group>
              <AssignatureSelect
                careerId={career ? career.Id : null}
                onChange={(event, newAssignature) => this.setState({ assignature: newAssignature })} 
              />
            </Form.Group>
            <div className="float-right">
              <Button 
                disabled={isLoading} 
                variant="contained" 
                color="primary" 
                onClick={() => this.search()}>Buscar</Button>
            </div>  
          </Form>
        </Row>);
          
    } 
}

export default Search;