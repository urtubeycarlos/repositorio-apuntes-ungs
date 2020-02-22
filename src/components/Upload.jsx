import React, { useState } from 'react';
import { Row, Form } from "react-bootstrap";
import Button from '@material-ui/core/Button';

const Upload = () => {
    /**
     * States and setStates
    */
    const [fileSelected, setFileSelected] = useState('Buscar..')

    /**
     * Methods
    */
    const upLoad = () => {

        this.showFilename = this.showFilename.bind(this);
        this.upload = this.upload.bind(this);
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
                    <Button variant="contained" color="primary" onClick={() => console.log('clicked')}>{fileSelected}</Button>
                    <br/>
                    <input type="file" name="apunte" id="apunte"/>
                </Form.Group>
                <div className="float-right">
                    <Button variant="contained" color="secondary" onClick={() => upLoad()}>Subr</Button>
                </div>  
            </Form>
        </Row>)


    // manejarCambio(event){
    //     let files = event.target.files;
    // }

}

export default Upload;