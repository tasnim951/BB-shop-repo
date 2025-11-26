// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE8Jp8ZJoIlvXh3VYN-1jzzXdzew-_PFc",
  authDomain: "blush-bazaar-app.firebaseapp.com",
  projectId: "blush-bazaar-app",
  storageBucket: "blush-bazaar-app.appspot.com",
  messagingSenderId: "636816649314",
  appId: "1:636816649314:web:62013174c2a9ef9a46353b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =  getAuth(app);

export { auth }