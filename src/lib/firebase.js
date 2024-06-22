
import { initializeApp } from "firebase/app";
import { getAuth,signInWithPhoneNumber } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCw4wk2ditxTDEOOIPicPrqCUvkj7hdSeQ",
  authDomain: "react-chat-d343b.firebaseapp.com",
  projectId: "react-chat-d343b",
  storageBucket: "react-chat-d343b.appspot.com",
  messagingSenderId: "898606379184",
  appId: "1:898606379184:web:dbd1bd42b87b1eb6ba4b75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth()
export const db=getFirestore()
export const storage=getStorage()
export const googleProvider=new GoogleAuthProvider()