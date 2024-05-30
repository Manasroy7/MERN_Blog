// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// console.log(import.meta.env.VITE_FIREBASE_API_KEY);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,    //for the authentcation key have to nclude import.meta
  authDomain: "mern-blog-3b505.firebaseapp.com",
  projectId: "mern-blog-3b505",
  storageBucket: "mern-blog-3b505.appspot.com",
  messagingSenderId: "76456545453",
  appId: "1:76456545453:web:2b4ecdbdce1fc1894a4a24",
  measurementId: "G-633JRPVJ0V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
