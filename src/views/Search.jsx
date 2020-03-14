import './styles/search.css';
import React, { Component } from 'react';

import { Container, Jumbotron } from "react-bootstrap";
import Button from '@material-ui/core/Button';

import CareerSelect from '../components/CareerSelect';
import AssignatureSelect from '../components/AssignatureSelect';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      career: null,
      assignature: null,
    }

  }

  render() {
    const { career, assignature } = this.state;
    return(
      <Container>
        <Jumbotron>
          <div className="search-form-container">
            <div className="form-selects-row">
              <CareerSelect 
                onChange={(event, newCareer) => this.setState({ career: newCareer, isLoading: true })} />
              <AssignatureSelect
                careerId={career ? career.id : null}
                onChange={(event, newAssignature) => this.setState({ assignature: newAssignature })} />
            </div>
            <div className="from-action-container">
              <div className="float-right">
                <Button
                  className="search-button"
                  disabled={!career || !assignature} 
                  variant="contained" 
                  color="primary"
                  onClick={() => window.location.href = `/home/results?assignature=${assignature.id}`} 
                >Buscar
                </Button>
              </div>  
            </div>
          </div>
        </Jumbotron>
      </Container>
    )
  }
}

export default Search;