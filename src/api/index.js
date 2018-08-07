// the address of our rails backend, saved as a constant value, because we never want to accidently change it
const BASE = 'http://localhost:3000';

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

export { getShops };