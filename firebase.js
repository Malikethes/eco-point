// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your config from Firebase Console
const firebaseConfig = {

  apiKey: "AIzaSyDMXh5q2E6njyDIJ_fyp_lCuVTP3QDemiI",

  authDomain: "better-than-never-tc.firebaseapp.com",

  projectId: "better-than-never-tc",

  storageBucket: "better-than-never-tc.firebasestorage.app",

  messagingSenderId: "594373209733",

  appId: "1:594373209733:web:e9242bbe88c04a1a70c3ec"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword };
