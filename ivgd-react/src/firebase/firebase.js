import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp ({
    apiKey: "AIzaSyDRuvuS5qE1QbmtFhU4pTtbm7vYsiDNayc",
    authDomain: "ivgd-project.firebaseapp.com",
    projectId: "ivgd-project",
    storageBucket: "ivgd-project.appspot.com",
    messagingSenderId: "293774438020",
    appId: "1:293774438020:web:9682d087cdce37d8165cd1"
  });

  export const auth = app.auth();
  export default app;