import React, { Component } from 'react';
import { getShops } from './api'

class Yelptest extends Component {
    getShops()
    render(){
        return(
            <div>
                <form >
                    <h1>Put in a search!</h1>
                    <input type="text" name="location" />
                </form>
            </div>
        );
    }
}

export default Yelptest;