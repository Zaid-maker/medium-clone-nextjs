import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDG0orlR-jfXS6L_qkbsAC8Uizn3J02Nf0",
  authDomain: "medium-clone-nextjs.firebaseapp.com",
  projectId: "medium-clone-nextjs",
  storageBucket: "medium-clone-nextjs.appspot.com",
  messagingSenderId: "215501689111",
  appId: "1:215501689111:web:37f09f2c3143c66c256752",
  measurementId: "G-5GJM5P6JCD",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
