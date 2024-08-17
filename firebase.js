// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFwGhywG-PFkS9wYDzExT-0HbCyAaXDbg",
  authDomain: "flashcard-saas-e6315.firebaseapp.com",
  projectId: "flashcard-saas-e6315",
  storageBucket: "flashcard-saas-e6315.appspot.com",
  messagingSenderId: "648600856698",
  appId: "1:648600856698:web:09a51d9c12fda7adb9b3c3",
  measurementId: "G-7G03L9QG8Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);