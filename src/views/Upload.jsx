import './styles/upload.css';
import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ReactFileReader from 'react-file-reader';
import Snackbar from '@material-ui/core/Snackbar';
import Portal from "@material-ui/core/Portal";
import MuiAlert from '@material-ui/lab/Alert';
import { Container, Jumbotron } from "react-bootstrap";

import CareerSelect from '../components/CareerSelect';
import AssignatureSelect from '../components/AssignatureSelect';
import Loading from '../components/Loading';

import { uploadFile } from './../services/notesService'


class Upload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filesSelected: [],
      career: null,
      assignature: null,
      isLoading: false,
      isUploading: false,
      loaded: false,
      isError: false,
      errorMSj: '',
    }

    this.upLoad = this.upLoad.bind(this)

  }

  deleteFile(file) {
    const { filesSelected } = this.state;
    const copiedFiles = Array.from(filesSelected);
    const filteredFiles = copiedFiles.filter(element => element.name != file.name);
    
    this.setState({
      filesSelected: filteredFiles,
    });
  }

  upLoad() {
      this.setState({
        isUploading: true,
      }, () => {
        let filename = this.state.filesSelected[0].name.split('.');
        let fileExtension = filename[1];
        filename = filename[0].replace(" ", "_");;
        let fileDescription = this.state.fileDescription
  
        const data = new FormData();
        data.append('filename', filename);
        data.append('extension', fileExtension);
        data.append('description', fileDescription);
        data.append('assignatureid', this.state.assignature.id);
        data.append(filename, this.state.filesSelected[0], filename);
        
        uploadFile(data)
          .then(response => {
            this.setState({
              filesSelected: [],
              isLoaded: true,
              isUploading: false,
            });
          })
          .catch((err) => {
            this.setState({
              filesSelected: [],
              isLoaded: false,
              isUploading: false,
              isError: true,
              errorMsj: err.toString(),
            });
          });
      })
  }

  renderLabel() {
    const { filesSelected } = this.state;
    if (!filesSelected || !filesSelected.length) {
      return(
        <React.Fragment>
          <label htmlFor="real-apunte-btn">Seleccione un archivo..</label>
          <br/>
        </React.Fragment>)
    }
    return (
      <React.Fragment>
        {filesSelected.map(file =>
          <React.Fragment>
            <label>{file.name}</label>
            <IconButton 
              className="delete-button"
              color="primary"  
              component="span"
              onClick={() => this.deleteFile(file)}>
              <DeleteIcon />
            </IconButton>
            <br />
          </React.Fragment> )}
        {/* <label>Selecciona otro archivo</label> */}
      </React.Fragment>)
  }
  
  render() {
    const { career, isLoaded, isError, errorMsj, isUploading, filesSelected, assignature } = this.state;
    const Alert = (props) => <MuiAlert elevation={6} variant="filled" {...props} />;
    return isUploading ? <Loading /> :
      (<Container>
        <Jumbotron>
          <div className="upload-form-container">
            <div className="form-selects-row">
              <CareerSelect 
                onChange={(event, newCareer) => this.setState({ career: newCareer, isLoading: true })} />
              <AssignatureSelect
                careerId={career ? career.id : null}
                onChange={(event, newAssignature) => this.setState({ assignature: newAssignature })} />
            </div>
            <div className="form-selects-row">
              { this.renderLabel() }
              {filesSelected.length ? 
              <TextField
                style={{width: '100%', marginTop:'1%'}}
                id="description"
                label="Descripción"
                multiline
                rows="3"
                variant="outlined"
                onChange={ (event) => this.setState({fileDescription: event.target.value})}
              /> : null}
            </div>
            <div className="from-action-container">
              <br />
              <ReactFileReader disabled={filesSelected.length} handleFiles={(files) => this.setState(prevState => ({ filesSelected: [...files, ...prevState.filesSelected] }))}>
                <Button
                  className="search-button" 
                  color="primary" 
                  disabled={filesSelected.length}>Buscar..</Button>
              </ReactFileReader>
              <div className="float-right">
                <Button 
                  variant="contained" 
                  color="secondary" 
                  onClick={this.upLoad} 
                  disabled={isUploading || !assignature  || !filesSelected.length} >Subir</Button>
              </div>      
            </div>
            <Portal>
              <Snackbar 
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} 
                open={isError} 
                autoHideDuration={600000} 
                onClose={() => this.setState({ isError: false, })}>
                <Alert 
                  onClose={() => this.setState({ isError: false })} 
                  severity="error">{errorMsj}</Alert>
              </Snackbar>
              <Snackbar 
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} 
                open={isLoaded} 
                autoHideDuration={600000} 
                onClose={() => this.setState({ isLoaded: false, })}>
                <Alert 
                  onClose={() => this.setState({ isError: false })} 
                  severity="success">"El archivo se cargo exitosamente!"</Alert>
              </Snackbar>
            </Portal>
          </div>
        </Jumbotron>
      </Container>)
  }
}

export default Upload;