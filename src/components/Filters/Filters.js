import React from "react";
import {Input} from "../Reuseable/Reuse";

function Filters() {
	return (
		<div className="w-1/3 h-min sticky top-10  p-5 ring-1 rounded-md ring-gray-300">
			<h1 className="text-center font-semibold text-lg tracking-wider">
				Filters
			</h1>
			<CheckComp text="As my Preferencess" />
			<ChoseFromInput
				title="Categories"
				placeholder="type categories"
				style="-mb-3"
			/>
			<ChoseFromInput title="Location" placeholder="chose location" />

			<CheckComp text="Work from home" />
			<CheckComp text="Part time" />
			<CheckComp text="Intern with job offers" />
			<CheckComp text="Women intern" />
		</div>
	);
}

export default Filters;

const CheckComp = ({text}) => (
	<div className="flex items-center mt-5">
		<div className="w-4 h-4 ring-1 ring-gray-300 rounded-sm"></div>
		<h1 className="ml-4 -mt-1 font-medium">{text}</h1>
	</div>
);

const ChoseFromInput = ({title, placeholder, style}) => (
	<div className={`mt-5 ${style}`}>
		<h1 className="font-medium mb-3">{title}</h1>
		<Input
			placeholder={placeholder}
			inputStyle="h-8  bg-white ring-1 ring-gray-300"
		/>
	</div>
);
