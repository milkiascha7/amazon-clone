// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBuq-IBDGxV3anBnp9-Ue-oz7WnI_AvANc",
    authDomain: "e-clone-57613.firebaseapp.com",
    projectId: "e-clone-57613",
    storageBucket: "e-clone-57613.appspot.com",
    messagingSenderId: "121732005462",
    appId: "1:121732005462:web:bf39ed743846fdef5e45f7",
    measurementId: "G-SXFX4T6ZVZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }