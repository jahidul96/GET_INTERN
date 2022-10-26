import React from "react";
import Filters from "../../components/Filters/Filters";
import InternCard from "../../components/InternCard.js/InternCard";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";

const Home = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="py-10 px-20">
        <div className="flex justify-between w-full">
          <Filters />
          <InternCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
