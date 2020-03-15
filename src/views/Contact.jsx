import React from 'react';
import { Container, Jumbotron, Form } from 'react-bootstrap';
import Button from '@material-ui/core/Button';

import config from './../config'

export default class Contact extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            from: undefined,
            subject: undefined,
            msg: undefined,
            sended: undefined
        }

        this.sendMsg = this.sendMsg.bind(this);
    }

    render(){
        return (
            <Container>
                <Jumbotron>
                    <Form onSubmit={this.sendMsg}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="from" id="from" type="email" required="true" onChange={ e => this.setState({from:e.target.value}) }/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Asunto</Form.Label>
                            <Form.Control name="subject" id="subject" type="text" required="true" onChange={ e => this.setState({subject:e.target.value}) }/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Mensaje</Form.Label>
                            <Form.Control name="msg" id="msg" as="textarea" rows="4" required="true" onChange={ e => this.setState({msg:e.target.value}) }/>
                        </Form.Group>
                        <div className="row justify-content-end">
                            <Button 
                            type="submit"
                            variant="contained" 
                            color="primary"
                            disabled={!this.state.from || !this.state.msg || !this.state.subject}
                            >Enviar</Button>
                        </div>
                    </Form>
                </Jumbotron>
            </Container>
        )
    }

    sendMsg(e){
        const formData = e.currentTarget;
        /* const data = new FormData()
        data.append('from', this.state.from);
        data.append('subject', this.state.subject);
        data.append('msg', this.state.msg);
        */

        fetch(`${config.serverURI}/contact`, {
            method: 'POST',
            body: formData
        });
    }

}