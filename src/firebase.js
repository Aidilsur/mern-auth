// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-d805f.firebaseapp.com",
  projectId: "mern-auth-d805f",
  storageBucket: "mern-auth-d805f.appspot.com",
  messagingSenderId: "850438678223",
  appId: "1:850438678223:web:061669c6488860a5ab39ba",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
