// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwmzsvGBXOXzTxdPKnVMvFepRn3i9z4oA",
  authDomain: "assignment-11-9c7c9.firebaseapp.com",
  projectId: "assignment-11-9c7c9",
  storageBucket: "assignment-11-9c7c9.appspot.com",
  messagingSenderId: "251743895072",
  appId: "1:251743895072:web:1518002297d9c1f9c30645",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
