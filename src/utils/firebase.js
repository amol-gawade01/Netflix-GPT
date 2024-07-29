// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTR7R-2yUKYnQ-eCuvT6VFh-D_UVS2X3s",
  authDomain: "netflixgpt-999.firebaseapp.com",
  projectId: "netflixgpt-999",
  storageBucket: "netflixgpt-999.appspot.com",
  messagingSenderId: "966523062160",
  appId: "1:966523062160:web:067c0686599a75ecf19515",
  measurementId: "G-XDB979EEP1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();