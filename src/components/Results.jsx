import React, { Component } from 'react';
import $ from 'jquery';
import { Container, Row, Jumbotron } from "react-bootstrap";
import Loading from "./Loading.jsx";
import Logo from './Logo';
import Note from './Note';

export default class Results extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            results: null
        }
    }

    render(){
        if( !this.state.results ){
            return (
                <Container>
                    <Logo></Logo>
                    <Jumbotron>
                        <Row className="justify-content-center">
                            <h5>Buscando apuntes</h5>
                        </Row>
                        <Loading />
                        <div id="notes">
                        </div>                   
                        <Note filename={'complejidad_computacional'} extension={'.java'} url={"https://www.youtube.com/"} description={"Soy una describicion Soy una describicion Soy una describicion Soy una describicion Soy una describicion"}/>
                    </Jumbotron>
                </Container>
            )
        } else {
            return (
                <Container>
                    <Logo></Logo>
                    <Jumbotron>
                        <Row className="justify-content-center">
                            <h5>Apuntes encontrados</h5>
                        </Row>
                        
                    </Jumbotron>
                </Container>
            )
            
        }
        
    }

    componentDidMount(){
        
        var self = this;

        var assignatureid = sessionStorage.getItem('assignatureid');
        var url = `https://repositorio-apuntes-ungs.000webhostapp.com/api/1.0/note?assignatureid=${assignatureid}`
        fetch(url)
            .then( response => response.json() )
            .then( json => {
                var notesDiv = $("#notes");
                json['Notes'].forEach(note => {
                    notesDiv.append( <Note filename={note.Name} extension={note.Extension} url={note.Url} description={note.Description}/> )
                });
            })
    }

}