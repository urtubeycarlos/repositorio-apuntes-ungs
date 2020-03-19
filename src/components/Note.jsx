import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, Accordion } from "react-bootstrap";
import './styles/note.css'
/* import Button from '@material-ui/core/Button'; */

export default class Note extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            fa_extension: "fa fa-file-o"
        }

        /* this.extensionToFontAwesome = {
            "pdf": "fa fa-file-pdf-o"
        } */
    }
    render(){
        return (
            <Card className="mb-4">
                <Accordion.Toggle as={Card.Header} eventKey={this.props.index}>
                    <Row>
                        <Col>
                        <i className={this.state.fa_extension} style={{"fontSize":"4em"}}></i>
                        </Col>
                        <Col className="my-auto">
                        <h5>{`${this.props.filename}.${this.props.extension}`}</h5>  
                        </Col>
                    </Row>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={this.props.index}>
                    <Card.Body>
                        <Row>
                            {this.props.description}
                        </Row>    
                        <Row className="mt-3">
                            <Button variant='info' href={this.props.url}>Descargar</Button>
                        </Row>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        )
    }

    componentDidMount(){

        let extensions = {
            word : ['doc', 'docx', 'odt'],
            excel : ['xls', 'xlsx', 'csv', 'xps'],
            slide : ['ppt', 'pptx', 'pps', 'ppsx', 'odp'],
            text : ['txt', 'md', 'markdown'],
            video : ['mp4', 'avi', '3gp', 'wmv'],
            audio : ['mp3', 'm4a', 'ogg', 'aac', '3gpp'],
            compressed : ['zip', 'rar'],
            pdf : ['pdf'],
            book : ['epub'],
            imgs : ['jpg', 'jpeg', 'jfif', 'png', 'webp', 'gif', 'bmp', 'dib', 'tif', 'tiff', 'svg'],
            code : ['py', 'java', 'jar', 'c', 'cpp', 'go', 'asm', 'js', 'html', 'css', 'sass']
        }

        let fas = {
            word : 'fa fa-file-word-o',
            excel: 'fa fa-file-excel-o',
            slide: 'fa fa-file-powerpoint-o',
            text: 'fa fa-file-text-o',
            video: 'fa fa-file-video-o',
            audio: 'fa fa-file-audio-o',
            compressed: 'fa fa-file-zip-o',
            pdf: 'fa fa-file-pdf-o',
            book: 'fa fa-book',
            imgs: 'fa fa-file-picture-o',
            code: 'fa fa-file-code-o'
        }

        for(const type in extensions)
            if( extensions[type].includes( this.props.extension ) )
                this.setState({fa_extension: fas[type]})
        
    }

}