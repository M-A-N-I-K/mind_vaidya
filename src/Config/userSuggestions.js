import { app } from "./firebase.js"
import {
    GoogleAuthProvider,
    getAuth,
} from "firebase/auth";
import {
    query,
    getDocs,
    collection,
    where,
    addDoc,
    getFirestore
} from "firebase/firestore";

const googleProvider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const db = getFirestore(app);


export const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};


