import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import {auth} from "./firebase.config";

export const fbregister = (email, password, okay) => {
	if (!okay) {
		return alert("Please fill all the field");
	} else if (password.length < 6) {
		return alert("password must be 6 character long");
	} else {
		return new Promise(async (resolve, reject) => {
			await createUserWithEmailAndPassword(auth, email, password)
				.then((info) => {
					resolve(info);
					alert("user created succesfully");
				})
				.catch((err) => {
					reject(err);
					alert("something went wrong", err.message);
				});
		});
	}
};

export const fbLogin = async (email, password) => {
	if (!email || !password) {
		return alert("fill all the fields");
	} else {
		return new Promise(async (resolve, reject) => {
			await signInWithEmailAndPassword(auth, email, password)
				.then((user) => {
					resolve(user);
					alert("login succesfull");
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
};
