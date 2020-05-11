const baseURL = "http://localhost:3000/api/artists/"

export default {
  getData(){
    return fetch(baseURL)
    .then(res => res.json())
  },
  getOneArtist(){
    return fetch(baseURL + id)
  }
}
