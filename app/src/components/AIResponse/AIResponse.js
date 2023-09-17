import React, { useState, useEffect, useRef } from "react";
import { diagonsis_prompt } from "../utils/prompt.js";
import { createGPTResponse } from "../utils/AI.js";
import ResponseCard from "../ResponseCards/ResponseCard.js";
import "./AIResponse.css";
import { language_prompt } from "../utils/prompt";
import RingLoader from "react-spinners/RingLoader";

const AIResponse = (props) => {
	const { answers, conversation, language } = props;
	const [aiResults, setAiResults] = useState(null);

	const generateAnswer = async () => {
		const formattedResponses = answers.map((response, index) => {
			const label = index + 1 + ".";
			return `${label} ${response}`;
		});

		let responseJson2 = {
			diagnosis: "Diagonsis",
			remedy: "Remedy",
		};

		if (language != "English") {
			let prompt2 = language_prompt + `Language: ${language}`;
			const response2 = await createGPTResponse([], prompt2);
			console.log(response2);
			responseJson2 = JSON.parse(response2.response);
		}

		let prompt =
			formattedResponses.join(", ") +
			"\n" +
			diagonsis_prompt +
			`\nThe language should be ${language}`;
		const response = await createGPTResponse(conversation, prompt);
		let responseJson = JSON.parse(response.response);

		setAiResults({
			response: responseJson.answer,
			diagnosisHeader: responseJson2.diagnosis,
			remedyHeader: responseJson2.remedy,
		});
	};

	useEffect(() => {
		generateAnswer();
	}, []);

	return (
		<div className="response-div">
			{aiResults ? (
				aiResults.response.map((item, index) => (
					<ResponseCard
						key={index}
						diagnosis={item.diagnosis}
						remedy={item.remedy}
						remedyHeader={aiResults.remedyHeader}
						diagnosisHeader={aiResults.diagnosisHeader}
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
