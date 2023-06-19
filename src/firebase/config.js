import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAHyuQ73iYyCRrkzdsgV_7JO_XgLiW0oHg",
    authDomain: "my-money-e7bad.firebaseapp.com",
    projectId: "my-money-e7bad",
    storageBucket: "my-money-e7bad.appspot.com",
    messagingSenderId: "868948166085",
    appId: "1:868948166085:web:08029de5560f22f3cfb7ac"
  }

 // init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }