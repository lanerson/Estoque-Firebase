import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
};
// const firebaseConfig = {
//     apiKey: "AIzaSyDeW9qwpF24BGsnZ4QTBQMmsQFY7HGGCIk",
//     authDomain: "estoque-48640.firebaseapp.com",
//     projectId: "estoque-48640",
//     storageBucket: "estoque-48640.appspot.com",
//     messagingSenderId: "450725382933",
//     appId: "1:450725382933:web:27daca04a8b987a6b9b71c"
// };

console.log(firebaseConfig)


// let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

const db = getFirestore(app)

export { auth, db };
