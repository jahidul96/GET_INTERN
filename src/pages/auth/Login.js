import React, { useContext, useState } from "react";
import { ButtonComp, Input } from "../../components/Reuseable/Reuse";
import { Link } from "react-router-dom";
import { fbLogin } from "../../firebase/FBauth";
import { useNavigate } from "react-router-dom";
import SinginImage from "../../images/image.png";
import { AuthUserContext } from "../../context/Context";

const img =
  "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(AuthUserContext);

  const submitData = (e) => {
    e.preventDefault();
    fbLogin(email, password)
      .then((user) => {
        setUser(user);
        // navigate("/");
      })
      .catch((err) => alert("something went wrong"));
  };
  return (
    <div className="w-full h-screen bg-slate-900 flex  items-center">
      <div className="hidden md:block w-1/2 h-full ">
        <img src={SinginImage} className="w-full h-full" />
      </div>
      <form className="flex-1 bg-slate-900 flex flex-col justify-center px-5 items-center ">
        <div className="w-96">
          <div className="w-full flex flex-col justify-center items-center">
            <img src={img} className="w-16 h-16 rounded-full" />
            <h1 className="font-bold text-xl mt-2 underline text-white">
              Login
            </h1>
          </div>
          <Input placeholder="Email" inputStyle="mt-4" setValue={setEmail} />
          <Input
            placeholder="Password"
            setValue={setPassword}
            type="password"
          />
          <ButtonComp text="Login" btnStyles=" mb-3" onClick={submitData} />

          <div className="flex flex-col items-center">
            <h1 className="text-white">Don't have an Account?</h1>
            <Link
              to="/"
              className="text-sky-500 cursor-pointer underline  mb-2"
            >
              Register here
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
