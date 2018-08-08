import React, { Component } from 'react';
import '../css/header.css'
import { Link } from 'react-router-dom';

class Header extends Component{
  render(){
    return (
      <header>
        <Link to={`/`}>Home</Link>
        <div className="header-items center">
        Close Roast
        </div>
        <nav className="header-items right">
          <Link to={`/login`}>Login</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
