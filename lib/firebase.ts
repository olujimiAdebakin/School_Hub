// lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, Auth, updatePassword, updateEmail } from "firebase/auth";
import {
  Firestore,
  getFirestore,
  collection,
  addDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALE4roNa983aGKzi5jAqBOdeRln4nlXWM",
  authDomain: "school-hub-1972.firebaseapp.com",
  projectId: "school-hub-1972",
  storageBucket: "school-hub-1972.firebasestorage.app",
  messagingSenderId: "603783622063",
  appId: "1:603783622063:web:ee15d9acef0a3a14e7935a",
  measurementId: "G-440RC0C04Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth: Auth = getAuth(app);
const db: Firestore = getFirestore(app);

export { db, auth, addDoc, updatePassword, updateEmail, collection };
