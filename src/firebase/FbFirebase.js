import {
	addDoc,
	collection,
	doc,
	getDoc,
	getDocs,
	limit,
	onSnapshot,
	orderBy,
	query,
	setDoc,
	startAfter,
	where,
} from "firebase/firestore";
import {db} from "./firebase.config";

export const addStudentTofb = async (id, info) => {
	await setDoc(doc(db, "Students", id), info);
};
export const addEmployerTofb = async (id, info) => {
	await setDoc(doc(db, "Employer", id), info);
};
