const baseURL = "http://localhost:3000/api/roylicht/"

export default {
  getData(){
    return fetch(baseURL)
    .then(res => res.json())
  }
}
