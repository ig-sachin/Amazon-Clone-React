// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB1JPTjcUj2flsz7loYtKKPnFBfEEA1cp4",
  authDomain: "clone-d8b2e.firebaseapp.com",
  projectId: "clone-d8b2e",
  storageBucket: "clone-d8b2e.appspot.com",
  messagingSenderId: "629673406509",
  appId: "1:629673406509:web:ce07d61918224d372648a4",
  measurementId: "G-PWEF51WWXY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {
  db, auth
};