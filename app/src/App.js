import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestComponent from "./components/TestComponent";
import SignIn from "./components/SignInPage/SignIn";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TestComponent />} />
          <Route path="/sign-up" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
