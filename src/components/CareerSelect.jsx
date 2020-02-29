import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

const { getAllCareers } = require('../services/careersService');

class CareerSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      careers: [],
      isLoading: true,
      isError: false,
      errorMsj: '',
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
      this.setState({
        isError: true,
        isLoading: false,
        errorMsj: err.toString(),
      })
    });
  }

  render() {
    const { careers, isLoading, isError, errorMsj } = this.state;
    const Alert = (props) => <MuiAlert elevation={6} variant="filled" {...props} />;
    return(
      <React.Fragment>
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
        <Snackbar open={isError} autoHideDuration={6000} onClose={() => this.setState({ isError: false, })}>
          <Alert onClose={() => this.setState({ isError: false })} severity="error">{errorMsj}</Alert>
        </Snackbar>
      </React.Fragment>)
  }
}

export default CareerSelect;