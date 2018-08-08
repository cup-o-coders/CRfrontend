import React, { Component } from 'react';
import './App.css';
import {Switch, Route,Link} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header'
import User from './pages/User';/*import data from Google API here*/
import Footer from './components/Footer.js'
// import Data from './data_sample/sample.json'
import LoginPage from './pages/Login.js'
import createUser from './components/createUser'

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


        <Switch>
          <Route exact path="/" component={Home} />
          <Route path= '/User' component={User} />
          <Route path ='/login' component={LoginPage}/>
          <Route path = '/create' component={createUser}/>
        </Switch>
      <div className="flexfooter"><Footer /></div>
      </div>

    );
  }
}

export default App;
