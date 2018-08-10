import React, { Component } from 'react';
import '../css/login.css'
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import { addUser } from '../api/index'
import AuthService from '../services/AuthService'


class createUser extends Component{
  constructor(props){
    super(props)
    this.Auth = new AuthService()
    this.state={
      user: {
        name: '',
        email :'',
        password:'',
        password_confirmation: ''
      }
    }
  }

  handleChange(event){
		let { user } = this.state
		user[event.target.name] = event.target.value
		this.setState({user: user})
	}

  submitNewUser(e) {
  		// get the completed form information from state
      e.preventDefault()
      addUser(this.state)
      .then(res =>{
        this.props.history.replace('/')
    })
  }

  render(){
    return(
      <div className="container">
        <div className="login-hero">
          <img src={require("../images/cup.jpg")} />
        </div>
        <div className="signup-intro">
            Enter your information to signup!
        </div>
        <div className="login-form-container">
            <form onSubmit={this.submitNewUser.bind(this)}>
              <ul className ="flex-outer">
                <li className="name-label">
                  <label>Name: </label>
                  <input
                  className="form-item"
                  placeholder="Name"
                  name="name"
                  type="text"
                  onChange={this.handleChange.bind(this)}
                  value={this.state.name}
                  />
                </li>
                <li className="email-label">
                  <label>Email: </label>
                  <input
                  className="form-item"
                  placeholder="Email"
                  name="email"
                  type="text"
                  onChange={this.handleChange.bind(this)}
                  value={this.state.email}
                  />
                </li>
                <li className="password-label">
                  <label>Password: </label>
                  <input
                  className="form-item"
                  placeholder="Password"
                  name="password"
                  type="password"
                  onChange={this.handleChange.bind(this)}
                  value={this.state.password}
                  />
                </li>
                <li className="confirm-label">
                  <label>Password Confirmation: </label>
                  <input
                  className="form-item"
                  placeholder="Confirm Password"
                  name="password_confirmation"
                  type="password"
                  onChange={this.handleChange.bind(this)}
                  value={this.state.password_confirmation}
                  />
                </li>
                <li>
                 <input type="submit" value="Submit" />
               </li>
              </ul>
            </form>
        </div>
    </div>
    );
  }
}

export default createUser;
