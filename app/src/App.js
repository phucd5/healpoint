import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestComponent from "./components/TestComponent";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<TestComponent />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
