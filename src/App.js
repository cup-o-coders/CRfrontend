import React, { Component } from 'react';
import './App.css';
import {Switch, Route,Link} from 'react-router-dom';
import Home from './pages/Home';
import Results from './pages/Results';
import User from './pages/User';/*import data from Google API here*/

class App extends Component {
  render() {
    return (

      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/Shops' component={Results} />
          <Route path= '/User' component={User} />
        </Switch>
      </div>

    );
  }
}

export default App;
