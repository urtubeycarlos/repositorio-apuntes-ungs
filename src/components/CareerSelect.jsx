import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';

const { getAllCareers } = require('../services/careersService');

class CareerSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      careers: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    getAllCareers()
      .then(response => {
        this.setState({
          careers: response.data.Careers,
          isLoading: false,
        });
    })
    .catch((err) => {
      
    });
  }

  render() {
    const { careers, isLoading } = this.state;
    return(
      <Autocomplete
        id="career-select"
        className="career-select"
        options={careers}
        onChange={(event, newValue) => this.props.onChange && this.props.onChange(event, newValue)}
        getOptionLabel={option => option.Name}
        renderInput={params => (
          <TextField fullWidth
            {...params}
            label="Carrera"
            placeholder="Seleccione una carrera"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {isLoading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}  
        />
    )
  }
}

export default CareerSelect;