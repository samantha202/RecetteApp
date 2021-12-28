import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCsJpHWX6mZETi1aqrVaYMTSJssxJW3GIA",
  authDomain: "recetteapp-1b56f.firebaseapp.com",
  databaseURL: "https://recetteapp-1b56f-default-rtdb.europe-west1.firebasedatabase.app",
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
