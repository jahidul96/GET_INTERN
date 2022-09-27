import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyCL8zO4j3CBqVWjRGjOw50SHiqigl-kkKo",

	authDomain: "practiceproject-d7a35.firebaseapp.com",

	projectId: "practiceproject-d7a35",

	storageBucket: "practiceproject-d7a35.appspot.com",

	messagingSenderId: "96311772527",

	appId: "1:96311772527:web:f7092008f873502d8e549a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
