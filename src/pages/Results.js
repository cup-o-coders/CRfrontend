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
        <div className="flex-container">
          <div className="results-title">
            <h1>Your Matches</h1>
          </div>
          <div className="results-display">
            <p>Results go Here</p>
          </div>
          <div className="new-search">
            <input type="button" class="button" value="New Search" />
          </div>
          <div className="create">
            <div className="create-intro">
              <p>Create a User Profile to Save and Review Shops</p>
            </div>
            <div className="create-form">
            <form action="/action_page.php">
              <input type="text" placeholder="Name" name="Name" />
              <input type="text" placeholder="Email" name="Email" />
              <input type="text" placeholder="Password" name="Password" />
              <br/>
              <button type="submit">Create User</button>
            </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Results;
