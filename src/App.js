import "./App.css";
import StudentRegister from "./pages/StudentAuth/StudentRegister";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import StudentLogin from "./pages/StudentAuth/StudentLogin";
import EmployerRegister from "./pages/EmployerAuth/EmployerRegister";
import EmployerLogin from "./pages/EmployerAuth/EmployerLogin";
import Home from "./pages/Home/Home";
import {useEffect, useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "./firebase/firebase.config";
import Loading from "./pages/Loading";
import Favorites from "./pages/Favorites";
import Messages from "./pages/Messages";

function App() {
	const [user, setUser] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			setUser(user);
			setLoading(false);
		});
	}, []);
	return (
		<BrowserRouter>
			{loading ? (
				<Loading />
			) : user ? (
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Favorites" element={<Favorites />} />
					<Route path="/Messages" element={<Messages />} />
				</Routes>
			) : (
				<Routes>
					<Route path="/" element={<StudentRegister />} />
					<Route path="/StudentLogin" element={<StudentLogin />} />
					<Route
						path="/EmployerRegister"
						element={<EmployerRegister />}
					/>
					<Route path="/EmployerLogin" element={<EmployerLogin />} />
				</Routes>
			)}
		</BrowserRouter>
	);
}

export default App;
