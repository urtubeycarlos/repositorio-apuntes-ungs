import React, { Component } from 'react';
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

    // componentWillMount(){
    //     var self = this;
    //     $.ajax("http://localhost/api/1.0/note").
    //                 then(function(response){
    //                     response['Notes'] = response['Notes'].map(function(note){
    //                         console.log(note)
    //                         return (
    //                             <Note filename={`${note.Filename}.${note.Extension}`} description={note.Description} url={note.Url}/>
    //                         )
    //                     })
    //                     self.setState({'results': response['Notes']});
    //                 })
        
    // }

}