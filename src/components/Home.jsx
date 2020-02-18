import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import $ from "jquery";
import 'jquery-ui/themes/base/core.css';
import 'jquery-ui/themes/base/theme.css';
import 'jquery-ui/themes/base/tabs.css';
import 'jquery-ui/ui/core';
import 'jquery-ui/ui/widgets/tabs';
import Logo from './Logo';
import Search from './Search';
import Upload from './Upload';

export default class Home extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return(
            <Container>
                <Logo />
                <div id="tabs">
                    <ul>
                        <li><a href="#tabs-1">Buscar Apuntes</a></li>
                        <li><a href="#tabs-2">Subir Apuntes</a></li>
                    </ul>
                    <div id="tabs-1">
                        <Search />
                    </div>
                    <div id="tabs-2">
                        <Upload />
                    </div>
                </div>
            </Container>
        )
    }

    componentDidMount(){
        $("#tabs").tabs();
    }

}