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


