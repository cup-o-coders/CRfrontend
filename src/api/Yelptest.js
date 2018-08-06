import React, { Component } from 'react'
import { getShops } from './index.js'
import './Yelptest.css'
import Shopcard from '../components/shopcard'


class Yelptest extends Component {
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
            console.log("SUCCESS! New cat: ", successShop);
            console.log(successShop.businesses[2].name);
            // let locations = this.state.locations
            // locations = locations.concat(successShop)
            this.setState({
                  newShopSuccess: true,
                  locations: successShop.businesses
          })
        })
      }


    render() {
        return ( 
        <div>
            <h1>Put in a search!</h1> 
            <form onSubmit={this.submitLocation.bind(this)}>
                <input type="text" name="location" onChange={this.handleChange.bind(this)} />
                <input type="submit" value="Get Shops" />
            </form>
            {this.state.locations.map(business => {
              return (
                <div>
                  <img src={business.image_url} height="150" width="150"/>
                  <h3 key={business.id} business={business}>{business.name} is {business.price}</h3>
                </div>
              )
    				})}
        </div>
        );
    }
}

export default Yelptest;