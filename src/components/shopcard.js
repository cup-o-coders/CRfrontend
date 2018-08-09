
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/shopcard.css'

class Shopcard extends Component {
	constructor(props) {
		super(props)
		// NOTE: Use this.props.businesses to access properties of businesses
	}

	const base = "https://www.google.com/maps/dir/?api=1"

	function locationSearch() {
		yelpLoc = this.props.business.location.display_address[0] + "%2C" + this.props.business.location.display_address[1]
     yelpParams = {
       term: "coffee",
       location: params[:location],
       open_now: true,
       limit: 10
     }
	 }

	render() {
		return (
				<article>
					<img src={this.props.business.image_url} />
					<div>
						<h3>{this.props.business.name}</h3>
						<p className="detail">{this.props.business.location.display_address[0]}, {this.props.business.location.display_address[1]},<br /> {this.props.business.display_phone}</p>
						<p>Rating: {this.props.business.rating}</p>
					</div>
					<input type="button" value="Call" />
					<input type="button" value="Favorite" />
					<input type="button" value="Directions" />
				</article>
		)
	}
}

export default Shopcard;
