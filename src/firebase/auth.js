import { auth } from "./config";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

export async function signUp(email, password) {
    await createUserWithEmailAndPassword(auth, email, password)
        .then(() => alert("sucesso no cadastro Auth"))
        .catch((error) => alert(error.message)
        )

}

export async function signIn(email, password) {
    await signInWithEmailAndPassword(auth, email, password)
        .then(() => //console.log("está logado")
            alert("está logado"))
        .catch((error) => alert(error.message))
}