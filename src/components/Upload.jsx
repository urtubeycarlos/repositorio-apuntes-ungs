import './styles/upload.css';
import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ReactFileReader from 'react-file-reader';

import CareerSelect from '../components/CareerSelect';
import AssignatureSelect from '../components/AssignatureSelect';


class Upload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filesSelected: [],
      career: null,
    }

  }

  render() {
    const { career } = this.state;
    return(
      <div className="upload-form-container">
        <div className="form-selects-row">
          <CareerSelect 
            onChange={(event, newCareer) => this.setState({ career: newCareer, isLoading: true })} />
          <AssignatureSelect
            careerId={career ? career.Id : null}
            onChange={(event, newAssignature) => this.setState({ assignature: newAssignature })} />
        </div>
        <div className="from-action-container">
          { this.renderLabel() }
          <ReactFileReader handleFiles={(files) => this.setState(prevState => ({ filesSelected: [...files, ...prevState.filesSelected] }))}>
            <Button type="file" variant="contained" color="primary">Buscar..</Button>
          </ReactFileReader>
          <br/>
          <div className="float-right">
            <Button variant="contained" color="secondary" onClick={() => this.upLoad()}>Subir</Button>
          </div>      
        </div>
      </div>);
  }

  renderLabel() {
    const { filesSelected } = this.state;
    if (!filesSelected || !filesSelected.length) {
      return(
        <React.Fragment>
          <label htmlFor="real-apunte-btn">Seleccione archivo</label>
          <br/>
        </React.Fragment>)
    }
    return (
      <React.Fragment>
        {filesSelected.map(file =>
          <React.Fragment>
            <label>{file.name}</label>
            <IconButton 
              color="primary"  
              component="span"
              onClick={() => this.deleteFile(file)}>
              <DeleteIcon />
            </IconButton>
            <br />
          </React.Fragment> )}
        <label>Selecciona otro archivo</label>
      </React.Fragment>)
  }

  deleteFile(file) {
    const { filesSelected } = this.state;
    const copiedFiles = Array.from(filesSelected);
    const filteredFiles = copiedFiles.filter(element => element.name != file.name);
    
    this.setState({
      filesSelected: filteredFiles,
    });
  }

  
}

export default Upload;