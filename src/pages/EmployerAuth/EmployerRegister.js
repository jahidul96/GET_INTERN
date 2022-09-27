import React, {useState} from "react";
import {ButtonComp, Input} from "../../components/Reuseable/Reuse";
import {Link} from "react-router-dom";
import {fbregister} from "../../firebase/FBauth";
import {addStudentTofb} from "../../firebase/FbFirebase";
import {useNavigate} from "react-router-dom";

const img =
	"https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png";

function EmployerRegister() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [profilename, setProfilename] = useState("");
	const submitData = (e) => {
		e.preventDefault();
		let alldata = [email, password, profilename];
		let okay = alldata.every(Boolean);
		fbregister(email, password, okay)
			.then((result) => {
				const {uid} = result.user;
				const info = {email, profilename, uid};
				addStudentTofb(uid, info);
				alert("all done ");
				navigate("/Home");
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div className="w-full h-screen bg-slate-900 flex justify-center items-center">
			<form className="w-1/3  h-auto bg-white rounded-lg px-5 py-10 ">
				<div className="w-full flex flex-col justify-center items-center">
					<img src={img} className="w-16 h-16 rounded-full" />
					<h1 className="font-bold text-xl mt-2 underline">
						EmployerRegister
					</h1>
				</div>
				<Input
					placeholder="Registered office Email"
					inputStyle="mt-4"
					setValue={setEmail}
				/>
				<Input placeholder="Password" setValue={setPassword} />
				<Input placeholder="Profilename" setValue={setProfilename} />
				<ButtonComp
					text="Register"
					btnStyles="mb-3"
					onClick={submitData}
				/>

				<div className="flex flex-col items-center">
					<h1>Already have an Account?</h1>
					<Link
						to="/EmployerLogin"
						className="text-sky-500 cursor-pointer underline  mb-2"
					>
						Login here
					</Link>
					<Link
						to="/"
						className="text-red-500 cursor-pointer underline"
					>
						Join as a Student
					</Link>
				</div>
			</form>
		</div>
	);
}

export default EmployerRegister;
