import React, { Component } from 'react';
import './App.css';


import {Switch, Route,Link} from 'react-router-dom';
import Home from './pages/Home';
import Results from './pages/Results';
import Header from './components/Header'
import User from './pages/User';/*import data from Google API here*/
import Footer from './components/Footer.js'


class App extends Component {
  render() {
    return (

      <div>
        <Header />

        <Footer />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/results' component={Results} />
          <Route path= '/User' component={User} />
        </Switch>
      </div>

    );
  }
}

export default App;
