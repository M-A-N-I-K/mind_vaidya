import { app } from "./firebase.js";
import { getAuth } from "firebase/auth";
import {
	query,
	getDocs,
	collection,
	where,
	addDoc,
	getFirestore,
	orderBy,
} from "firebase/firestore";

export const auth = getAuth(app);
export const db = getFirestore(app);

export async function storeData(dataToStore, userEmail) {
	try {
		const timestamp = new Date();
		const dataWithExtras = {
			...dataToStore,
			email: userEmail,
			timestamp: timestamp.toISOString(),
		};
		await addDoc(collection(db, "userSuggestions"), dataWithExtras);
		console.log("User Suggestions Successfully added!");
	} catch (error) {
		console.error("Error:", error.message);
	}
}

export async function retrieveData(email) {

	try {
		if (email) {

			const q = query(collection(db, "userSuggestions"), where("email", "==", email));
			const docs = await getDocs(q);
			return docs;
		}
	} catch (error) {
		console.error("Error:", error.message);
	}
}

export async function getMostRecentDocument(userEmail) {
	try {
		if (userEmail) {

			const collectionRef = collection(db, "userSuggestions");
			const queryRef = query(
				collectionRef,
				where("email", "==", userEmail),
				orderBy("timestamp", "desc")
			);

			const snapshot = await getDocs(queryRef);

			if (snapshot.docs.length > 0) {
				const mostRecentDocumentData = snapshot.docs[0].data();
				return { success: true, data: mostRecentDocumentData };
			}
			else {
				return { success: false, message: "No documents found in the collection." };
			}
		}
	} catch (error) {
		return { success: false, message: error.message };
	}
}

export async function getDocumentsForUserAndDate(userEmail, targetDate) {
	try {
		const collectionRef = collection(db, "userSuggestions");
		const emailQuery = query(collectionRef, where("email", "==", userEmail));

		const emailSnapshot = await getDocs(emailQuery);

		const filteredDocuments = emailSnapshot.docs
			.filter((doc) => doc.data().timestamp.includes(targetDate))
			.map((doc) => doc.data());
		return { success: true, data: filteredDocuments };
	} catch (error) {
		return { success: false, message: error.message };
	}
}
