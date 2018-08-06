import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import {Switch, Route,Link} from 'react-router-dom'
/*import data from Google API here*/

class User extends Component {
  render() {
    return (
      <div className="flex-container">
        <div className="greeting">
          <h1>Hi Props</h1>
        </div>
        <div className="user-search">
          <button type="button">New Search</button>
        </div>
        <div className="favorites">
          <div className="favorites-display">
            favorites display
          </div>
          <div className="favorites-display">
            favorites display
          </div>
          <div className="favorites-display">
            favorites display
          </div>
        </div>
      </div>

    );
  }
}

export default User;
