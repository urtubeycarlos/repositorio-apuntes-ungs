import React, { Component } from 'react';
import { Row, Form, Button } from "react-bootstrap";
import $ from 'jquery';
import 'jquery-ui/themes/base/core.css';
import 'jquery-ui/themes/base/theme.css';
import 'jquery-ui/themes/base/autocomplete.css';
import 'jquery-ui/ui/core';
import 'jquery-ui/ui/widgets/autocomplete';
import Loading from './Loading';
import './Upload.css'

export default class Upload extends Component {

    constructor(props){
        super(props)

        this.state = {
            fileSelected: "Buscar...",
            careers: [],
            assignatures: []
        }

        this.showFilename = this.showFilename.bind(this);
        this.upload = this.upload.bind(this);
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
                    <Form.Group>
                        <label htmlFor="description">Descripción</label>
                        <textarea name="description"  className="form-control" id="description" cols="30" rows="5" placeholder="Ingrese una descripción sobre el contenido del archivo que va a subir" maxLength="500" style={{"resize": "none"}}></textarea>
                    </Form.Group>
                    <Form.Group className="mt-8">
                        <label htmlFor="real-apunte-btn">Seleccione archivo</label><br/>
                        <label htmlFor="apunte" id="real-apunte-btn" className="btn btn-primary">{this.state.fileSelected}</label><br/>
                        <input type="file" name="apunte" id="apunte" onChange={this.showFilename}/>
                    </Form.Group>
                    <Button variant='info' className="float-right" onClick={this.upload}>Subir Apunte</Button> 
                </Form>
            </Row>
        )
    }

    componentDidMount(){
        var self = this;
        
        fetch("https://repositorio-apuntes-ungs.000webhostapp.com/api/1.0/career")
            .then( response => response.json() ) 
            .then( json => {
                json = json['Careers'];
                var careerMap = {};
                var careerNames = [];

                json.forEach(career => {
                    careerMap[career.Name] = career;
                    careerNames.push( career.Name );
                });

            self.setState({'careers': careerMap});
            $("#career").autocomplete({source: careerNames});

        });

    }

    showFilename(event){
        let files = event.target.files;
        this.setState({fileSelected: `Seleccionado: ${files[0].name}`});
    }

    upload(){
        
    }


}