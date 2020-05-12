const baseURL = "http://localhost:3000/api/quiz/"
const userScoreID = '5eb92ca460aec65528f758a0'

export default {
  getQuestions(id){
    return fetch(baseURL + id)
    .then(res => res.json())
  },
  getUserScore(){
    return fetch(baseURL + userScoreID)
    .then(res => res.json())
  },
  updateUserScore(payload){
    return fetch(baseURL + userScoreID, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  }
}
