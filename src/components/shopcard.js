import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route,Link} from 'react-router-dom'
import {getCoffee} from ../api/index
/*import data from Google API here*/

class Home extends Component {
  constructor(props){
    super(props)
    this.state={
      shop:""
    }
  }
  componentWillMount() {
		getCoffee(this.props.match.params.id)
		.then(json => {
			console.log(json);
			this.setState({
				shop: json
			})
		})
	}


  render() {
    return (
      <main>
      <h1>Close Roast</h1>
      /* Style this centered over image*/
      <h3> Discover nearby coffeeshops, save your favorites, and forget Starbucks once and for all(if you want)
      </h3>
      /*style this centered below Close Roast Title*/
      </main>


    );
  }
}

export default Shopcard;
