import * as firebase from "firebase";



  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDhmgrzS14wO0m0MsFwVMxzoPvSCBKjl7Q",
    authDomain: "ecommarce-678ff.firebaseapp.com",
    projectId: "ecommarce-678ff",
    storageBucket: "ecommarce-678ff.appspot.com",
    messagingSenderId: "1065715248568",
    appId: "1:1065715248568:web:8fbe3e0084ee3d50b7334d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig); 

  //export
  export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();