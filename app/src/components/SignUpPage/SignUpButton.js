import React from "react";
import { Link } from "react-router-dom";
import "./InputBoxes.css";

const SignUpButton = ({ text }) => {
  const handleSignUpClick = () => {
    alert("Successfully signed up!");
  };

  return (
    <div>
      <button className="signup" onClick={handleSignUpClick}>
        <Link to="/" className="link-style">
          Sign Up
        </Link>
      </button>
    </div>
  );
};

export default SignUpButton;
