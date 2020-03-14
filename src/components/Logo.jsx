import React from 'react';
import './styles/logo.css'

const Logo = ({urlRedirect = '/home/search'}) => (
  <div className="logo-container" >
    <img alt="logo" src="./logo.png" onClick={() => window.location.href = urlRedirect}/>
  </div>);

export default Logo;