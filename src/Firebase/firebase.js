// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDddb-7tus23tkvbrvtfKjP50XBVY7xxsA",
  authDomain: "react-getting-started-d5523.firebaseapp.com",
  databaseURL: "https://react-getting-started-d5523-default-rtdb.firebaseio.com",
  projectId: "react-getting-started-d5523",
  storageBucket: "react-getting-started-d5523.appspot.com",
  messagingSenderId: "389028647962",
  appId: "1:389028647962:web:b706c9f59f13347c486da3"
};



// Initialize Firebase
const app = getApps.length?getApp():initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const auth = getAuth(app);
export {auth};

export default db;