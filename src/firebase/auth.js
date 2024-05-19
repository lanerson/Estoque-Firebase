import firebase_app from "./config";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(firebase_app);


export default async function signUp(email, password) {
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
}

export default async function signIn(email, password) {
    let result = null,
        error = null;
    try {
        result = await signInWithEmailAndPassword(auth, email, password)
    } catch (e) {
        error = e;
    }

    return { result, error };
}