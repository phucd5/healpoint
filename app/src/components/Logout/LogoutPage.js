import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Logout = () => {
	const navigate = useNavigate();
	useEffect(() => {
		localStorage.removeItem("user");
		navigate("/login"); // eslint-disable-next-line
	}, []);
};

export default Logout;
