import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const { getAllCareers } = require('../services/careersService');

class CareerSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      careers: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true,
    }, () => {
      getAllCareers()
        .then(response => {
          this.setState({
            careers: response.data.Careers,
            isLoading: false,
          });
      })
      .catch((err) => {
        //handle somehow this error
      });
    })
  }

  render() {
    const { careers, isLoading } = this.state;
    return(
      <Autocomplete
        disabled={isLoading}
        id="career-select"
        options={careers}
        onChange={(event, newValue) => this.props.onChange && this.props.onChange(event, newValue)}
        getOptionLabel={option => option.Name}
        renderInput={params => (<TextField {...params} label="Carrera" fullWidth />)} />
    )
  }
}

export default CareerSelect;