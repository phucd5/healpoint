import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { diagonsis_prompt } from "../utils/prompt.js";
import { createGPTResponse } from "../utils/AI.js";
import ResponseCard from "../ResponseCards/ResponseCard.js";
import "./AIResponse.css";
import RingLoader from "react-spinners/RingLoader";

const AIResponse = (props) => {
	const { answers, conversation } = props;
	const [aiResults, setAiResults] = useState(null);

	const generateAnswer = async () => {
		const formattedResponses = answers.map((response, index) => {
			const label = index + 1 + ".";
			return `${label} ${response}`;
		});

		let prompt = formattedResponses.join(", ") + "\n" + diagonsis_prompt;
		const response = await createGPTResponse(conversation, prompt);
		let responseJson = JSON.parse(response.response);
		console.log("HELLO?");
		console.log(responseJson);
		console.log("A?A?", response.response);
		setAiResults(responseJson.answer);
		console.log(responseJson.answer);
	};

	useEffect(() => {
		generateAnswer();
	}, []);

	return (
		<div className="response-div">
			{aiResults && aiResults.length > 0 ? (
				aiResults.map((item, index) => (
					<ResponseCard
						diagnosis={item.diagnosis}
						remedy={item.remedy}
					/>
				))
			) : (
				<div className="response-div">
					<RingLoader color="#0194ff" />
				</div>
			)}
		</div>
	);
};

export default AIResponse;
