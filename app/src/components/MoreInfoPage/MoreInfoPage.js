import React, { useState } from "react";
import { MultiSelect } from "primereact/multiselect";
import "./MoreInfoPage.css";

const MoreInfoPage = () => {
	const [selectedConditions, setSelectedConditions] = useState(null);
	const [selectedLifestyle, setSelectedLifestyle] = useState(null);

	const conditions = [
		{ name: "Hypertension", code: "HTN" },
		{ name: "Diabetes", code: "DBT" },
		{ name: "Asthma", code: "AST" },
		{ name: "Arthritis", code: "ART" },
		{ name: "Cancer", code: "CNC" },
	];

	const lifestyles = [
		{ name: "Sedentary", code: "SDT" },
		{ name: "Active", code: "ACT" },
		{ name: "Vegan", code: "VGN" },
		{ name: "Vegetarian", code: "VGT" },
		{ name: "Paleo", code: "PAL" },
	];

	const handleGoToNewPage = () => {
		window.location.href = "/body";
	};

	return (
		<div className="multi-select-div">
			<h2>Please enter any medical conditions or lifestyle:</h2>
			<div className="dropdown-container">
				<div className="card w-full md:w-20rem m-2">
					<MultiSelect
						value={selectedConditions}
						onChange={(e) => setSelectedConditions(e.value)}
						options={conditions}
						optionLabel="name"
						placeholder="Select Conditions"
						maxSelectedLabels={10}
						className="w-full"
					/>
				</div>
				<div className="card w-full md:w-20rem m-2">
					<MultiSelect
						value={selectedLifestyle}
						onChange={(e) => setSelectedLifestyle(e.value)}
						options={lifestyles}
						optionLabel="name"
						placeholder="Select Lifestyle"
						maxSelectedLabels={10}
						className="w-full"
					/>
				</div>
			</div>
			<button className="submit-btn" onClick={handleGoToNewPage}>
				Submit
			</button>
		</div>
	);
};

export default MoreInfoPage;
