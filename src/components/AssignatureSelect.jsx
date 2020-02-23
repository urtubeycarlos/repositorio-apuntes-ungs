import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const { getAllCareers } = require('../services/careersService');

class CareerSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      assignatures: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true,
    }, function() {
      getAllCareers()
        .then(response => {
          this.setState({
            careers: response.data.Careers,
            isLoading: false,
          });
      })
      .catch((err) => {
        //handle somehow this error
        //Se deberia reintentar la obtención de carreras una cantidad de n veces;
      });
    })
  }

  render() {
    const { assignatures, isLoading } = this.state;
    return(
      <Autocomplete
        disabled={isLoading}
        id="assignature-select"
        options={assignatures}
        onChange={(event, newValue) => this.props.onChange && this.props.onChange(event, newValue)}
        getOptionLabel={option => option.Name}
        renderInput={params => (<TextField {...params} label="Materia" fullWidth />)} 
        />
    )
  }
}

export default CareerSelect;