import React, { Component } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

import Login from '../views/Login';
import WithoutPosition from '../views/WithoutPosition';
import Home from '../views/Home';
import Logo from '../components/Logo';

const RootRouter = () => {
  const WrapperLogin = () => (
    <React.Fragment>
      <Logo urlRedirect="/login" />
      <Login />
    </React.Fragment>
  )
  const WrapperNoPosition = () => (
    <React.Fragment>
      <Logo urlRedirect="/login" />
      <WithoutPosition />
    </React.Fragment>
  )
  return (
  <BrowserRouter>
    <Switch>
      <Route exact path={'/'} component={() => <WrapperLogin />} />
      <Route path={'/login'} component={() => <WrapperLogin />} />
      <Route path={'/no-position-accepted'} component={() => <WrapperNoPosition />} />
      <Route path={'/home'} component={Home} />
      <Redirect to={'/login'} component={() => <WrapperLogin />} />
    </Switch>
  </BrowserRouter>);
}

export default RootRouter;




