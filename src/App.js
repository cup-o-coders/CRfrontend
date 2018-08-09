import React, { Component } from 'react';
import {Switch, Route,Link} from 'react-router-dom';
import './css/resets.css'
import './css/base.css'
import Home from './pages/Home';
import Header from './components/Header'
import User from './pages/User';/*import data from Google API here*/
import Footer from './components/Footer.js'
// import Data from './data_sample/sample.json'
import LoginPage from './pages/Login.js'
import createUser from './components/createUser'
import {getFavorites,createFavorite} from './api/index.js'
import Shopcard from './components/shopcard'
import AuthService from './services/AuthService'

const Auth = new AuthService()

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      favorites:[],
      newFave: false
    }
  }
  componentWillMount(){
  getFavorites()
    .then(APIfavorites => {
      this.setState({
        favorites: APIfavorites
      })
    }
  )
}

handleNewFavorite(FavoriteInfo) {
  createFavorite(FavoriteInfo)
  .then(successFavorite => {
      console.log("SUCCESS! New favorite: ", successFavorite);
      let {favorites} = this.state.favorites
      favorites.push(successFavorite)
      this.setState({
            newFave: true,
            favorites:favorites
  })
})
}



  render() {
    return (
      <div className="page-wrapper">
        <Header />
        {Auth.loggedIn() ?
        <Switch>
          <Route exact path="/" component={Home}
          />
          <Route path= '/User' component={User} />
          <Route component={LoginPage} />
        </Switch>
        : <Switch>
        <Route exact path="/" component={Home} />
        <Route path = '/create' component={createUser}/>
        <Route path ='/login' component={LoginPage}/>
        <Route component={LoginPage} />
        </Switch>
      }
        <Footer />
      </div>

    );
  }
}

export default App;
