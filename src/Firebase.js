import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBvMRezh2h8KsWems_l1QesOwxqBqN21GU",
  authDomain: "discord-clone-544f6.firebaseapp.com",
  projectId: "discord-clone-544f6",
  storageBucket: "discord-clone-544f6.appspot.com",
  messagingSenderId: "557420579840",
  appId: "1:557420579840:web:8b79622f626aa37b119ce5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
