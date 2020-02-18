import React, { Component } from 'react';
import './App.css';
import Logo from './components/Logo.jsx';
import $ from 'jquery'
import { Container, Row, FormGroup, Form } from 'react-bootstrap';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fileSelected: "Buscar..."
    }

    this.cambiarSitio = this.cambiarSitio.bind(this);
    this.manejarCambio = this.manejarCambio.bind(this);
  }

  render(){
    return (
      <Container>
        <Row className="justify-content-center">
          <img src="logo.svg"/>
        </Row>
        <Row className="justify-content-center">
          <Form>
            <Form.Group>
              <select className="form-control" id="menu" onChange={this.cambiarSitio}>
                <option>Buscar Apuntes</option>
                <option>Subir Apunte</option>
              </select>
            </Form.Group>
            <Form.Group>
              <label htmlFor="career">Carrera</label>
              <input type="text" className="form-control" name="career" id="career" placeholder="Ingrese Carrera..." />
            </Form.Group>
            <Form.Group>
              <label htmlFor="assignature">Materia</label>
              <input type="text" className="form-control" name="assignature" id="assignature" placeholder="Ingrese Materia..." />
            </Form.Group>
            <Form.Group className="mt-8">
              <label htmlFor="real-apunte-btn">Seleccione archivo</label><br/>
              <label htmlFor="apunte" id="real-apunte-btn" className="btn btn-primary">{this.state.fileSelected}</label><br/>
              <input type="file" name="apunte" id="apunte" onChange={this.manejarCambio}/>
            </Form.Group>
              <div className="float-right">
                <button type="submit" className="next btn btn-info mt-2" id="confimDatosPedido">Buscar !</button>
              </div>  
          </Form>
        </Row>
      </Container>
    );
  }

  cambiarSitio(event){
    window.location.href = event.target.urlMap[event.target.value];
  }

  manejarCambio(event){
    let files = event.target.files;
    this.setState({fileSelected: `Seleccionado: ${files[0].name}`});
  }

  componentDidMount(){

    console.log(window.location.href)

    $('#menu')[0].urlMap = {
      'Buscar Apuntes': 'search',
      'Subir Apunte': 'upload'
    }
  }
}
