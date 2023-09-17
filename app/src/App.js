import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage/Home";
import BodySelector from "./components/BodySelector/BodySelector.js";
import QForm from "./components/Form/QForm.js";
import RegistrationPage from "./components/RegistrationPage/RegistrationPage";
import LoginPage from "./components/LoginPage/LoginPage";
import MoreInfoPage from "./components/MoreInfoPage/MoreInfoPage";
import QuestionPage from "./components/Questions/QuestionPage";
import ResponsePage from "./components/ResponsePage/ResponsePage";
import Logout from "./components/Logout/LogoutPage";

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
					<Route path="/response" element={<ResponsePage />} />
					<Route path="/logout" element={<Logout/>} />
					<Route
						path="/question"
						element={
							<QuestionPage
							questionsAndAnswer={[
									{
									  questionText: "What is the capital of France?",
									  choices: ["Paris", "London", "Berlin", "Madrid"],
									
									},
									{
									  questionText: "What is 2 + 2?",
									  choices: ["3", "4", "5", "6"],
								
									},
									{
									  questionText: "What is the largest mammal?",
									  choices: ["Elephant", "Blue whale", "Giraffe", "Kangaroo"],
									
									},
									{
									  questionText: "Who wrote 'To Kill a Mockingbird'?",
									  choices: ["Harper Lee", "Mark Twain", "George Orwell", "J.K. Rowling"],
					
									}
								  ]
								  
								  }
							/>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
