import React, { Component } from 'react';
import { Container, Row, Form } from 'react-bootstrap';
import $ from 'jquery';
import 'jquery-ui/themes/base/core.css';
import 'jquery-ui/themes/base/theme.css';
import 'jquery-ui/themes/base/tabs.css';
import 'jquery-ui/ui/core';
import 'jquery-ui/ui/widgets/tabs';
import Logo from './Logo';

export default class Search extends Component {
    
    constructor(props){
        super(props);

    }

    render(){
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
                    <button type="submit" className="next btn btn-info mt-2" id="confimDatosPedido">Buscar !</button>
                </div>  
            </Form>
            </Row>

        )
    }
    
      manejarCambio(event){
        let files = event.target.files;
        this.setState({fileSelected: `Seleccionado: ${files[0].name}`});
      }
      
      componentDidMount(){
          $("#tabs").tabs();
      }
}