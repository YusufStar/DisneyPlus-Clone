import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCxzgDRBvrktAvj9irEAtSS9_2hE4Kb_nk",
  authDomain: "disney-6a013.firebaseapp.com",
  projectId: "disney-6a013",
  storageBucket: "disney-6a013.appspot.com",
  messagingSenderId: "337334136404",
  appId: "1:337334136404:web:3f03405d4d064844b1c7c1",
  measurementId: "G-HC4D29XKNC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
