import React, { Component } from 'react';
import '../css/login.css'
import {Switch, Route,Link,Redirect} from 'react-router-dom'
import AuthService from '../services/AuthService'

const domain = "https://infinite-hollows-72288.herokuapp.com"

class LoginPage extends Component{
  constructor(props){
    super(props)
    this.Auth = new AuthService(domain)
    this.state = {
        email :'',
        password:''
      }
    }

    handleChange(event){
  		this.setState({ [event.target.name]: event.target.value })
  	}


    handleFormSubmit(e){
    e.preventDefault()
    this.Auth.login(this.state.email,this.state.password)
    .then(res =>{
      this.props.history.replace('/')
    })
    .catch(err =>{ alert(err) })
    }

    //
    // submitForm = (e) => {
    //   e.preventDefault()
    //   this.Auth.login(this.state.email,this.state.password)
    //   .then(resp =>{this.props.history.replace('/user')
    // })
    // .catch(err=>{alert(err)})
    //   this.setState({ clickRedirect: true})
    // }

  render(){
    //
    // const { from } = this.props.location.state || '/'
    // const {clickRedirect}  = this.state
    // console.log(clickRedirect)

    return(
      <main className="container">
        <section className="login-hero">
          <img src={require("../images/cup.jpg")} />
        </section>
        <section className="login-form-container">
          <article>
            <p>Join Close Roast, create a profile, and create a list of your favorite coffee shops!</p>
          </article>
            <form onSubmit= {this.handleFormSubmit.bind(this)} >
              <ul className ="flex-outer">
                <li>
                  <label>Email</label>
                  <input
                  className="form-item"
                  placeholder="Email"
                  name="email"
                  type="text"
                  onChange={this.handleChange.bind(this)}
                  value={this.state.email}
                  />
                </li>
                <li>
                  <label>Password</label>
                  <input
                  className="form-item"
                  placeholder="Password"
                  name="password"
                  type="password"
                  onChange={this.handleChange.bind(this)}
                  value={this.state.password}
                  />
                </li>
                <li>
                 <input type="submit" value="Submit" />
               </li>
              </ul>
            </form>
        </section>
    </main>
    );
  }
}

export default LoginPage
