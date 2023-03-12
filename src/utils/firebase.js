import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, collection, writeBatch } from 'firebase/firestore';


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
initializeApp(firebaseConfig);

//create the object to handle Authentication
export const auth = getAuth();

//create the object that handle firestore database
export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objects) => {
  //gets the collection from the db, based on the key - if collection does not exists, it creates one with the key
  const collectionRef = collection(db, collectionKey);

  //create a Batch instance, that allows to assign CRUD methods 
  const batch = writeBatch(db);

  objects.forEach((object) => {
    //get the document on the corresponding collection of the db, based on the title, that matches the object passed
    const docRef = doc(collectionRef, object.title.toLowerCase());
    //insert the object on the document from the db
    batch.set(docRef, object);
  });

  //commit the changes made
  await batch.commit();
}

//authenticate with email and password given
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

//Listener that handle when authentication is changed. It needs a callback function that will receive the User state whenever auth is changed
export const onAuthStateChangeListener = (callback) => 
  onAuthStateChanged(auth, callback);

//Sign out the current user
export const signOutUser = async () => await signOut(auth);