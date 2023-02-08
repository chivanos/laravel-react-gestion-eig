import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMgFTrSsHrWTftRQd7Ttykxaqt5HRHjmE",
  authDomain: "react-store-20abc.firebaseapp.com",
  projectId: "react-store-20abc",
  storageBucket: "react-store-20abc.appspot.com",
  messagingSenderId: "282626832722",
  appId: "1:282626832722:web:69e1b23525db97318ae28b",
  measurementId: "G-FH2YT9VV7E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);