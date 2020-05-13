const baseURL = "http://localhost:3000/api/quiz/"

export default {
  getQuizData(){
    return fetch(baseURL)
    .then(res => res.json())
  },
  updateUserScore(id){
    return fetch(baseURL + id, {
      method: 'PUT',
      body: JSON.stringify,
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  }
}
