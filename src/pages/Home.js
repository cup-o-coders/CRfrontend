import React, { Component } from 'react';
import '../App.css';
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
    this.handleNewShop(this.state.location)
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
    const { from } = this.props.location.state || '/'
    const { clickRedirect } = this.state

    return (
      <div>
        <main>
          <div className="title">
            Close Roast
          </div>
          <div className="subtitle">
             Discover nearby coffeeshops save your favorites, and forget Starbucks once and for all(if you want)
          </div>
        </main>
        <div className="search-bar">
            <form onSubmit={this.submitLocation.bind(this)}>
                <input type="text" name="location" onChange={this.handleChange.bind(this)} />
                <input type="submit" value="Get Shops" />
            </form>
            {this.state.locations.map(business => {
              return (
              <Shopcard key={business.id} business={business} />
            )
            })}
        </div>
      //   <div>
      //   <form action="/results" method="get">Show results
      //   </form>
      // </div>
      <div>
      <form onSubmit={this.submitForm}>
          <button type="submit">Submit</button>
        </form>
        {clickRedirect && (
          <Redirect to={from || '/results'}/>
        )}
      </div>
    </div>

    );
  }
}

export default Home;
