import React, { Component } from 'react';
import '../css/login.css'
import {Switch, Route,Link,Redirect} from 'react-router-dom'
import AuthService from '../services/AuthService'

class LoginPage extends Component{
  constructor(props){
    super(props)
    this.Auth=new AuthService()
    this.state={
      clickRedirect: false,
      form:{
        name:'',
        email :'',
        password:''
      }
    }

  }

  handleChange(event){
		let { form } = this.state
		form[event.target.name] =event.target.value
		this.setState({form: form})
	}


    submitForm = (e) => {
      e.preventDefault()
      this.Auth.login(this.state.email,this.state.password)
      .then(resp =>{this.props.history.replace('/user')
    })
    .catch(err=>{alert(err)})

      this.setState({ clickRedirect: true})

    }

  render(){

    const { from } = this.props.location.state || '/'
    const {clickRedirect}  = this.state
    console.log(clickRedirect)

    return(
      <main className="container">
        <section className="login-hero">
          <img src={require("../images/cup.jpg")} />
        </section>
        <section className="login-form-container">
          <article>
            <p>Join Close Roast, create a profile, and create a list of your favorite coffee shops!</p>
          </article>
            <form onSubmit={this.submitForm} className="login-form">
              <ul className ="flex-outer">
                <li>
                  <label>Name</label>
                  <input
                  className="form-item"
                  placeholder="Name"
                  name="name"
                  type="text"
                  onChange={this.handleChange.bind(this)}
                  value={this.state.name}
                  />
                </li>
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
        {/*    // {clickRedirect && (
            //   <Redirect to={from || '/user'}/>
            // )}
        */}
        </section>
    </main>
    );
  }
}

export default LoginPage
