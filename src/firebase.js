// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDu1hJ5JUNxUyOR9_0z5u1KjEIrLn09_7E",
  authDomain: "promo-39521.firebaseapp.com",
  projectId: "promo-39521",
  storageBucket: "promo-39521.appspot.com",
  messagingSenderId: "688354591049",
  appId: "1:688354591049:web:6189cbb2f47602febe9a98",
  measurementId: "G-KC3XMT6HJK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);