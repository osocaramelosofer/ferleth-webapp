// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAH66RWQwGiSmozsWoMFVWIHN1iSyaoih8",
  authDomain: "valiente-616ef.firebaseapp.com",
  projectId: "valiente-616ef",
  storageBucket: "valiente-616ef.appspot.com",
  messagingSenderId: "193396820241",
  appId: "1:193396820241:web:c4e517509743bee4d424b0",
  measurementId: "G-T3566LB7CY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
