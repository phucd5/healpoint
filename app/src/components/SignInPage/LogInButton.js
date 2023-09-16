import React from "react";
import { Link } from "react-router-dom";
import "./InputBoxes.css";

const LogInButton = ({ text }) => {
  return (
    <div>
      <button className="login">
        <Link to="/" className="link-style">
          Login
        </Link>
      </button>
    </div>
  );
};

export default LogInButton;
