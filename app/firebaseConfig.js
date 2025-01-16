import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD16rjW8NDCo62_2uYRCFQSHpNF2RAtVe0",
  authDomain: "trying-firebase-bdec7.firebaseapp.com",
  projectId: "trying-firebase-bdec7",
  storageBucket: "trying-firebase-bdec7.firebasestorage.app",
  messagingSenderId: "890330614304",
  appId: "1:890330614304:web:0cde580514d90299ec4a45",
  measurementId: "G-EV3Q12R8ZK"
};

const firebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(firebaseApp);
export default firebaseApp;
