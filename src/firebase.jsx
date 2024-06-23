import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "store-tutorial-6d8d6.firebaseapp.com",
  projectId: "store-tutorial-6d8d6",
  storageBucket: "store-tutorial-6d8d6.appspot.com",
  messagingSenderId: "812146298258",
  appId: "1:812146298258:web:0ddcc20b95cd34ab22054b"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);