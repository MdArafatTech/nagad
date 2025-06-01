// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI4uRmuTGGw4GnOMtSbCtFfbk1I3p6Xmg",
  authDomain: "nagad-941ac.firebaseapp.com",
  projectId: "nagad-941ac",
  storageBucket: "nagad-941ac.appspot.com", // ✅ Fixed domain
  messagingSenderId: "284842425604",
  appId: "1:284842425604:web:937fc8fdc0c3156b482451"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
