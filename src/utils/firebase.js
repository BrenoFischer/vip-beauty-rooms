import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ9nd8e-cvu65NFIuJa5N9jqYF0xPlFn4",
  authDomain: "unique-beauty-87701.firebaseapp.com",
  projectId: "unique-beauty-87701",
  storageBucket: "unique-beauty-87701.appspot.com",
  messagingSenderId: "143726295928",
  appId: "1:143726295928:web:513437c215d1b8f96fe68d"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore();

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}