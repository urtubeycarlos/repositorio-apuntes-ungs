import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

const { getAssignatureByCareer } = require('../services/assignaturesService');

class AssignatureSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      assignatures: [],
      isLoading: false,
      disabled: true,
      isError: false,
      errorMsj: '',
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.careerId !== this.props.careerId && this.props.careerId) {
      this.setState({
        disabled: false,
        isLoading: true,
      }, () => {
        getAssignatureByCareer(this.props.carrerId)
          .then(response => {
            this.setState({
              assignatures: response.data.Assignatures,
              isLoading: false,
            })
          })
          .catch((err) => {
            this.setState({
              isLoading: false,
              isError: true,
              errorMsj: err.toString(),
            })
          })
      })
    }
  }

  render() {
    const { assignatures, isLoading, disabled, isError, errorMsj } = this.state;
    const Alert = (props) => <MuiAlert elevation={6} variant="filled" {...props} />;
    return(
      <React.Fragment>
        <Autocomplete
          disabled={disabled}
          id="assignature-select"
          className="assignature-select"
          options={assignatures}
          onChange={(event, newValue) => this.props.onChange && this.props.onChange(event, newValue)}
          getOptionLabel={option => option.Name}
          renderInput={params => (
            <TextField fullWidth
              {...params}
              label="Materia"
              placeholder="Seleccione una materia"
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
        <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} open={isError} autoHideDuration={600000} onClose={() => this.setState({ isError: false, })}>
          <Alert onClose={() => this.setState({ isError: false })} severity="error">{errorMsj}</Alert>
        </Snackbar>
      </React.Fragment>)
  }
}

export default AssignatureSelect;