import React from 'react';
import { Container, Jumbotron, Form } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

import config from './../config'

export default class Contact extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            from: "",
            subject: "",
            msg: "",
            msgSended: false
        }

        this.sendMsg = this.sendMsg.bind(this);
        this.checkEmail = this.checkEmail.bind(this);
    }

    render(){
        return (
            <Container>
                <Jumbotron>
                    <Form>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="from" id="from" type="email" required="true" value={this.state.from} onChange={ e => this.setState({from:e.target.value}) }/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Asunto</Form.Label>
                            <Form.Control name="subject" id="subject" type="text" required="true" value={this.state.subject} onChange={ e => this.setState({subject:e.target.value}) }/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Mensaje</Form.Label>
                            <Form.Control name="msg" id="msg" as="textarea" rows="4" required="true" value={this.state.msg} onChange={ e => this.setState({msg:e.target.value}) }/>
                        </Form.Group>
                        <div className="row justify-content-end">
                            <Button
                            variant="contained" 
                            color="primary"
                            onClick={this.sendMsg}
                            >Enviar</Button>
                        </div>
                    </Form>
                    <Snackbar 
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} 
                        open={this.state.msgSended} 
                        autoHideDuration={5000}
                        onClose={() => this.setState({ msgSended: false })}>
                        <Alert 
                        onClose={() => this.setState({ msgSended: false })} 
                        severity="success">"Mensaje enviado exitosamente!"</Alert>
                    </Snackbar>
                </Jumbotron>
            </Container>
        )
    }

    sendMsg(e){
        if( this.checkEmail(this.state.from) && this.state.subject && this.state.msg ){
            
            const formData = new FormData()
            formData.append('from', this.state.from);
            formData.append('subject', this.state.subject);
            formData.append('msg', this.state.msg);

            this.setState({
                from: "",
                subject: "",
                msg: ""
            })

            fetch(`${config.serverURI}/contact`, {
                method: 'POST',
                body: formData
            }).then( response => response.json() )
            .then( json => {
                this.setState({
                    msgSended: true
                })  
                console.log(json);   
            })
        }
        
    }

    checkEmail(email){
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if( email.match(mailformat) )
            return true;
        return false;
    }

}