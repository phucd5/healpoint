import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Logo from "../images/HealPointLogoW.png";

function NavBar() {
  return (
    <nav className="horizontal-nav">
      <ul className="nav-list">
        <img src={Logo} alt="Logo" className="logo" />
        <li className="Homepage">
          <Link to="/body">Home</Link>
        </li>
        <li className="SignUp">
          <Link to="/register">Sign Up</Link>
        </li>
        <li className="SignIn">
          <Link to="/login">Log In</Link>
        </li>
        <li className="About">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
