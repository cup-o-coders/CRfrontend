
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/shopcard.css'
import {getFavorites} from '../api/index'

const base = "https://www.google.com/maps/dir/?api=1&"

class Favorites extends Component {
	constructor(props) {
		super(props)
		this.state={
			favorites:{}
			}
		}
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

   componentWillMount(){
   getFavorites()
     .then(APIfavorites => {
       this.setState({
         favorites: APIfavorites
       })
     }
   )
 }

	render() {
		return (
				<article>
					<img src={this.state.favorites.image_url} />
					<div>
						<h3>{this.state.favorites.name}</h3>
						<p className="detail">{this.state.favorites.location.display_address[0]}, {this.state.favorites.location.display_address[1]},<br /> {this.state.favorites.display_phone}</p>
						<p>Rating: {this.state.favorites.rating}</p>
					</div>
					<form action={`tel:${this.state.favorites.display_phone}`}>
						<button type="submit">Call</button>
					</form>
					<input type="button" value="Directions" onClick={this.locationSearch.bind(this)} />
				</article>
		)
	}
}

export default Favorite;
