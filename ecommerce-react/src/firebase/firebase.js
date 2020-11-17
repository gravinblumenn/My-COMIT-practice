import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyDbrrSHdaAdQKqsFJJJUWsr7W6lLW2bN6s",
    authDomain: "my-comit-practice.firebaseapp.com",
    databaseURL: "https://my-comit-practice.firebaseio.com",
    projectId: "my-comit-practice",
    storageBucket: "my-comit-practice.appspot.com",
    messagingSenderId: "344948880926",
    appId: "1:344948880926:web:d3b067be87885b2538a00f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export const auth = firebaseApp.auth();
  export const db = firebaseApp.database();
