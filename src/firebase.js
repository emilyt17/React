// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9dzYV8xmTLklvsk_XljxglF8T_n4OxpE",
  authDomain: "react-272d1.firebaseapp.com",
  projectId: "react-272d1",
  storageBucket: "react-272d1.appspot.com",
  messagingSenderId: "409289223029",
  appId: "1:409289223029:web:2c9d0ea76483c7ed54813c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);