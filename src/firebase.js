import firebase from "firebase/app";

import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBNVKr78e9RMphud1WSfrrwwdTaPiVNqbU",
  authDomain: "disneyplus-186c6.firebaseapp.com",
  projectId: "disneyplus-186c6",
  storageBucket: "disneyplus-186c6.appspot.com",
  messagingSenderId: "832558131553",
  appId: "1:832558131553:web:7ec3e77afd855bd8b23d20",
  measurementId: "G-FN2NJ96B5G",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAnalytics = firebase.analytics();
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { firebaseAnalytics, auth, provider, storage };
export default db;
