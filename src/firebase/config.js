import firebase from 'firebase/app';
import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyC1RURwm69S1sFdt3wQ7RCfmR71uTiLdg8",
    authDomain: "brighton-reviews-722ec.firebaseapp.com",
    projectId: "brighton-reviews-722ec",
    storageBucket: "brighton-reviews-722ec.appspot.com",
    messagingSenderId: "711065344273",
    appId: "1:711065344273:web:fd6b60b5b773341c2014b0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  db.settings({ timestampsInSnapshots: true});

  export { db };