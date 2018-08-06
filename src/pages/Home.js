import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import {Switch, Route,Link,Redirect} from 'react-router-dom'
import '../css/home.css'
/*import data from Google API here*/

class Home extends Component {
  constructor(props){
    super(props)
      this.state= {
        clickRedirect: false
      }
    }

  submitForm = (e) => {
    e.preventDefault()
    this.setState({ clickRedirect: true })
  }

  render() {
    const { from } = this.props.location.state || '/'
    const { clickRedirect } = this.state

    return (
      <div>
        <main>
          <div className="title">
            Close Roast
          </div>
          <div className="subtitle">
             Discover nearby coffeeshops save your favorites, and forget Starbucks once and for all(if you want)
          </div>
        </main>
        <div className="instructor">
          <p>Enter your location and some stuff pops off</p>
        </div>
        <div className="search-bar">

        </div>
      //   <div>
      //   <form action="/results" method="get">Show results
      //   </form>
      // </div>
      <div>
      <form onSubmit={this.submitForm}>
          <button type="submit">Submit</button>
        </form>
        {clickRedirect && (
          <Redirect to={from || '/results'}/>
        )}
      </div>
    </div>

    );
  }
}

export default Home;
