import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage/Home";
import BodySelector from "./components/BodySelector/BodySelector.js";
import QForm from "./components/Form/QForm.js";
import RegistrationPage from "./components/RegistrationPage/RegistrationPage";
import LoginPage from "./components/LoginPage/LoginPage";
import MoreInfoPage from "./components/MoreInfoPage/MoreInfoPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/body" element={<BodySelector />} />
          <Route path="/form" element={<QForm />} />
          <Route path="/more" element={<MoreInfoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
