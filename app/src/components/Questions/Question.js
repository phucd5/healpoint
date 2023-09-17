import React from "react";
import "./style.css";

const Question = ({ questionText, choices, questionNumber, setAnswer }) => {
	const handleChoiceClick = (choice) => {
		setAnswer(questionNumber, choice);
	};

	return (
		<div className="wrapper">
			<label>{questionText}</label>
			<div className="choices">
				{choices.map((choice, index) => (
					<button
						key={index}
						onClick={() => handleChoiceClick(choice)}
					>
						{choice}
					</button>
				))}
			</div>
		</div>
	);
};

export default Question;
