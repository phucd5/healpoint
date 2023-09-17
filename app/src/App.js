import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage/Home";
import BodySelector from "./components/BodySelector/BodySelector.js";
import RegistrationPage from "./components/RegistrationPage/RegistrationPage";
import LoginPage from "./components/LoginPage/LoginPage";
import MoreInfoPage from "./components/MoreInfoPage/MoreInfoPage";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/sign-in" element={<LoginPage />} />
					<Route path="/sign-up" element={<RegistrationPage />} />
					<Route path="/body" element={<BodySelector />} />
					<Route path="/more" element={<MoreInfoPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
