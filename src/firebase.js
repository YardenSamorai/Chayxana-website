
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBlx-Ea4BLNuy_KAmNion3shaQvQVc5YcA",
  authDomain: "chayxana-resturantdb.firebaseapp.com",
  projectId: "chayxana-resturantdb",
  storageBucket: "chayxana-resturantdb.appspot.com",
  messagingSenderId: "433280557362",
  appId: "1:433280557362:web:ae13013d183045f4abf72b",
  measurementId: "G-L082PSB1T9"
};

firebase.initializeApp(firebaseConfig);
export default firebase;