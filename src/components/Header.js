import React, { Component } from 'react';
import '../css/header.css'


class Header extends Component{
  render(){
    return (
      <div className="top">
        <div className="header-items left">
          <a href="/home">Home</a>
        </div>
        <div className="header-items center">
          Close Roast
        </div>
        <div className="header-items right">
          <a href="#">Login</a>
        </div>
      </div>
    );
  }
}

export default Header;
