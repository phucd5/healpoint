import "./InputBoxes.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/navbar";

const SignUp = () => {
  const [email, setEmail] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const [password, setPassword] = useState("");

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const [password_conf, setPasswordConf] = useState("");

  const handlePasswordConf = (event) => {
    setPasswordConf(event.target.value);
  };

  const handleSignUpClick = () => {
    alert("Successfully signed up!");
  };

  return (
    <div className="SignUp">
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
      <div className="inputContainer">
        <div className="relative-wrapper">
          <h3 className="password-conf">Password Confirmation</h3>
          <input
            className="inputBoxes"
            type="password"
            value={password_conf}
            onChange={handlePasswordConf}
            placeholder="Type something..."
          />
        </div>
      </div>
      <div>
        <button className="signup" onClick={handleSignUpClick}>
          <Link to="/" className="link-style">
            Sign Up
          </Link>
        </button>
      </div>
    </div>
  );
};

export default SignUp;
