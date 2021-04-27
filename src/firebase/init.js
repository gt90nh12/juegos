import firebase from 'firebase'
import firestore from 'firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC85c8nbr6xa_A5dA4VCbOvNcFfE8ruT3M",
    authDomain: "aprendizaje-57cdc.firebaseapp.com",
    projectId: "aprendizaje-57cdc",
    storageBucket: "aprendizaje-57cdc.appspot.com",
    messagingSenderId: "813628156735",
    appId: "1:813628156735:web:04306cfa2890bdaab4c18a",
    measurementId: "G-6DZTR9V2TV"
  };
  
  const firebaseapp = firebase.initializeApp(firebaseConfig);
export default firebaseapp

