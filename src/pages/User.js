import React, { Component } from 'react';
import {Switch, Route,Link} from 'react-router-dom';
import '../css/user.css'
/*import data from Google API here*/

class User extends Component {
  render() {
    return (
      <main className="user-hero">
        <section className="login-hero">
          <img src={require("../images/cafe.jpeg")} />
        </section>
        <section className="greeting">
          <h1>Hi Props</h1>
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
        </section>
      </main>

    );
  }
}

export default User;
