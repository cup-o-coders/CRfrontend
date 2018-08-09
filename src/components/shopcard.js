
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {createFavorite} from '../api/index'

class Shopcard extends Component {
	constructor(props) {
		super(props)
		// NOTE: Use this.props.businesses to access properties of businesses
	}

	submitFavorite(event) {
	event.preventDefault()
	let {business}=this.props.business
	createFavorite(business)

	// this.props.handleNewFavorite(this.props.business)
	}
	render() {
		return (
				<article>
					<img src={this.props.business.image_url} />
					<div>
						<h3>{this.props.business.name}</h3>
						<p className="detail">{this.props.business.location.display_address[0]}, {this.props.business.location.display_address[1]}, {this.props.business.display_phone}</p>
						<p>{this.props.business.rating}</p>
					</div>
					<form onSubmit= {this.submitFavorite.bind(this)}>
					<input type="submit" value="Submit" />
					</form>

				</article>

		)
	}
}

export default Shopcard;
