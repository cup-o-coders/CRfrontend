import AuthService from '../services/AuthService'
// the address of our rails backend, saved as a constant value, because we never want to accidently change it
const BASE = 'http://localhost:3000';
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
  console.log(newUser);
	return fetch(BASE + '/users', {
		body: JSON.stringify(newUser),
		headers: {
			'Content-Type': 'application/json'
		},
		method: "POST"
	})
	.then((r) => {
		let json = r.json()
		console.log(r);
		return json
	})
  .catch(err => console.log(err))
}
export { getShops, addUser };
