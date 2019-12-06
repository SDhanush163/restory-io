import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBFYOaRisBsvHxen4GTYVaE1gmgFaftHew",
  authDomain: "restiryio.firebaseapp.com",
  databaseURL: "https://restoryio.firebaseio.com/",
  projectId: "restoryio",
  storageBucket: "gs://restoryio.appspot.com",
  messagingSenderId: "791913334582",
};


firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { firebase, storage as default };
