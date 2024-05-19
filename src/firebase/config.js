import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDeW9qwpF24BGsnZ4QTBQMmsQFY7HGGCIk",
    authDomain: "estoque-48640.firebaseapp.com",
    projectId: "estoque-48640",
    storageBucket: "estoque-48640.appspot.com",
    messagingSenderId: "450725382933",
    appId: "1:450725382933:web:27daca04a8b987a6b9b71c"
};

let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;