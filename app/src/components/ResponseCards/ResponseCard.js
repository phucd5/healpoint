import React from "react";
import "./Card.css";

const ResponseCard = ({ diagnosis, remedy }) => {
	return (
		<div className="card-boarder">
			<h1> Diagnosis </h1>
			<p> {diagnosis} </p>

			<h1> Remedy </h1>
			<p> {remedy} </p>
		</div>
	);
};

export default ResponseCard;
