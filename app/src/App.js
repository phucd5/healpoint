import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage/Home";
import BodySelector from "./components/BodySelector/BodySelector.js";
import QForm from "./components/Form/QForm.js";
import RegistrationPage from "./components/RegistrationPage/RegistrationPage";
import LoginPage from "./components/LoginPage/LoginPage";
import MoreInfoPage from "./components/MoreInfoPage/MoreInfoPage";
import QuestionPage from "./components/Questions/QuestionPage"

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegistrationPage />} />
					<Route path="/body" element={<BodySelector />} />
					<Route path="/details" element={<MoreInfoPage />} />
					<Route path="/form" element={<QForm />} />
					<Route path="/question" element={<QuestionPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
