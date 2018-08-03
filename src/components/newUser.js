import React, { Component } from 'react';
import {ControlLabel, FormControl, Button} from "react-bootstrap"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import createUser from "../api/index"

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            form: {
                user: {
                    name: "",
                    email: "",
                    password: ""
                }
            }
        }
}
handleChange(event){
    let { form } = this.state
    form.user[event.target.name] = event.target.value
    this.setState({form: form})
}

handleSubmit(event){
    event.preventDefault()
    console.log("submit works");
    console.log(this.state.form);
    createUser(this.state.form)
    .then(successUser => {
        console.log("SUCCESS! New User: ", successUser);
    })
}


  render() {
      console.log(this.props.history);
    return (
        <form onSubmit={this.handleSubmit.bind(this)}>
            <input
            className="form-item"
            placeholder="Enter namehere"
            name="name"
            type="text"
            onChange={this.handleChange.bind(this)}
            value={this.state.name}
          />
             /><br/>

             <input
             className="form-item"
             placeholder="email goes here..."
             name="email"
             type="text"
             onChange={this.handleChange.bind(this)}
             value={this.state.email}
           />

             <input
              className="form-item"
               type="text"
               name = "password"
               value={this.state.password}
               placeholder="Enter password"
               onChange={this.handleChange.bind(this)}
               />
             /><br/>
             <input
              className="form-submit"
              value="SUBMIT"
              type="submit"
            />
            
         </form>
    );
  }
}

export default Form;
