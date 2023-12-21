// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbku2wCkEWNwIKR7fqSgeI9zd3U7-VVcM",
  authDomain: "task-sync-8c28d.firebaseapp.com",
  projectId: "task-sync-8c28d",
  storageBucket: "task-sync-8c28d.appspot.com",
  messagingSenderId: "57518853699",
  appId: "1:57518853699:web:d8b5d1846f7a39e8928ef6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);