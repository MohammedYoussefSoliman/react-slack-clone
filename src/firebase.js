import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyD-hFcVPTpaR0xOc8PCST58jQFgCDdqd3s",
    authDomain: "slack-clone-9cd71.firebaseapp.com",
    projectId: "slack-clone-9cd71",
    storageBucket: "slack-clone-9cd71.appspot.com",
    messagingSenderId: "320873633539",
    appId: "1:320873633539:web:e54aacfcddcb646751bb36"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);