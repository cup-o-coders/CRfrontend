import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import {Switch, Route,Link} from 'react-router-dom';
import '../css/results.css'
/*import data from Google API here*/

class Results extends Component {
  render() {
    return (
      <div>
        <div className="results-container">
          <div className="results-title">
            <h1>Your Matches</h1>
          </div>
          <br />
          <div className="results-display">
            <p>Results go Here</p>
          </div>
          <div className="new-search">
            <input type="button" class="button" value="New Search" />
          </div>
        </div>
      </div>
    );
  }
}

export default Results;
