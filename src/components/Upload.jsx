import React, { Component } from 'react';
import { Row, Form } from "react-bootstrap";

export default class Upload extends Component {

    constructor(props){
        super(props)
        this.state = {
            fileSelected: "Buscar..."
        }

    }

    render(){
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
                        <label htmlFor="apunte" id="real-apunte-btn" className="btn btn-primary">{this.state.fileSelected}</label><br/>
                        <input type="file" name="apunte" id="apunte"/>
                    </Form.Group>
                    <div className="float-right">
                        <button type="submit" className="next btn btn-info mt-2" id="confimDatosPedido">Subir !</button>
                    </div>  
                </Form>
            </Row>
        )
    }

    manejarCambio(event){
        let files = event.target.files;
    }

}