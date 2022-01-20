// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDR2zLk5FTX1aSzKN-E4sJl0_G33a4Bchs",
  authDomain: "imbursepe.firebaseapp.com",
  projectId: "imbursepe",
  storageBucket: "imbursepe.appspot.com",
  messagingSenderId: "233649586564",
  appId: "1:233649586564:web:68a0b24673d9eabd07ddd1",
  measurementId: "G-JP9CD9QT2F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
