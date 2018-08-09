import React, { Component } from 'react';
import '../css/header.css'
import { Link } from 'react-router-dom';

class Header extends Component{
  render(){
    return (
      <header>
        <Link to={`/`}>Home</Link>
        <section className="header-logo">
          <img src={require("../images/logo.png")} />
        </section>
        <section className="login-sign">
          <Link to={`/login`}>Login</Link>/
          <Link to={'/create'}>Sign Up</Link>
        </section>
      </header>
    );
  }
}

export default Header;
