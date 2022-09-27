import React, {useState} from "react";
import {ButtonComp, Input} from "../../components/Reuseable/Reuse";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {fbregister} from "../../firebase/FBauth";
import {addStudentTofb} from "../../firebase/FbFirebase";

const img =
	"https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png";

function StudentRegister() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	const [succes, setSucces] = useState(false);
	const [user, setUser] = useState({});

	const submitData = async (e) => {
		e.preventDefault();
		let alldata = [email, password, username];
		let okay = alldata.every(Boolean);
		fbregister(email, password, okay)
			.then((result) => {
				const {uid} = result.user;
				const info = {email, username, uid};
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
						StudentRegister
					</h1>
				</div>
				<Input
					placeholder="Email"
					inputStyle="mt-4"
					setValue={setEmail}
				/>
				<Input placeholder="Password" setValue={setPassword} />
				<Input placeholder="Username" setValue={setUsername} />
				<ButtonComp
					text="Register"
					btnStyles="mb-3"
					onClick={submitData}
				/>

				<div className="flex flex-col items-center">
					<h1>Already have an Account?</h1>
					<Link
						className="text-sky-500 cursor-pointer underline  mb-2"
						to="/StudentLogin"
					>
						Login here
					</Link>
					<Link
						to="/EmployerRegister"
						className="text-red-500 cursor-pointer underline"
					>
						Join as a Employer
					</Link>
				</div>
			</form>
		</div>
	);
}

export default StudentRegister;
