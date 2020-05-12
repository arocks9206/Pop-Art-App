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




//
//   getQuestions(id){
//     return fetch(baseURL + id)
//     .then(res => res.json())
//   },
//   getUserScore(){
//     return fetch(baseURL + userScoreID)
//     .then(res => res.json())
//   },
//   updateUserScore(payload){
//     return fetch(baseURL + userScoreID, {
//       method: 'PUT',
//       body: JSON.stringify(payload),
//       headers: {'Content-Type': 'application/json'}
//     })
//     .then(res => res.json())
//   }
// }
