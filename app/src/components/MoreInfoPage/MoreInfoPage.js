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
		{ name: "Cardiovascular Disease", code: "CVD" },
		{ name: "High Cholesterol", code: "HCL" },
		{ name: "Obesity", code: "OBS" },
		{ name: "Depression", code: "DPR" },
		{ name: "Anxiety", code: "ANX" },
		{ name: "Chronic Kidney Disease", code: "CKD" },
		{ name: "Osteoporosis", code: "OSP" },
		{ name: "Allergies", code: "ALG" },
		{ name: "Gastrointestinal Issues", code: "GIS" },
		{ name: "Thyroid Disorder", code: "TYD" },
		{ name: "Autoimmune Disease", code: "AUD" },
		{ name: "Sleep Disorders", code: "SLD" },
		{ name: "Chronic Pain", code: "CPN" },
		{ name: "Skin Conditions", code: "SKC" },
		{ name: "Migraines", code: "MIG" },
		{ name: "Respiratory Issues", code: "RIS" },
		{ name: "Liver Disease", code: "LVD" },
		{ name: "Neurological Disorders", code: "NEU" },
		{ name: "Substance Abuse", code: "SUA" }
	];
	

	const lifestyles = [
		{ name: "Sedentary", code: "SDT" },
		{ name: "Active", code: "ACT" },
		{ name: "Vegan", code: "VGN" },
		{ name: "Vegetarian", code: "VGT" },
		{ name: "Paleo", code: "PAL" },
		{ name: "Ketogenic", code: "KETO" },
		{ name: "Mediterranean", code: "MED" },
		{ name: "Smoker", code: "SMK" },
		{ name: "Non-Smoker", code: "NSMK" },
		{ name: "Regular Alcohol Consumption", code: "RAC" },
		{ name: "No Alcohol Consumption", code: "NAC" },
		{ name: "Frequent Fast Food", code: "FFF" },
		{ name: "Balanced Diet", code: "BDT" },
		{ name: "High-Stress", code: "HST" },
		{ name: "Low-Stress", code: "LST" },
		{ name: "Regular Exercise", code: "REX" },
		{ name: "No Regular Exercise", code: "NRE" },
		{ name: "Night Shift Work", code: "NSW" },
		{ name: "Day Shift Work", code: "DSW" },
		{ name: "Remote Work", code: "RMT" },
		{ name: "Regular Travel", code: "RTR" },
		{ name: "Occasional Travel", code: "OTR" },
		{ name: "No Travel", code: "NTR" }
	];
	
	const handleSubmit = async () => {
		console.log(user);
		let lifestyles = selectedLifestyle.map((item) => item.name);
		let conditions = selectedConditions.map((item) => item.name);

		if (selectedLifestyle == null) {
			lifestyles = [];
		}
		if (selectedConditions == null) {
			conditions = [];
		}
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
			navigate("/login");
		} catch (error) {
			alert(error);
		}
	};

	return (
		<div className="multi-select-div">
			<h1>Please enter any medical conditions or lifestyle:</h1>
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
				<div className="card w-full md:w-40rem m-2">
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
