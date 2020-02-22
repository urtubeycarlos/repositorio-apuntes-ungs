import React, { useState } from 'react';
import { Container, Row, Form } from 'react-bootstrap';
import Button from '@material-ui/core/Button';

const Search = () => {
    /**
     * States and setStates
    */
    const [career, setCareer] = useState('');
    const [assignature, setAssignature] = useState('')

    /**
     * Methods
    */

    const search = () => {

    }
    return (
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
                <div className="float-right">
                    <Button variant="contained" color="primary" onClick={() => search()}>Buscar</Button>
                </div>  
            </Form>
        </Row>);
        
    //   manejarCambio(event){
    //     let files = event.target.files;
    //     this.setState({fileSelected: `Seleccionado: ${files[0].name}`});
    //   }
      
}

export default Search;