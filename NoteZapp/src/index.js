import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modal from "react-modal";
import * as firebase from 'firebase';
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
firebase.initializeApp(firebaseConfig);
firebase.analytics();
Modal.setAppElement("#root");

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
