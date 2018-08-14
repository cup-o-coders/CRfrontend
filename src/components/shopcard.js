
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/shopcard.css'
import {createFavorite} from '../api/index'
import AuthService from '../services/AuthService'

const base = "https://www.google.com/maps/dir/?api=1&"

class Shopcard extends Component {
	constructor(props) {
		super(props)
		this.Auth = new AuthService()
		this.state={
			favorite:{
				image_url:this.props.business.image_url,
				name:this.props.business.name,
				display_address: this.props.business.location.display_address.join(" "),
				display_phone:this.props.business.display_phone,
				rating:this.props.business.rating
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

	 submitFavorite(event) {
		 let favorite=this.state
 	 		event.preventDefault()

 			createFavorite(favorite)

 			// this.props.handleNewFavorite(this.props.business)
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
					</section>
					<div className="clear"></div>
					<div className="icons">
						<form action={`tel:${this.props.business.display_phone}`} className="phone">
						<input type="image" src={require('../images/call.png')} className="interact-buttons phone-size" />
						</form>
						{this.Auth.loggedIn() &&
							<input type="image" src={require('../images/heart.png')} className="interact-buttons" value="Favorite" onClick= {this.submitFavorite.bind(this)} />
						}
						<input type="image" src={require('../images/compass.png')} className="interact-buttons" value="Directions" onClick={this.locationSearch.bind(this)} />
					</div>

				</article>
		)
	}
}

export default Shopcard;
