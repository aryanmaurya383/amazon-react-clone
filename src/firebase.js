
// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore/lite';
// import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";




const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAGwbq5xIYQ2MpBqgunwLjcqQc7wFO-tG4",
    authDomain: "react-clone-616b4.firebaseapp.com",
    projectId: "react-clone-616b4",
    storageBucket: "react-clone-616b4.appspot.com",
    messagingSenderId: "15610551189",
    appId: "1:15610551189:web:b2d606a8e7c930a4a2749c",
    measurementId: "G-S8507N5TE3"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

// const db = getFirestore(firebaseApp);
// const auth = getAuth(firebaseApp);
// const storage = getStorage(firebaseApp);

export { db, auth, storage };
