import "./InputBoxes.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/navbar";

const SignIn = () => {
  const [email, setEmail] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const [password, setPassword] = useState("");

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="SignIn">
      <NavBar></NavBar>
      <div className="inputContainer">
        <div className="relative-wrapper">
          <h3 className="email">Email</h3>
          <input
            className="inputBoxes"
            type="email"
            value={email}
            onChange={handleEmail}
            placeholder="Type something..."
          />
        </div>
      </div>
      <div className="inputContainer">
        <div className="relative-wrapper">
          <h3 className="password">Password</h3>
          <input
            className="inputBoxes"
            type="password"
            value={password}
            onChange={handlePassword}
            placeholder="Type something..."
          />
        </div>
      </div>
      <div>
        <button className="tosignup">
          <Link to="/sign-up" className="link-style">
            Sign Up
          </Link>
        </button>
      </div>
      <div>
        <button className="login">
          <Link to="/" className="link-style">
            Login
          </Link>
        </button>
      </div>
    </div>
  );
};

export default SignIn;
