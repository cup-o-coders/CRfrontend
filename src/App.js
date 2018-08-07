import React, { Component } from 'react';
import './App.css';
import {Switch, Route,Link} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header'
import User from './pages/User';/*import data from Google API here*/
import Footer from './components/Footer.js'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <div>
        <Header />
        <div className="flexfooter"><Footer /></div>
      
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path= '/User' component={User} />
        </Switch>

      </div>

    );
  }
}

export default App;
