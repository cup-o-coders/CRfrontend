import AuthService from '../services/AuthService'
// the address of our rails backend, saved as a constant value, because we never want to accidently change it
const BASE = 'https://infinite-hollows-72288.herokuapp.com';
// const BASE = 'http://localhost:3000';
const Auth = new AuthService()

let getShops = function(shops) {
  return fetch(BASE + `/yelp/search?location=${shops}`,
  {
    headers: {  // <- We specify that we're sending JSON, and expect JSON back
      'Content-Type': 'application/json'
    }
})
  .then((resp) => {
    let json = resp.json()
      return json
  })
}


let addUser = function(newUser) {
	return fetch(BASE + '/users', {
		body: JSON.stringify(newUser),
		headers: {
			'Content-Type': 'application/json'
		},
		method: "POST"
	})
	.then((r) => {
		let json = r.json()
		return json
	})
  .then(json => {
    Auth.setToken(json.jwt);
  })
  .catch(err => alert(err))
}

let getFavorites = function() {
    // the function name getCats is intended to remind you of the restful rails route --> GET '/cats'.
    return fetch(BASE + '/favorites') // this would be equivalent to going to localhost:3000/cats in your browser. Do that - - what do you see?
        .then((resp) => {
            // resp will be whatever you saw on the page localhost:3000/cats, it is the result of our fetch call
            let json = resp.json() // we want to make sure what we have is just the json part of the response
            console.log(json);
            return json
        })
}

let createFavorite = function(favorite) {
  return fetch(BASE + '/favorites', {
    body: JSON.stringify(favorite),  // <- we need to stringify the json for fetch
    headers: {  // <- We specify that we're sending JSON, and expect JSON back
      'Content-Type': 'application/json',
      'Authorization' : 'Bearer ' + Auth.getToken()

    },
    method: "POST"  // <- Here's our verb, so the correct endpoint is invoked on the server
  })
  .then((resp) => {
    console.log(resp)
    let json = resp.json()
      return json
  })
}
export { getShops, addUser,getFavorites,createFavorite };
