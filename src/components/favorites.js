import React, { Component } from 'react';
import '../css/footer.css'

class Favorites extends Component{
  constructor(props){
    super(props)
    this.state={
      favorites:[]
      newFave: false
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

  handleNewFavorite(FavoriteInfo) {
    createFavorite(FavoriteInfo)
    .then(successFavorite => {
        console.log("SUCCESS! New favorite: ", successFavorite);
        let favorites = this.state.Favorites
        cats.push(successFavorite)
        this.setState({
              newFave: true,
              favorites:favorites
    })
  })
}


  }
  render(){
    return(
      <div className="favorites">
      <h1>Your favorite locations</h1>

      </div>
    )
  }
}

export default Footer
