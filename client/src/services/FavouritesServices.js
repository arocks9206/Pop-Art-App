const baseURL = "http://localhost:3000/api/favourites/"

export default {
  getFavourites(){
    return fetch(baseURL)
    .then(res => res.json())
  },
  addFavourite(){
    return fetch
  },
  deleteFavourite(id){
    return fetch(baseURL + id, {
      method: 'DELETE'
    })
  }
}
