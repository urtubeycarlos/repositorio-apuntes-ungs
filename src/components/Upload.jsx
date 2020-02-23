import React, { Component } from 'react';
import { Row, Form } from "react-bootstrap";
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';


class Upload extends Component {

    constructor(props){
        super(props);
        this.state = {
            fileSelected: "Buscar..."
        }

        this.selectFile = this.selectFile.bind(this);
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
                        <label htmlFor="raised-button-file">Seleccione archivo</label><br/>
                        <label htmlFor="raised-button-file"> 
                            <Button raised component="span" variant="contained" color="primary"> 
                                {this.state.fileSelected} 
                            </Button> 
                        </label>
                        <input type="file" id="raised-button-file" onChange={this.selectFile}/>
                    </Form.Group>
                    <div className="float-right">
                        <Button variant="contained" color="secondary">Subir</Button>
                    </div>  
                </Form>
            </Row>
        )
    }
    


    // manejarCambio(event){
    //     let files = event.target.files;
    // }

    selectFile(e){
        const file = e.target.files[0];
        this.setState({'fileSelected': `Seleccionado: ${file.name}`});
    }

}

export default Upload;