import "./App.css";
import Register from "./pages/auth/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase.config";
import Loading from "./pages/Loading";
import Favorites from "./pages/Favorites";
import Messages from "./pages/Messages";
import { AuthUserContext } from "./context/Context";
import Login from "./pages/auth/Login";

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
    <AuthUserContext.Provider value={{ user, setUser }}>
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
            <Route path="/" element={<Register />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        )}
      </BrowserRouter>
    </AuthUserContext.Provider>
  );
}

export default App;
