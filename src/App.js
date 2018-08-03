import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
import {Switch, Route} from 'react-router-dom'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
/*import data from Google API here*/
=======
import {Switch, Route,Link} from 'react-router-dom';
import Home from './pages/Home';
import Results from './pages/Results';
import Header from './components/Header'
import User from './pages/User';/*import data from Google API here*/
>>>>>>> 895fcbd65767ca059d06fc5ca72531b00e38f4dc

class App extends Component {
  render() {
    return (

      <div>
        <Header />
<<<<<<< HEAD
        <Footer />
=======
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/Shops' component={Results} />
          <Route path= '/User' component={User} />
        </Switch>
>>>>>>> 895fcbd65767ca059d06fc5ca72531b00e38f4dc
      </div>

    );
  }
}

export default App;
