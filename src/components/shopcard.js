
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/shopcard.css'

const base = "https://www.google.com/maps/dir/?api=1&"

class Shopcard extends Component {
	constructor(props) {
		super(props)
	}

	getCurrentPos() {
		navigator.geolocation.getCurrentPosition(function(position) {
			return position.coords.latitude + " " + position.coords.longitude
		})
	}

	locationSearch() {
		let yelpLoc = this.props.business.location.display_address[0] + this.props.business.location.display_address[1]
		let currentLoc = this.getCurrentPos()
		let origin = "origin=" + currentLoc
		let destination = "&destination=" + encodeURI(yelpLoc)
		let travelmode = "&travelmode=driving"

		window.open(`${base}${origin}${destination}${travelmode}`)
	 }

	render() {
		return (
				<article>
					<section className="left shop-img-container">
						<img src={this.props.business.image_url} />
					</section>
					<section className="right shop-text-container">
						<div>
							<h3>{this.props.business.name}</h3>
							<p className="detail">{this.props.business.location.display_address[0]}, {this.props.business.location.display_address[1]},<br /> {this.props.business.display_phone}</p>
							<p>Rating: {this.props.business.rating}</p>
						</div>
						<form action={`tel:${this.props.business.display_phone}`}>
							<input type="image" src={require('../images/call.png')} className="interact-buttons" />
						</form>
						<input type="image" src={require('../images/heart.png')} className="interact-buttons" value="Favorite" />
						<input type="image" src={require('../images/compass.png')} className="interact-buttons" value="Directions" onClick={this.locationSearch.bind(this)} />
					</section>
				</article>
		)
	}
}

export default Shopcard;
