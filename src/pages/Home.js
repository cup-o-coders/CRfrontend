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
        <h1>Close Roast</h1>
        /* Style this centered over image*/

        <h3> Discover nearby coffeeshops, save your favorites, and forget Starbucks once and for all(if you want)
        </h3>
        /*style this centered below Close Roast Title*/
      </main>
      </div>

    );
  }
}

export default Home;
