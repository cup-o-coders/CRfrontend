
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/shopcard.css'

class Shopcard extends Component {
	constructor(props) {
		super(props)
		// NOTE: Use this.props.businesses to access properties of businesses
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
				</article>
		)
	}
}

export default Shopcard;
