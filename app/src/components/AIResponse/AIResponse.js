import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AIResponse = (props) => {
	const { answers } = props;

	useEffect(() => {
		console.log(answers);
	}, []);

	return <div>Hello World!</div>;
};

export default AIResponse;
