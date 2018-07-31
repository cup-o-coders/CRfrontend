import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route,Link} from 'react-router-dom'
/*import data from Google API here*/

class App extends Component {
  render() {
    return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path='/Shops' component={Results} />
      <Route path= '/User' component={profile}
    </Switch>
    );
  }
}

export default App;
