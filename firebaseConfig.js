// firebaseConfig.js
import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: "trying-firebase-bdec7.firebaseapp.com",
    projectId: "trying-firebase-bdec7",
    storageBucket: "trying-firebase-bdec7.firebasestorage.app",
    messagingSenderId: "890330614304",
    appId: "1:890330614304:web:0cde580514d90299ec4a45",
    measurementId: "G-EV3Q12R8ZK"
  };
  
let firebaseApp;

if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = getApps()[0];
}

export default firebaseApp;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional


// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);