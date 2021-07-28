import firebase from 'firebase'

import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC5rCniymXaGCvehRUpDit0GQ4qXLA1P_A",
  authDomain: "demoapp-269d5.firebaseapp.com",
  projectId: "demoapp-269d5",
  storageBucket: "demoapp-269d5.appspot.com",
  messagingSenderId: "493994971473",
  appId: "1:493994971473:web:bd5d220f20dfdfaab40370",
  measurementId: "G-V6E1T3BEZP"
};
 firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;