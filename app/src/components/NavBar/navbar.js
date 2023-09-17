import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Logo from "../../images/HealPointLogoW.png";

function NavBar() {
	return (
		<nav className="horizontal-nav">
			<ul className="nav-list">
				<a href="http://localhost:3000/body" className="logo">
					<img src={Logo} alt="Logo" />
				</a>
				<li className="Homepage">
					<Link to="/body">Home</Link>
				</li>
				<li className="SignUp">
					<Link to="/register">Sign Up</Link>
				</li>
				<li className="SignIn">
					<Link to="/login">Log In</Link>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
