import firebase from 'firebase'

firebase.initializeApp({
    apiKey: "AIzaSyAJldbrBHFg9q1Z2ZI-cnTJmLD8fn9db6E",
    authDomain: "web-xmleditor.firebaseapp.com",
    projectId: "web-xmleditor",
  });
  
  export default firebase.firestore()