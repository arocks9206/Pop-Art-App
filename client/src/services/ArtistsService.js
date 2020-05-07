const baseURL = "http://localhost:3000/api/artists/"

export default {
  getArtists(){
    return fetch(baseURL)
    .then(res => res.json())
  }
}
