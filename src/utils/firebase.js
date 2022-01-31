// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-T0m3p9gYpofnmq-1GUimhnTRh8sWBBU",
  authDomain: "function-441fb.firebaseapp.com",
  projectId: "function-441fb",
  storageBucket: "function-441fb.appspot.com",
  messagingSenderId: "264101954384",
  appId: "1:264101954384:web:b4554a580b53fdeb08e255",
  measurementId: "G-Q35781FRCS"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = app.getAnalytics(app);
// const db = app.getFirestore(app);
export default firebase
