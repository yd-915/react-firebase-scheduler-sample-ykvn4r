import firebase from 'firebase'

var firebaseConfig = {
  // copy and paste your firebase credential here
  apiKey: "AIzaSyAF4lNZ5WtAsXSpfFLlMjD76ij3ykkV71Y",
  authDomain: "angular-84f46.firebaseapp.com",
  databaseURL: "https://angular-84f46.firebaseio.com",
  projectId: "angular-84f46",
  storageBucket: "angular-84f46.appspot.com",
  messagingSenderId: "63615603270",
  appId: "1:63615603270:web:946140011c5410c96bf047",
  measurementId: "G-4JSCEMTWJ6"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };