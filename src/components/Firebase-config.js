// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbHUDXgD1moOehDpgQwQ5BXvc4FjRCPOc",
  authDomain: "chat-785d3.firebaseapp.com",
  projectId: "chat-785d3",
  storageBucket: "chat-785d3.appspot.com",
  messagingSenderId: "989483446914",
  appId: "1:989483446914:web:d51d529fb8cadf07a87a9b",
  measurementId: "G-1NHMDCP0ZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const firestore = getFirestore(app);