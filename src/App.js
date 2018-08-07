import React, { Component } from 'react';
import './App.css';
import {Switch, Route,Link} from 'react-router-dom';
import Home from './pages/Home';
import Results from './pages/Results';
import Header from './components/Header'
import User from './pages/User';/*import data from Google API here*/
import Footer from './components/Footer.js'
import Data from './data_sample/sample.json'
import LoginPage from './pages/Login.js'


class App extends Component {
  constructor(props){
    super(props)
    this.state= {data:Data.businesses}
  }
  render() {


    return (

      <div className="flex-container">
        <Header />
        <div className="flexfooter"><Footer /></div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/Results' render={(props)=><Results results={this.state.data}/>} />
          <Route path= '/User' component={User} />
          <Route path ='/login' component={LoginPage}/>
        </Switch>

      </div>

    );
  }
}

export default App;
