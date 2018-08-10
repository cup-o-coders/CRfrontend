import React, { Component } from 'react';
import '../css/home.css'
import Shopcard from '../components/shopcard'
import { getShops } from '../api/index.js'

/*import data from Google API here*/

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      location: '',
      locations: [],
      newShopSuccess: false
    }
  }

  // Update state of the form's location
  handleChange(event) {
    let { location } = this.state.location
    location = event.target.value
    this.setState({ location: location })
  }

  // Handle the submission of location and pass to handle it
  submitLocation(event) {
    event.preventDefault()
    if (this.state.location !== '') {
    this.handleNewShop(this.state.location)
    } else {
      alert("Please enter a location!")
    }
  }

  // With the new location, go ahead and update state to reflect the returned elements
  handleNewShop(shopLocation) {
    getShops(shopLocation)
    .then(successShop => {
        this.setState({
          newShopSuccess: true,
          locations: successShop.businesses
      })
    })
  }

  render() {
    return (
      <main>
        <section className="page-top">
          <h1 className="title">
            Close Roast
          </h1>
          <h2 className="subtitle">
             Discovering hidden shrines of vitality
          </h2>
        </section>
        <section className="home-text">
          <p>
            Enter your location down below and we will show you all of the coffee shops in your general area! Explore your city and find your new favorite coffee shop!
          </p>
        </section>
        <div className="search-bar">
            <form onSubmit={this.submitLocation.bind(this)}>
                <input type="text" name="location" className="location" onChange={this.handleChange.bind(this)} />
                <input type="submit" value="Get Shops" className="submit"/>
            </form>
        </div>
        <div className="shopflex">
          {this.state.locations.map(business => {
            return (
            <Shopcard key={business.id} business={business} />
          )
          })}

        </div>
      </main>
    );
  }
}

export default Home;
