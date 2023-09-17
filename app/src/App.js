import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BodySelector from "./components/BodySelector/BodySelector.js";
import RegistrationPage from "./components/RegistrationPage/RegistrationPage";
import LoginPage from "./components/LoginPage/LoginPage";
import Logout from "./components/Logout/LogoutPage";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegistrationPage />} />
					<Route path="/body" element={<BodySelector />} />
					<Route path="/logout" element={<Logout />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
