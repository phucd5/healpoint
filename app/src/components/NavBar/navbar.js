import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  return (
    <nav className="horizontal-nav">
      <ul className="nav-list">
        <li className="Homepage">
          <Link to="/">Home</Link>
        </li>
        <li className="SignUp">
          <Link to="/sign-up">Sign Up</Link>
        </li>
        <li className="SignIn">
          <Link to="/sign-in">Log In</Link>
        </li>
        <li className="About">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
