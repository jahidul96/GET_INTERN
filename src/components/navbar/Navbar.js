import React, { useState } from "react";
import { ButtonComp } from "../Reuseable/Reuse";
import "./nav.css";
import { AiOutlineMessage } from "react-icons/ai";
import { FiBookmark } from "react-icons/fi";
import { BsCaretDown, BsCaretUp } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);
  return (
    <div className="w-full h-20 bg-inherit shadow-md flex  justify-center">
      <div className="container mx-auto w-full flex items-center justify-between">
        <div className="flex-1">
          <h1 className="text-3xl text-sky-500 font-bold ">GetIntern</h1>
        </div>
        <div className="flex w-44 justify-between items-center">
          <FiBookmark
            size={22}
            className="cursor-pointer text-gray-500 hover:text-sky-500"
            onClick={() => navigate("/Favorites")}
          />
          <AiOutlineMessage
            size={22}
            className="cursor-pointer text-gray-500 hover:text-sky-500"
            onClick={() => navigate("/Messages")}
          />
          <div
            className="flex items-center cursor-pointer "
            onClick={() => setShowProfile(!showProfile)}
          >
            <div className="w-7 ring-2 h-7 rounded-full flex justify-center items-center mr-2">
              <h1 className="text-sky-500">J</h1>
            </div>
            {showProfile ? (
              <BsCaretUp
                size={22}
                className=" text-gray-500 hover:text-sky-500"
              />
            ) : (
              <BsCaretDown
                size={22}
                className=" text-gray-500 hover:text-sky-500"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
