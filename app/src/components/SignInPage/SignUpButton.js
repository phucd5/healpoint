import React from "react";
import { Link } from "react-router-dom";
import "./InputBoxes.css";

const SignUpButton = ({ text }) => {
  return (
    <div>
      <button className="tosignup">
        <Link to="/sign-up" className="link-style">
          Sign Up
        </Link>
      </button>
    </div>
  );
};

export default SignUpButton;
