import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyBCYu7JQy_57_vE3a2N_mVlnik2RPNw-aA",
    authDomain: "comentaki-gus.firebaseapp.com",
    databaseURL: "https://comentaki-gus.firebaseio.com",
    projectId: "comentaki-gus",
    storageBucket: "comentaki-gus.appspot.com",
    messagingSenderId: "832010848884",
    appId: "1:832010848884:web:e06e2d659e1447b6d81f21"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase