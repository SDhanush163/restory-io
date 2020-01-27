import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "*******************",
  authDomain: "*******************",
  databaseURL: "*******************",
  projectId: "*******************",
  storageBucket: "*******************",
  messagingSenderId: "*******************",
};


firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { firebase, storage as default };
