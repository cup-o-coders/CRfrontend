import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import {Switch, Route,Link} from 'react-router-dom'
import '../css/home.css'
/*import data from Google API here*/

class Home extends Component {
  render() {
    return (
      <div>
        <main>
          <div className="title">
            Close Roast
          </div>
          <div className="subtitle">
             Discover nearby coffeeshops save your favorites, and forget Starbucks once and for all(if you want)
          </div>
        </main>
        <div className="instructor">
          <p>Enter your location and some stuff pops off</p>
        </div>
        <div className="search-bar">
        
        </div>
      </div>
    );
  }
}

export default Home;
