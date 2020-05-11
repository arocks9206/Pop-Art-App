const baseURL = "http://localhost:3000/api/keyartists/"

export default {
  getArtists(){
    return fetch(baseURL)
    .then(res => res.json())
  }
}
