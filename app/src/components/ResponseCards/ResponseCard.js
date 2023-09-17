import React from "react";
import "./Card.css";

const ResponseCard = ({
	key,
	diagnosis,
	remedy,
	diagnosisHeader,
	remedyHeader,
}) => {
	return (
		<div className="card-boarder" id={key}>
			{/* <h1> {diagnosisHeader} </h1> */}
			<p> {diagnosis} </p>
			<p></p>
			{/* <h1> {remedyHeader} </h1> */}
			<p> {remedy} </p>
		</div>
	);
};

export default ResponseCard;
