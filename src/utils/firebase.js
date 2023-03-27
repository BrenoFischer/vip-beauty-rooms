import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, collection, writeBatch, doc, query, getDocs, updateDoc, deleteDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

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

//create the object to handle Authentication
export const auth = getAuth();

//create the object that handle firestore database
export const db = getFirestore();

//create instance to storage, able to manage images
export const storage = getStorage(firebaseApp);


//uploads a given image based on the file path given and returns the url
export const uploadImageToStorage = async (filePath, image) => {
  //provides an image referance on the storage, based on the file path given
  const imageRef = ref(storage, filePath);

  //upload the image based on the imageRef object - returns the snapshot of the upload result
  const snapshot = await uploadBytes(imageRef, image);

  //obtain the url of the uploaded image - this url can be used to display the image on a <img> tag, on src field
  const url = await getDownloadURL(snapshot.ref);

  return url;
}


//given a filepath, returns the URL of the image from Storage in Firebase
export const getImageFromStorage = async (filePath) => {
  const imageRef = ref(storage, filePath);

  return await getDownloadURL(imageRef);
}


//returns one document reference, based on a collection given and key of the documents
export const getDocument = (collectionRef, key) => {
  return doc(collectionRef, key);
}


//receive a collection key and add/create a document to that collection. It'll add each object passed, based on its ID
export const addCollectionAndDocuments = async (collectionKey, objects) => {
  //gets the collection from the db, based on the key - if collection does not exists, it creates one with the key
  const collectionRef = collection(db, collectionKey);

  //create a Batch instance, that allows to assign CRUD methods 
  const batch = writeBatch(db);

  objects.forEach((object) => {
    //get the document on the corresponding collection of the db, based on the title, that matches the object passed
    const docRef = getDocument(collectionRef, object.id);
    //insert the object on the document from the db
    batch.set(docRef, object);
  });

  //commit the changes made
  await batch.commit();
}


//returns all documents from the services collection inside firestore
export const getServicesAndDocuments = async () => {
  const collectionRef = collection(db, 'services');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  const services = querySnapshot.docs.map(doc => doc.data());
  return services
}


//change/add fields from a service document, based on doc id and data sent.
// If data fields are the same from doc, it will be edited, if new fields are passed, it'll be added
export const editServiceDocument = async (id, data) => {
  const collectionRef = collection(db, 'services');

  const docRef = getDocument(collectionRef, id);

  await updateDoc(docRef, data);
}


//delete a service document based on its id
export const deleteServiceDocument = async (id) => {
  const collectionRef = collection(db, 'services');

  const docRef = getDocument(collectionRef, id);

  await deleteDoc(docRef);
}


//get the opening hours, for all days of the week
export const getOpeningHoursDocuments = async () => {
  const collectionRef = collection(db, 'openingHours');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  const openingHours = querySnapshot.docs.map(docSnapshot => {
    return { title: docSnapshot.id, items: docSnapshot.data() };
  });
  return openingHours;
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