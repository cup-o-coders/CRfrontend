
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/shopcard.css'
import {getFavorites} from '../api/index'

const base = "https://www.google.com/maps/dir/?api=1&"

class Favorite extends Component {
	constructor(props) {
		super(props)
		this.state={
			favorites:{}
			}
		}




	getCurrentPos() {
		navigator.geolocation.getCurrentPosition(function(position) {
			return position.coords.latitude + " " + position.coords.longitude
		})
	}

	locationSearch() {
		let yelpLoc = this.props.favorite.display_address[0] + this.props.favorite.location.display_address[1]
		let currentLoc = this.getCurrentPos()
		let origin = "origin=" + currentLoc
		let destination = "&destination=" + encodeURI(yelpLoc)
		let travelmode = "&travelmode=driving"

		window.open(`${base}${origin}${destination}${travelmode}`)
	 }



	render() {
		return (
				<article>
					<img src={this.props.favorite.image_url} />
					<div>
						<h3>{this.props.favorite.name}</h3>
						<p className="detail">{this.props.favorite.location.display_address[0]}, {this.props.favorite.location.display_address[1]},<br /> {this.props.favorite.display_phone}</p>
						<p>Rating: {this.props.favorite.rating}</p>
					</div>
					<form action={`tel:${this.props.favorite.display_phone}`}>
						<button type="submit">Call</button>
					</form>
					<input type="button" value="Directions" onClick={this.locationSearch.bind(this)} />
				</article>
		)
	}
}

export default Favorite;
