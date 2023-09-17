import React, { useState } from "react";
import "./RegistrationPage.css";

const RegistrationPage = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Submitted:", formData);
	};

	return (
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
					/>
				</div>
				<button className="submit-btn" type="submit">
					Register
				</button>
			</form>
		</div>
	);
};

export default RegistrationPage;
