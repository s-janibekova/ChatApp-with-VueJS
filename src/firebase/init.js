import firebase from 'firebase'
import firestore from 'firebase/firestore'

  // Initialize Firebase
  var config = {
    // put your config here
  };
  
  const firebaseApp = firebase.initializeApp(config);
  //firebaseApp.firestore().settings({ timestampsInSnapshots: true })

  export default firebaseApp.firestore()
