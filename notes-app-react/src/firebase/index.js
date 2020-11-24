import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD8E9o7oLghfoWDA8ZMK-DxXsLE7TAzyCM",
  authDomain: "comit-notes-react-app.firebaseapp.com",
  databaseURL: "https://comit-notes-react-app.firebaseio.com",
  projectId: "comit-notes-react-app",
  storageBucket: "comit-notes-react-app.appspot.com",
  messagingSenderId: "663546755822",
  appId: "1:663546755822:web:42af588dbf57fdcd8411ff",
  measurementId: "G-LXQGQ3M8M5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
  export db = app.database();
  export auth = app.auth();