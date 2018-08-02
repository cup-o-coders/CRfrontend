
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Shopcard extends Component {
	render() {
		let { business } = this.props
		return (

				<article>
					<img src="#" />
					<div>
						<h3>{business.name}</h3>
						<p className="detail">{business.location.display_address}, {business.display_phone}</p>
						<p>{business.rating}</p>
					</div>
				</article>

		)
	}
}

export default Shopcard;
