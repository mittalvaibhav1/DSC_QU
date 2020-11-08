import firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyDHKp_rh0KdLAcak3eP0jITnt3f__41Ols",
  authDomain: "notezapp-26370.firebaseapp.com",
  databaseURL: "https://notezapp-26370.firebaseio.com",
  projectId: "notezapp-26370",
  storageBucket: "notezapp-26370.appspot.com",
  messagingSenderId: "983691498823",
  appId: "1:983691498823:web:ea8f31a5bb770cd741e862",
  measurementId: "G-LV6KE5ND8N"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth , provider};
export default db;