import firebase from 'firebase'

import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBucqKp5Fc6HHUJ0iEoupQRj0n_vcSPLYs",
    authDomain: "webdemo-4ae5a.firebaseapp.com",
    projectId: "webdemo-4ae5a",
    storageBucket: "webdemo-4ae5a.appspot.com",
    messagingSenderId: "157402971528",
    appId: "1:157402971528:web:b1d4f37403577874410e3d",
    measurementId: "G-4LN9YYQ3ES"
  };
 firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;