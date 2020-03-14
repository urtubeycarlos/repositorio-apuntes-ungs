import './styles/home.css';

import React, { Component } from 'react';

import { Switch, Route, withRouter, BrowserRouter, Redirect } from "react-router-dom";

import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Results from './Results'
import Search from './Search';
import Upload from './Upload';

import MenuOptions from './components/MenuOptions';
import Logo from '../components/Logo';

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      openSidebar: false,
    }
  }

  render() {
    const { openSidebar } = this.state; 
    const path = this.props.match.path;
    const location = this.props.location;
    return(
      <div className="layout">
        <AppBar 
          position="static"
          className="top-bar-menu"
        >
          <Toolbar>
            <IconButton
              edge="start" 
              color="inherit"
              aria-label="menu"
              onClick={() => this.setState({ openSidebar: true })}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer 
          className="side-bar-menu"
          open={openSidebar} 
          onClose={() => this.setState({ openSidebar: false, })}
        >
        <div className="header-side-bar-menu" />
        <div className="side-bar-menu-options">
          <MenuOptions />
        </div>
        </Drawer>
        <div className="layout-container">
            <Logo />
            <BrowserRouter>
              <Switch location={ location }>
                <Route exact path={`${path}/`}  component={() => null}/>
                <Route path={`${path}/search`}  component={Search}/>
                <Route path={`${path}/results`} component={Results}/>
                <Route path={`${path}/upload`}  component={Upload}/>
              </Switch>
            </BrowserRouter>
          </div>
          <Redirect to={`${path}/search`} />
      </div>)
  }
}

export default withRouter(Home);