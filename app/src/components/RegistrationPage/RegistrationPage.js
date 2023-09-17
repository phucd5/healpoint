import React, { useState } from "react";
import axios from "axios";
import "./RegistrationPage.css";
import MoreInfoPage from "../MoreInfoPage/MoreInfoPage";
import NavBar from "../NavBar/navbar";
import Select from "react-dropdown-select";

const RegistrationPage = () => {
	const [isRegistered, setIsRegistered] = useState(false);
	const [user, setUser] = useState(false);
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});

	const [selectedLanguage, setSelectedLangauge] = useState("English");

	const languages = [
		{ value: "English", label: "English" },
		{ value: "Spanish", label: "Spanish" },
		{ value: "Vietnamese", label: "Vietnamese" },
	];

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post(`http://localhost:3002/auth/register`, {
				firstName: formData.firstName,
				lastName: formData.lastName,
				email: formData.email,
				password: formData.password,
				language: selectedLanguage,
			})
			.then((response) => {
				setUser(response.data);
				setIsRegistered(true);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const renderRegForm = () => {
		return (
			<div>
				<NavBar></NavBar>
				<div className="form-div">
					<h1>Register</h1>
					<form onSubmit={handleSubmit}>
						<div>
							<label className="form-label">First Name:</label>
							<input
								type="text"
								name="firstName"
								value={formData.firstName}
								onChange={handleChange}
								className="form-input"
								placeholder="Type something..."
							/>
						</div>
						<div>
							<label className="form-label">Last Name:</label>
							<input
								type="text"
								name="lastName"
								value={formData.lastName}
								onChange={handleChange}
								className="form-input"
								placeholder="Type something..."
							/>
						</div>
						<div>
							<label className="form-label">Email:</label>
							<input
								type="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								className="form-input"
								placeholder="Type something..."
							/>
						</div>
						<div style={{ marginBottom: "15px" }}>
							<label className="form-label">Select:</label>
							<Select
								value={selectedLanguage}
								onChange={(e) => {
									setSelectedLangauge(e[0].value);
								}}
								options={languages}
							/>
						</div>

						<div>
							<label className="form-label">Password:</label>
							<input
								type="password"
								name="password"
								value={formData.password}
								onChange={handleChange}
								className="form-input"
								placeholder="Type something..."
							/>
						</div>
						<button className="submit-btn" type="submit">
							Register
						</button>
					</form>
				</div>
			</div>
		);
	};
	return (
		<div>
			{isRegistered ? <MoreInfoPage user={user} /> : renderRegForm()}
		</div>
	);
};

export default RegistrationPage;
