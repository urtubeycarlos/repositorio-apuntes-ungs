import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';

const { getAssignatureByCareer } = require('../services/assignaturesService');

class AssignatureSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      assignatures: [],
      isLoading: false,
      disabled: true,
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
            //handle somehow this error
          })
      })
    }
  }

  render() {
    const { assignatures, isLoading, disabled } = this.state;
    return(
      <Autocomplete
        disabled={disabled}
        id="assignature-select"
        options={assignatures}
        onChange={(event, newValue) => this.props.onChange && this.props.onChange(event, newValue)}
        getOptionLabel={option => option.Name}
        renderInput={params => (
          <TextField fullWidth
            {...params}
            label="Materia"
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

export default AssignatureSelect;