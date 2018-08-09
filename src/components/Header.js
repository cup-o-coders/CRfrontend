import React, { Component } from 'react';
import '../css/header.css'
import { Link } from 'react-router-dom';
import AuthService from '../services/AuthService'

const Auth = new AuthService()

class Header extends Component{
  render(){
    return (
      <header>
        <div className="home-link">
            <Link to={`/`}>
                <section className="header-logo">
                    <img src={require("../images/logo.png")} />
                </section>
            </Link>
        </div>

        <section className="login-sign">
            {Auth.loggedIn() ?
                <ul>
                    <li>
                        <Link to='/user'>Profile</Link>
                    </li>
                    <li onClick={this.handleLogout}>
                        <Link to='/'>Logout</Link>
                    </li>
                </ul>
            :
                <ul>
                    <li className="login">
                        <Link to={`/login`}>Login</Link> |
                    </li>
                    <li className="create">
                        <Link to={'/create'}>Sign Up</Link>
                    </li>
                </ul>
            }
        </section>
      </header>
    );
  }
  handleLogout() {
    Auth.logout()
  }
}

export default Header;
