import React, { useContext, useState } from "react";
import { ButtonComp, Input } from "../../components/Reuseable/Reuse";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { fbregister } from "../../firebase/FBauth";
import { addUserTofb } from "../../firebase/FbFirebase";
import SinginImage from "../../images/log.png";
import { AuthUserContext } from "../../context/Context";

const img =
  "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { setUser } = useContext(AuthUserContext);

  const submitData = async (e) => {
    e.preventDefault();
    let alldata = [email, password, username];
    let okay = alldata.every(Boolean);
    fbregister(email, password, okay)
      .then((result) => {
        const { uid } = result.user;
        const info = {
          email: email.toLowerCase(),
          username,
          uid,
          hr: false,
          companyName: "",
          companyEmail: "",
        };
        addUserTofb(uid, info);
        setUser(result.user);
        // navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="w-full h-screen bg-slate-900 flex  items-center">
      <div className="hidden md:block w-1/2 h-full">
        <img src={SinginImage} className="w-full h-full" />
      </div>
      <form className="flex-1 bg-slate-900 flex flex-col justify-center px-5 items-center">
        <div className="w-96">
          <div className="w-full flex flex-col justify-center items-center">
            <img src={img} className="w-16 h-16 rounded-full" />
            <h1 className="font-bold text-xl mt-2 underline text-white">
              Register
            </h1>
          </div>
          <Input
            placeholder="Username"
            inputStyle="mt-4"
            setValue={setUsername}
          />
          <Input placeholder="Email" setValue={setEmail} />
          <Input
            placeholder="Password"
            setValue={setPassword}
            type="password"
          />
          <ButtonComp text="Register" btnStyles="mb-3" onClick={submitData} />

          <div className="flex flex-col items-center">
            <h1 className="text-white">Already have an Account?</h1>
            <Link
              className="text-sky-500 cursor-pointer underline  mb-2"
              to="/Login"
            >
              Login here
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
