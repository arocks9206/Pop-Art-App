const baseURL = "http://localhost:3000/api/andywarhol/"

export default {
  getData(){
    return fetch(baseURL)
    .then(res => res.json())
  }
}
