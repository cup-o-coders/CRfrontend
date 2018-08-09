
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/shopcard.css'

class Shopcard extends Component {
	constructor(props) {
		super(props)
		// NOTE: Use this.props.businesses to access properties of businesses
	}

	const base = "https://www.google.com/maps/dir/?api=1&"

	function getCurrentPos() {
		navigator.geolocation.getCurrentPosition(function(position) {
			return position.coords.latitude + " " + position.coords.longitude
		})
	}

	function locationSearch() {
		yelpLoc = this.props.business.location.display_address[0] + " %2C" + this.props.business.location.display_address[1]
		currentLoc = getCurrentPos()
		origin = "origin=" + currentLoc
		destination = "&destination=" + encodeURI(yelpLoc)
		travelmode = "&travelmode=driving"
		navigator.geolocation.getCurrentPosition

		//https://www.google.com/maps/dir/?api=1&origin=2820%20Camino%20Del%20Rio%20S,%20San%20Diego,%20CA%2092108&destination=1270%20Morena%20Blvd,%20San%20Diego,%20CA%2092110
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
