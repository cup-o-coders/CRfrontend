import React, { Component } from 'react';
import '../css/header.css'
import {Switch, Route,Link} from 'react-router-dom';


class Header extends Component{
  render(){
    return (
      <div className="top">
        <div className="header-items left">
          <a href="/">Home</a>
        </div>
        <div className="header-items center">
          Close Roast
        </div>
        <div className="header-items right">
          <Link to={`/login`}>Login</Link>
        
        </div>
      </div>
    );
  }
}

export default Header;
