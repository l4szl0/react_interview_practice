// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIGiTGS8bKAB7bK3EQr4dtaevYqwvQhuY",
  authDomain: "react-interview-practice-d73c5.firebaseapp.com",
  projectId: "react-interview-practice-d73c5",
  storageBucket: "react-interview-practice-d73c5.appspot.com",
  messagingSenderId: "853505244115",
  appId: "1:853505244115:web:4a2c93901c1ac5c36b0d26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);