import './styles/search.css';
import React, { Component } from 'react';

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
        redirect: undefined
      }

    }

    search = () => {
      window.location.href = `results?assignature=${this.state.assignature.Id}`;
    }

    render() {
      const { career, isLoading, assignature } = this.state;

      return(
        <div className="search-form-container">
          <div className="form-selects-row">
            <CareerSelect 
              onChange={(event, newCareer) => this.setState({ career: newCareer, isLoading: true })} />
            <AssignatureSelect
              careerId={career ? career.Id : null}
              onChange={(event, newAssignature) => this.setState({ assignature: newAssignature })} />
          </div>
          <div className="from-action-container">
            <div className="float-right">
            <Button 
                disabled={!career || !assignature} 
                variant="contained" 
                color="primary"
                onClick={this.search} 
                >Buscar
            </Button>
            </div>  
          </div>
        </div>);
          
    } 
}

export default Search;