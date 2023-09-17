import { useState } from "react";
import "./style.css";
import front from "../images/Front.png";
import back from "../images/Back.png";
import SubmitButton from "../BodySelector/submit";

const Home = () => {
	//name: (x1,y1,x2,y2)
	const bodyParts = {
		head: {
			x1: 202.76388549804688,
			y1: 0.6666717529296875,
			x2: 269.7638854980469,
			y2: 83.66667175292969,
		},
		body: {
			x1: 160.2083282470703,
			y1: 111.13888549804688,
			x2: 317.2083282470703,
			y2: 296.1388854980469,
		},
		"right-arm": {
			x1: 91.76388549804688,
			y1: 119.66667175292969,
			x2: 161.76388549804688,
			y2: 420.6666717529297,
		},
		"left-arm": {
			x1: 312.7638854980469,
			y1: 114.66667175292969,
			x2: 381.7638854980469,
			y2: 425.6666717529297,
		},
		"right-leg": {
			x1: 139.04165649414062,
			y1: 311.6666717529297,
			x2: 225.04165649414062,
			y2: 728.6666717529297,
		},
		"left-leg": {
			x1: 240.76388549804688,
			y1: 311.6666717529297,
			x2: 332.7638854980469,
			y2: 730.6666717529297,
		},
	};

	const [body, setBody] = useState([]);
	const [highlights, setHighlights] = useState([]);

	function isPointInRectangle(px, py, x1, y1, x2, y2) {
		const minX = Math.min(x1, x2);
		const maxX = Math.max(x1, x2);
		const minY = Math.min(y1, y2);
		const maxY = Math.max(y1, y2);

		return minX <= px && px <= maxX && minY <= py && py <= maxY;
	}
	const handleClick = (event, isFront = false) => {
		const rect = event.target.getBoundingClientRect();

		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;

		console.log("this is ", x, y);

		for (const bodyPart of Object.keys(bodyParts)) {
			const { x1, y1, x2, y2 } = bodyParts[bodyPart];
			if (isPointInRectangle(x, y, x1, y1, x2, y2)) {
				let actualBodyPart = bodyPart;
				let originalBodyPart = bodyPart; // Initialize originalBodyPart
				console.log(
					"this is before transform",
					actualBodyPart,
					originalBodyPart,
					isFront
				);
				if (!isFront) {
					if (actualBodyPart === "left-arm") {
						actualBodyPart = "right-arm";
						originalBodyPart = "left-arm"; // Set originalBodyPart
					} else if (actualBodyPart === "right-arm") {
						actualBodyPart = "left-arm";
						originalBodyPart = "right-arm"; // Set originalBodyPart
					} else if (actualBodyPart === "left-leg") {
						actualBodyPart = "right-leg";
						originalBodyPart = "left-leg"; // Set originalBodyPart
					} else if (actualBodyPart === "right-leg") {
						actualBodyPart = "left-leg";
						originalBodyPart = "right-leg"; // Set originalBodyPart
					}
				}

				console.log(
					"this is before transform",
					actualBodyPart,
					originalBodyPart,
					isFront
				);
				if (body.includes(actualBodyPart)) {
					setBody((prevBody) =>
						prevBody.filter((part) => part !== actualBodyPart)
					);
					setHighlights((prevHighlights) =>
						prevHighlights.filter(
							(highlight) => highlight !== actualBodyPart
						)
					);
				} else {
					setBody((prevBody) => [...prevBody, actualBodyPart]);
					setHighlights((prevHighlights) => [
						...prevHighlights,
						actualBodyPart,
					]);
				}
				break;
			}
		}
	};

	return (
		<div className="imageContainer">
			{highlights.map((part, index) => {
				const { x1, y1, x2, y2 } = bodyParts[part];
				return (
					<div
						key={`front-${index}`}
						className="highlight"
						style={{
							left: `${x1 + 290}px`,
							top: `${y1 + 0.07 * 750 + 100}px`, // add 7% of image height for .front
							width: `${x2 - x1}px`,
							height: `${y2 - y1}px`,
						}}
					></div>
				);
			})}
			{highlights.map((part, index) => {
				let actualPart = part;
				if (part === "left-arm") actualPart = "right-arm";
				if (part === "right-arm") actualPart = "left-arm";
				if (part === "left-leg") actualPart = "right-leg";
				if (part === "right-leg") actualPart = "left-leg";

				const { x1, y1, x2, y2 } = bodyParts[actualPart];
				return (
					<div
						key={`back-${index}`}
						className="highlight"
						style={{
							left: `${x1 + 925}px`, // Offset for the back image
							top: `${y1 + 150}px`,
							width: `${x2 - x1}px`,
							height: `${y2 - y1}px`,
						}}
					></div>
				);
			})}
			<img
				className="front"
				src={front}
				alt="Clickable"
				onClick={(e) => handleClick(e, true)}
			/>
			<img
				className="back"
				src={back}
				alt="Clickable"
				onClick={handleClick}
			/>
			<SubmitButton
				onClick={() => {
					alert(`submitted ${body}`);
				}}
			/>
		</div>
	);
};

export default Home;
