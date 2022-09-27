import React from "react";
import Filters from "../../components/Filters/Filters";
import InternCard from "../../components/InternCard.js/InternCard";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";

const Home = () => {
	return (
		<div className="">
			<Navbar />
			<div className="homeContainer mt-10 mb-10">
				<div className="flex ">
					<Filters />
					<InternCard />
				</div>
			</div>
		</div>
	);
};

export default Home;
