const baseURL = "http://localhost:3000/api/designers/"

export default {
  getDesigners(){
    return fetch(baseURL)
    .then(res => res.json())
  }
}
