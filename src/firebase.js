import firebase from 'firebase'
import firestore from 'firebase/firestore'
  var firebaseConfig = {
    apiKey: "AIzaSyChw5rpWuHN3VF6ygB_na6DjbkCxRwOpjA",
    authDomain: "todoapp2-262fb.firebaseapp.com",
    databaseURL: "https://todoapp2-262fb.firebaseio.com",
    projectId: "todoapp2-262fb",
    storageBucket: "todoapp2-262fb.appspot.com",
    messagingSenderId: "392764618011",
    appId: "1:392764618011:web:a7f8f53129c32907504fbe"
  };
  // Initialize Firebase
  // Initialize Firebase
  const x  = firebase.initializeApp(firebaseConfig);
  x.firestore().settings({timestampsInSnapshots:true})
  export default x.firestore()
