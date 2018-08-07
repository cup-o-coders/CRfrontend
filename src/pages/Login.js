import React, { Component } from 'react';
import '../css/login.css'

class LoginPage extends Component{
  constructor(props){
    super(props)
    this.state={
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

handleSubmit(event) {
  console.log('A name was submitted: ' + this.state.form.name);
  event.preventDefault();
}

  render(){
    return(
      <div className="container">
        <div className="login-hero">
          <img src="../images/cup.jpg" />
        </div>
        <div className="form-container">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <ul className ="flex-outer">
                <li>
                  <label>Name</label>
                  <input
                  className="form-item"
                  placeholder="Enter name here"
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
                  placeholder="Enter password"
                  name="password"
                  type="password"
                  onChange={this.handleChange.bind(this)}
                  value={this.state.password}
                  />
                </li>
                  <div className="clear"></div>
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

export default LoginPage
