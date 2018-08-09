
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
					<section className="left shop-img">
						<img src={this.props.business.image_url} />
					</section>
					<section className="right shop-text">
						<section>
							<h3>{this.props.business.name}</h3>
							<p className="detail">{this.props.business.location.display_address[0]}, {this.props.business.location.display_address[1]},<br /> {this.props.business.display_phone}</p>
							<p>Rating: {this.props.business.rating}</p>
						</section>
						<nav className="interact">
							<div className="interact-buttons">
								<img src={require("../images/call.png")} />
							</div>
							<div className="interact-buttons">
								<img src={require("../images/heart.png")} />
							</div>
							<div className="interact-buttons">
								<img src={require("../images/compass.png")} />
							</div>
						</nav>
					</section>
				</article>
		)
	}
}

export default Shopcard;
