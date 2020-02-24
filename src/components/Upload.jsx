import React, { Component } from 'react';

import { Row, Form } from "react-bootstrap";
import Button from '@material-ui/core/Button';
import ReactFileReader from 'react-file-reader';

import CareerSelect from '../components/CareerSelect';
import AssignatureSelect from '../components/AssignatureSelect';

import './styles/upload.css';

class Upload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fileSelected: null,
      career: null,
    }

  }
    /**
     * Methods
    */
    upLoad = () => {
      
    }

    loadFile = () => {
      const reader = new FileReader();

      reader.onload(() => {})
    }

    render() {
      const { career } = this.state;
      return(
          <div className="upload-form-container">
            <div className="form-selects-row">
              <CareerSelect 
                onChange={(event, newCareer) => this.setState({ career: newCareer, isLoading: true })} 
              />
              <AssignatureSelect
                careerId={career ? career.Id : null}
                onChange={(event, newAssignature) => this.setState({ assignature: newAssignature })} 
              />
            </div>
            <div className="from-action-container">
              <label htmlFor="real-apunte-btn">Seleccione archivo</label><br/>
              <ReactFileReader handleFiles={(files) => this.loadFile(files)}>
                <Button type="file" variant="contained" color="primary">Buscar..</Button>
              </ReactFileReader>
              <br/>
              <div className="float-right">
                <Button variant="contained" color="secondary" onClick={() => this.upLoad()}>Subir</Button>
              </div>  
                
            </div>
          </div>)
    }
}

export default Upload;