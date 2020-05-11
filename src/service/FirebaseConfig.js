import firebase from 'firebase'

firebase.initializeApp({
    apiKey: "API_KEY",
    authDomain: "AUTH_DOMAIN",
    projectId: "Project",
});
  
export default firebase.firestore()