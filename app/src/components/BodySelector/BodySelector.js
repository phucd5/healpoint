import React from "react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import frontImage from "../images/Front.png";
import backImage from "../images/Back.png";
import "./style.css";
import NavBar from "../NavBar/navbar";
import SubmitButton from "./submit";
import { createGPTResponse } from "../utils/AI.js";
import { question_prompt } from "../utils/prompt.js";
import QuestionPage from "../Questions/QuestionPage";
import RingLoader from "react-spinners/RingLoader";

const PageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: #f2f2f2;
`;

const ImageContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80vh;
`;

const width = 2114 * 0.8;
const height = 3353 * 0.8;

function isPointInRectangle(px, py, x1, y1, x2, y2) {
	const minX = Math.min(x1, x2);
	const maxX = Math.max(x1, x2);
	const minY = Math.min(y1, y2);
	const maxY = Math.max(y1, y2);

	return minX <= px && px <= maxX && minY <= py && py <= maxY;
}

const Highlight = styled.div`
	position: absolute;
	border: 2px solid red;
	background-color: rgba(255, 0, 0, 0.4);
`;

const BodySelector = () => {
	const [body, setBody] = useState([]);
	const [frontHighlight, setfrontHighlight] = useState([]);
	const [backHighlight, setbackHighlight] = useState([]);
	const [scalingFactor, setScalingFactor] = useState({ x: 1, y: 1 });
	const imageRef = useRef(null);
	const [frontRect, setFrontRect] = useState({ top: 0, left: 0 });

	const [user, setUser] = useState(null);
	const [isSubmitted, setisSubmitted] = useState(false);
	const [questionsPrompt, setQuestionsPrompt] = useState(null);
	const [converstation, setConverstation] = useState(null);
	const [isLoading, setisLoading] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		const loggedInUser = localStorage.getItem("user");
		if (loggedInUser) {
			let responseJson = JSON.parse(loggedInUser);
			setUser(responseJson);
		} else {
			alert("Please login!");
			navigate("/login");
		}
	}, []);

	const frontParts = {
		head: {
			x1: 130,
			y1: -15,
			x2: 185,
			y2: 60,
		},
		shoulder: {
			x1: 75,
			y1: 61,
			x2: 240,
			y2: 108,
		},
		chest: {
			x1: 100,
			y1: 109,
			x2: 215,
			y2: 147,
		},
		abdomen: {
			x1: 115,
			y1: 148,
			x2: 200,
			y2: 210,
		},
		pelvis: {
			x1: 100,
			y1: 211,
			x2: 215,
			y2: 280,
		},
	};

	const backParts = {
		neck: {
			x1: 135,
			y1: 35,
			x2: 185,
			y2: 60,
		},
		upper_back: {
			x1: 100,
			y1: 61,
			x2: 220,
			y2: 143,
		},
		lower_back: {
			x1: 110,
			y1: 144,
			x2: 210,
			y2: 225,
		},
		hip: {
			x1: 107,
			y1: 226,
			x2: 213,
			y2: 280,
		},
	};

	const bothParts = {
		left_leg: {
			x1: 85,
			y1: 281,
			x2: 160,
			y2: 520,
		},
		right_leg: {
			x1: 165,
			y1: 281,
			x2: 235,
			y2: 520,
		},
		left_arm: {
			x1: 50,
			y1: 109,
			x2: 99,
			y2: 295,
		},
		right_arm: {
			x1: 216,
			y1: 109,
			x2: 264,
			y2: 295,
		},
	};

	const oppositePart = {
		left_leg: "right_leg",
		right_leg: "left_leg",
		left_arm: "right_arm",
		right_arm: "left_arm",
	};

	const handleSubmit = async () => {
		if (body.length === 0) {
			alert("Congratulations, you haven't reported any pain!");
		} else {
			let prompt = question_prompt;
			prompt =
				question_prompt +
				"Body Parts: " +
				body.join(", ") +
				`\nThe language should be ${"English"}`;
			setisLoading(true);
			const response = await createGPTResponse([], prompt);
			setConverstation(response.conversation);
			let responseJson = JSON.parse(response.response);
			setQuestionsPrompt(responseJson.questions);
			setisSubmitted(true);
			setisLoading(false);
			console.log("Done");
		}
	};

	const handleBothClick = (event) => {
		const rect = event.target.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;

		console.log("both clicked here: ", x, y);

		for (const part in bothParts) {
			const { x1, y1, x2, y2 } = bothParts[part];

			if (isPointInRectangle(x, y, x1, y1, x2, y2)) {
				const opposite = oppositePart[part];

				if (body.includes(part)) {
					alert(
						`${part.replace(/_/g, " ")} and ${opposite.replace(
							/_/g,
							" "
						)} removed`
					);
					setBody((prevBody) =>
						prevBody.filter(
							(item) => item !== part && item !== opposite
						)
					);
					setfrontHighlight((prevBody) =>
						prevBody.filter(
							(item) => item !== part && item !== opposite
						)
					);
					setbackHighlight((prevBody) =>
						prevBody.filter(
							(item) => item !== part && item !== opposite
						)
					);
				} else {
					alert(
						`${part.replace(/_/g, " ")} and ${opposite.replace(
							/_/g,
							" "
						)} added`
					);
					setBody((prevBody) => [...prevBody, part, opposite]);
					setfrontHighlight((prevBody) => [
						...prevBody,
						part,
						opposite,
					]);
					setbackHighlight((prevBody) => [
						...prevBody,
						part,
						opposite,
					]);
				}
				break;
			}
		}
	};

	const handleFrontClick = (event) => {
		const rect = event.target.getBoundingClientRect();
		setFrontRect({ top: rect.top, left: rect.left });

		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;

		handleBothClick(event);

		console.log("this is x,y of front click: ", x, y);

		for (const part in frontParts) {
			const { x1, y1, x2, y2 } = frontParts[part];
			if (isPointInRectangle(x, y, x1, y1, x2, y2)) {
				if (body.includes(part)) {
					alert(`${part.replace(/_/g, " ")} removed`);
					setBody((prevBody) =>
						prevBody.filter((item) => item !== part)
					);
					setfrontHighlight((prevBody) =>
						prevBody.filter((item) => item !== part)
					);
					break;
				} else {
					alert(`${part.replace(/_/g, " ")} added`);
					setBody((prevBody) => [...prevBody, part]);
					setfrontHighlight((prevBody) => [...prevBody, part]);
					break;
				}
			}
		}
	};
	useEffect(() => {
		if (imageRef.current) {
			setScalingFactor({
				x: imageRef.current.width / width,
				y: imageRef.current.height / height,
			});
		}
	}, []);

	const handleBackClick = (event) => {
		const rect = event.target.getBoundingClientRect();
		setFrontRect({ top: rect.top, left: rect.left });

		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;

		handleBothClick(event);

		console.log("this is x,y of back click: ", x, y);

		for (const part in backParts) {
			const { x1, y1, x2, y2 } = backParts[part];

			if (isPointInRectangle(x, y, x1, y1, x2, y2)) {
				if (body.includes(part)) {
					alert(`${part.replace(/_/g, " ")} removed`);
					setBody((prevBody) =>
						prevBody.filter((item) => item !== part)
					);
					setbackHighlight((prevBody) =>
						prevBody.filter((item) => item !== part)
					);
					break;
				} else {
					alert(`${part.replace(/_/g, " ")} added`);
					setBody((prevBody) => [...prevBody, part]);
					setbackHighlight((prevBody) => [...prevBody, part]);
					break;
				}
			}
		}
	};

	return (
		<div>
			{!isSubmitted ? (
				isLoading ? (
					// Render this when isSubmitted is false and isLoading is true
					<div>
						<NavBar />
						<div className="loader-div">
							<RingLoader color="#0194ff" />
						</div>
					</div>
				) : (
					// Render this when isSubmitted is false and isLoading is false
					<div>
						<NavBar />
						<PageContainer>
							{frontHighlight.map((part, index) => {
								const { x1, y1, x2, y2 } =
									frontParts.hasOwnProperty(part)
										? frontParts[part]
										: bothParts[part];
								return (
									<div
										key={`front-${index}`}
										className="highlight"
										style={{
											left: `${x1 + 181.5}px`,
											top: `${y1 + 130}px`,
											width: `${x2 - x1}px`,
											height: `${y2 - y1}px`,
										}}
									></div>
								);
							})}
							{backHighlight.map((part, index) => {
								const { x1, y1, x2, y2 } =
									backParts.hasOwnProperty(part)
										? backParts[part]
										: bothParts[part];

								return (
									<div
										key={`back-${index}`}
										className="highlight"
										style={{
											left: `${x1 + 765}px`,
											top: `${y1 + 130}px`,
											width: `${x2 - x1}px`,
											height: `${y2 - y1}px`,
										}}
									></div>
								);
							})}
							<ImageContainer>
								<img
									ref={imageRef}
									src={frontImage}
									alt="Front"
									onClick={handleFrontClick}
									className="images"
								/>
								<SubmitButton
									onClick={handleSubmit}
									disabled={isLoading}
								/>
								<img
									src={backImage}
									alt="Back"
									onClick={handleBackClick}
									className="images"
								/>
							</ImageContainer>
						</PageContainer>
					</div>
				)
			) : (
				<QuestionPage
					questionsAndAnswer={questionsPrompt}
					conversation={converstation}
					language={"English"}
				/>
			)}
		</div>
	);
};

export default BodySelector;
