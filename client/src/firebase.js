// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-3a935.firebaseapp.com",
  projectId: "mern-auth-3a935",
  storageBucket: "mern-auth-3a935.appspot.com",
  messagingSenderId: "145570001403",
  appId: "1:145570001403:web:11b619141d1f284eb29b5e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);