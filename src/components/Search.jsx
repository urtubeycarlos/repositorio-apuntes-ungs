import './styles/search.css';
import React, { Component } from 'react';

import { Row, Form } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
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
        this.setState({'redirect':`results?assignatureid=${this.state.assignature.Id}`});
    }

    render() {
      const { career, isLoading, assignature } = this.state;
      if( this.state.redirect )
        return <Redirect to={this.state.redirect} />
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