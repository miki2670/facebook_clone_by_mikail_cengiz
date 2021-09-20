import firebase from "firebase/compat/";
/* USING FIREBASE VERSION 7.19.0 
  npm install firebase@^7.19.0 --save
*/

const firebaseConfig = {
  apiKey: "AIzaSyC7sa8tLB8B_v2RVeTGGW-9Sfs90ubNy4A",
  authDomain: "facebook-clone-by-mikail.firebaseapp.com",
  projectId: "facebook-clone-by-mikail",
  storageBucket: "facebook-clone-by-mikail.appspot.com",
  messagingSenderId: "91772204021",
  appId: "1:91772204021:web:ff3aafb45371d2d06b26bc"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;