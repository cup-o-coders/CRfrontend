import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import {Switch, Route,Link} from 'react-router-dom'
import Shopcard from '../components/shopcard'
/*import data from Google API here*/

class Results extends Component {
render(){
  console.log(this.props.results);
  let data = this.props.results


		return (
			<main>
				<h1>All Shops</h1>
				{data.map(business => {
					return (<Shopcard key={data.id} business={business} />)
				})}
			</main>
		);


      // <h1>{data[1].name}</h1>



}
}


export default Results;
