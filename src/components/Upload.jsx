import React, { useState } from 'react';

import { Row, Form } from "react-bootstrap";
import Button from '@material-ui/core/Button';
import ReactFileReader from 'react-file-reader';

const Upload = () => {
    /**
     * States and setStates
    */
    const [fileSelected, setFileSelected] = useState([]);

    /**
     * Methods
    */
    const upLoad = () => {
      
    }

    const loadFile = () => {
      const reader = new FileReader();

      reader.onload(() => {})
    }

    return(
        <Row className="justify-content-center">
            <Form>
                <Form.Group>
                    <label htmlFor="career">Carrera</label>
                    <input type="text" className="form-control" name="career" id="career" placeholder="Seleccione Carrera..." />
                </Form.Group>
                <Form.Group>
                    <label htmlFor="assignature">Materia</label>
                    <input type="text" className="form-control" name="assignature" id="assignature" placeholder="Seleccione Materia..." />
                </Form.Group>
                <Form.Group className="mt-8">
                    <label htmlFor="real-apunte-btn">Seleccione archivo</label><br/>
                    <ReactFileReader handleFiles={(files) => loadFile(files)}>
                      <Button type="file" variant="contained" color="primary">Buscar..</Button>
                    </ReactFileReader>
                    <br/>
                </Form.Group>
                <div className="float-right">
                    <Button variant="contained" color="secondary" onClick={() => upLoad()}>Subir</Button>
                </div>  
            </Form>
        </Row>);

}

export default Upload;