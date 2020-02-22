import React, { Component } from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import $ from 'jquery';
import 'jquery-ui/themes/base/core.css';
import 'jquery-ui/themes/base/theme.css';
import 'jquery-ui/themes/base/autocomplete.css';
import 'jquery-ui/ui/core';
import 'jquery-ui/ui/widgets/autocomplete';
import Logo from './Logo';
import './Search.css';

export default class Search extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            careers: [],
            assignatures: []
        }

        this.getAssignatures = this.getAssignatures.bind(this)
        this.showResults = this.showResults.bind(this);

    }

    render(){
        return (
            <Row className="justify-content-center">
                <Form>
                    <Form.Group>
                        <label htmlFor="career">Carrera</label>
                        <input type="text" className="form-control" name="career" id="career" placeholder="Seleccione Carrera..."/>
                    </Form.Group>
                    <Form.Group>
                        <label htmlFor="assignature">Materia</label>
                        <input type="text" className="form-control" name="assignature" id="assignature" placeholder="Seleccione Materia..."/>
                    </Form.Group>
                    <Button className="float-right mt-2" variant="info" onClick={this.showResults}>Buscar</Button>
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
                $("#career").autocomplete({source: careerNames,});
                $("#career").on( "autocompletechange", self.getAssignatures );


        });

    }

    getAssignatures(event){
        var self = this;
        var career = this.state.careers[event.target.value];
        if( career ) {
            var url = `https://repositorio-apuntes-ungs.000webhostapp.com/api/1.0/assignature?careerid=${career.Id}`;
            console.log(url);
            fetch(url)
                .then( response => response.json() )
                .then( json => {
                    json = json['Assignatures'];
                    var assignatureMap = {}
                    var assignatureNames = []
                    
                    json.forEach( assignature => {
                        assignatureMap[assignature.Name] = assignature;
                        assignatureNames.push( assignature.Name );
                    });

                    self.setState({'assignatures': assignatureMap});
                    $("#assignature").autocomplete({source: assignatureNames,});

                });
        }
    }

    showResults(){
        console.log("Test")
        let assignature = this.state.assignatures[ $("#assignature").val() ];
        sessionStorage.setItem('assignatureid', assignature.Id);
        window.location.href = "results";

    }
      
}