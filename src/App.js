import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
/*import data from Google API here*/

class App extends Component {
  render() {
    return (
      <div className="flex-container">
        <Header />
        <div className="flexfooter"><Footer /></div>
      </div>
    );
  }
}

export default App;
