import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage/Home";
import SignIn from "./components/SignInPage/SignIn";
import SignUp from "./components/SignUpPage/SignUp";
import BodySelector from "./components/BodySelector/BodySelector.js";
import QForm from "./components/Form/QForm.js";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
