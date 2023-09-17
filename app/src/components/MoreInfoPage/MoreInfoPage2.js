import React, { useState } from "react";
import { MultiSelect } from "primereact/multiselect";
import "./MoreInfoPage.css";

function MoreInfoPage() {
	const [selectedCities, setSelectedCities] = useState(null);
	const [selectedFoods, setSelectedFoods] = useState(null);

	const cities = [
		{ name: "New York", code: "NY" },
		{ name: "Rome", code: "RM" },
		{ name: "London", code: "LDN" },
		{ name: "Istanbul", code: "IST" },
		{ name: "Paris", code: "PRS" },
	];

	const foods = [
		{ name: "Pizza", code: "PZ" },
		{ name: "Burger", code: "BG" },
		{ name: "Sushi", code: "SH" },
		{ name: "Pasta", code: "PS" },
		{ name: "Tacos", code: "TC" },
	];

	return (
		<div className="multi-select-div">
			<h2>Please enter any medical conditions or lifestyle:</h2>
			<div className="card w-full md:w-20rem m-2">
				<MultiSelect
					value={selectedCities}
					onChange={(e) => setSelectedCities(e.value)}
					options={cities}
					optionLabel="name"
					placeholder="Select Cities"
					maxSelectedLabels={3}
					className="w-full"
				/>
			</div>

			<div className="card w-full md:w-20rem m-2">
				<MultiSelect
					value={selectedFoods}
					onChange={(e) => setSelectedFoods(e.value)}
					options={foods}
					optionLabel="name"
					placeholder="Select Foods"
					maxSelectedLabels={3}
					className="w-full"
				/>
			</div>
		</div>
	);
}

export default MoreInfoPage;
