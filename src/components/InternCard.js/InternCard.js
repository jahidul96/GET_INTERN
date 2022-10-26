import React from "react";
import { GrLocation } from "react-icons/gr";
import { GiDuration } from "react-icons/gi";
import { BsFillSkipStartCircleFill } from "react-icons/bs";
import { RiHandCoinLine } from "react-icons/ri";
import { TbCurrencyTaka } from "react-icons/tb";
import { AiOutlineRight } from "react-icons/ai";

function InternCard() {
  const interns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="ml-10  flex-1">
      {interns.map((intern, i) => (
        <Card key={i} />
      ))}
    </div>
  );
}

export default InternCard;

const Card = () => {
  return (
    <div className="w-full p-5 relative ring-1 bg-white ring-gray-300 ">
      <h1 className="text-2xl font-semibold text-gray-600">React Native Dev</h1>
      <div className="flex items-center absolute top-5 right-0 px-4 py-1 bg-red-100 rounded-l-md">
        <h1>Verified</h1>
      </div>

      <h1 className="mt-3 font-medium text-gray-500 ">Dhaka, bangladesh</h1>
      <div className="flex items-center my-5">
        <GrLocation size={18} className="text-gray-500" />
        <h1 className="ml-2 -mt-1 text-gray-600">Dhaka, bangladesh</h1>
      </div>
      <div className="w-3/4 flex justify-between items-center">
        <DurationComp
          text="StartDate"
          icon={<BsFillSkipStartCircleFill size={18} />}
        />
        <DurationComp text="Duration" icon={<GiDuration size={18} />} />
        <DurationComp text="Salary" icon={<RiHandCoinLine size={18} />} />
      </div>
      <div className="w-3/4 flex justify-between items-center mt-1">
        <DurationComp text="Immediately" none={true} />
        <DurationComp text="4 months" none={true} />
        <DurationComp text="10,000" none={true} price={true} />
      </div>
      <div className="flex justify-between items-center mt-6  ">
        <div className="flex items-center w-1/3 ">
          <NotifyText text="11/12/21" time={true} />
          <div className="ml-5">
            <NotifyText text="Remote" />
          </div>
        </div>
        <div className="flex items-center px-3 py-1 bg-sky-50 text-sky-500 rounded-md">
          <button className=" text-sky-500">View Details</button>
          <AiOutlineRight size={16} className="text-sky-500 ml-2 mt-1" />
        </div>
      </div>
    </div>
  );
};

const NotifyText = ({ text, time }) => (
  <div
    className={`${
      time
        ? "px-2 py-1 bg-sky-50 rounded-md"
        : "px-2 py-1 bg-slate-100 rounded-md"
    }`}
  >
    <h1 className={`${time ? "text-sm text-sky-500 " : "text-sm "}`}>{text}</h1>
  </div>
);

const DurationComp = ({ text, icon, none, price }) => (
  <div className="flex items-center">
    <h1 className="text-gray-500">{icon}</h1>
    {price ? (
      <div className="flex items-center">
        <TbCurrencyTaka size={22} />
        <h1 className={`ml-1`}>{text}</h1>
      </div>
    ) : (
      <h1 className={`${none ? "" : " ml-3 -mt-1 text-gray-500"}`}>{text}</h1>
    )}
  </div>
);
