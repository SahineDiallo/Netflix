import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpDEP48mSbkfSwEm95P6yKlP9Oc8UGIYQ",
  authDomain: "netflix-clone-bffa6.firebaseapp.com",
  projectId: "netflix-clone-bffa6",
  storageBucket: "netflix-clone-bffa6.appspot.com",
  messagingSenderId: "454839037655",
  appId: "1:454839037655:web:9855f12314af14793aca92",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();

export { auth };
export default db;
