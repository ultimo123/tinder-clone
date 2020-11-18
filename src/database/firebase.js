import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCev47zT_tSIQPyVOkHqm3_N0k5QF5rgds",
  authDomain: "tinder-apppp.firebaseapp.com",
  databaseURL: "https://tinder-apppp.firebaseio.com",
  projectId: "tinder-apppp",
  storageBucket: "tinder-apppp.appspot.com",
  messagingSenderId: "941419872597",
  appId: "1:941419872597:web:43e2ceb9c740cd3939afdc",
  measurementId: "G-3BCGC75YN2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
