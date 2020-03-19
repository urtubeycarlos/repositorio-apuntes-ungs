import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
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
          <Row className="justify-content-center">
              <Col sm={4} xs={4} className="my-auto">
                  <i className={this.state.fa_extension} style={{"fontSize":"4.5em"}}></i>
              </Col>
              <Col sm={8} xs={8} className="my-auto">
                  <Row>
                      <h5>{`${this.props.filename}.${this.props.extension}`}</h5>
                  </Row>
                  <Row>
                      <Button className="mx-3" variant="info" index={this.props.index} >Más Info</Button>
                  </Row>
              </Col>
          </Row>
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