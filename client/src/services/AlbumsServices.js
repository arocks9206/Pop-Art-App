const baseURL = "http://localhost:3000/api/albums/"

export default {
  getAlbums(){
    return fetch(baseURL)
    .then(res => res.json())
  }
}
