import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCbIMOKYN6GrWPfsV-xFVlwBTPTeayq_jI",
  authDomain: "discord-84a7d.firebaseapp.com",
  databaseURL: "https://discord-84a7d.firebaseio.com",
  projectId: "discord-84a7d",
  storageBucket: "discord-84a7d.appspot.com",
  messagingSenderId: "376645545820",
  appId: "1:376645545820:web:4e33d095eae15ed0979b99",
  measurementId: "G-HHTNW8S9RF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
