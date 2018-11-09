import React, { Component } from 'react';
import {Switch, Route,Link} from 'react-router-dom';
import '../css/user.css'
import Favorite from '../components/favoritecard'
import {getFavorites} from '../api/index'
import AuthService from '../services/AuthService'

const domain = "https://infinite-hollows-72288.herokuapp.com"


// const auth= new AuthService()
const base = "https://www.google.com/maps/dir/?api=1&"
/*import data from Google API here*/

class User extends Component {
  constructor(props){
    super(props)
    this.Auth = new AuthService(domain)
    this.state={
      favorites:[]
    }
  }


    componentWillMount(){
    // let id=auth.getUserId()
    this.Auth.getFavorites()
    .then(res => this.setState({favorites:res}))
    .catch(err =>console.log(err))
    // getFavorites(id)
    //   .then(APIfavorites => {
    //     this.setState({
    //       favorites: APIfavorites.businesses
    //
    //     })
    //   }
  }

    render() {
    return (
      <main className="user-hero">
        <section className="login-hero">
          <img src={require("../images/cafe.jpeg")} />
        </section>
        <section className="greeting">
        

          <div className="favorites">
            <div className="favorites container">
              <div className="favorites-display">
              {this.state.favorites.map(favorite => {
                return (
                <Favorite key={favorite.name} favorite={favorite} />
              )
              })}


              </div>
            </div>
          </div>
        </section>
      </main>

    );
  }
}

export default User;
