import React, {useState, useEffect} from 'react';
import './App.css';

import firebase from './firebase'
import NewComment from './NewComment'
import Comments from './Comments'
/*
firebase
  .auth()
  .createUserWithEmailAndPassword('gustavohenriquemiele@live.com', 'abc123')
  .then(user => {
    user.displayName='Gustavo Fraga',
    firebase.auth().updateCurrentUser(user)
  })
  */

  // firebase.auth().onAuthStateChanged(user=> {
  //   if(user){
  //     console.log(user.displayName)
  //     user.updateProfile({displayName: 'Gustavo Fraga'})

  //   }
  // })
  





const Time = ({ timestamp }) => {
  const date = new Date(timestamp)
  const hours = date.getHours()
  const minutes = '0'+date.getMinutes()
  const seconds = '0'+date.getSeconds()
  const day = '0' + (date.getDay() +1)
  const month = '0'+ (date.getMonth() +1)
  const year = date.getFullYear()
  return `${day.substr(-2)}/${month.substr(-2)}/${year} ${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`
}






  return (
    <div>
      <textarea value={comment} onChange={evt => setComment(evt.target.value)} />
      <button onClick={createComment }>Comentar!</button>
    </div>
  )



function App() {
  
  return (
    <div>
      <NewComment />
      <Comments/>
    </div>
  )
}

export default App;
