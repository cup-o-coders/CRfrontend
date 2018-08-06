import React, { Component } from 'react';

class LoginPage extends Component{
  render(){
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
          <input
          className="form-item"
          placeholder="Enter namehere"
          name="name"
          type="text"
          onChange={this.handleChange.bind(this)}
          value={this.state.name}
        />
      )
    }
}

export default LoginPage
