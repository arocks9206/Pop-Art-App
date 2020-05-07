const baseURL = "http://localhost:3000/api/films/"

export default {
  getFilms(){
    return fetch(baseURL)
    .then(res => res.json())
  }
}
