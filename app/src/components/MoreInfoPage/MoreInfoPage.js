import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MultiSelect } from "primereact/multiselect";
import "./MoreInfoPage.css";

const MoreInfoPage = (props) => {
	const { user } = props;
	const [selectedConditions, setSelectedConditions] = useState(null);
	const [selectedLifestyle, setSelectedLifestyle] = useState(null);

	const navigate = useNavigate();

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

	const handleSubmit = async () => {
		console.log(user);
		const lifestyles = selectedLifestyle.map((item) => item.name);
		const conditions = selectedConditions.map((item) => item.name);

		try {
			const responseHealth = await axios.get(
				`http://localhost:3002/user/${user._id}/healthdata`
			);

			const response = await axios.put(
				`http://localhost:3002/health-data/${responseHealth.data}`,
				{
					conditions: conditions,
					lifestyle: lifestyles,
				}
			);
			console.log(response.data);
			navigate("/body");
		} catch (error) {
			alert(error);
		}
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
			<button className="submit-btn-details" onClick={handleSubmit}>
				Finish Registration
			</button>
		</div>
	);
};

export default MoreInfoPage;
