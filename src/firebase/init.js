import firebase from 'firebase'
import firestore from 'firebase/firestore'

  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyBdQR0RIU_pWYWOHCCTV2GN9aw4vhIY9ts',
    authDomain: 'chat-app-3ba0e.firebaseapp.com',
    databaseURL: 'https://chat-app-3ba0e.firebaseio.com',
    projectId: 'chat-app-3ba0e',
    storageBucket: 'chat-app-3ba0e.appspot.com',
    messagingSenderId: '975194806058',
    appId: '1:975194806058:web:a83063f0b5a6f22fdf7053'
  };
  
  const firebaseApp = firebase.initializeApp(config);
  //firebaseApp.firestore().settings({ timestampsInSnapshots: true })

  export default firebaseApp.firestore()
