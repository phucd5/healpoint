import { useState } from "react";
import Question from "./Question";
import NavBar from "../NavBar/navbar";
import AIResponse from "../AIResponse/AIResponse";
import { useRef, useEffect } from "react";

const QuestionPage = ({ questionsAndAnswer, conversation }) => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [answers, setAnswers] = useState([]);

	const setAnswer = (questionNumber, answer) => {
		const newAnswers = [...answers];
		newAnswers[questionNumber] = answer;
		setAnswers(newAnswers);

		if (currentQuestion < questionsAndAnswer.length - 1) {
			setCurrentQuestion(currentQuestion + 1);
		} else {
			setCurrentQuestion(currentQuestion + 1);
			console.log("Quiz finished. Answers:", newAnswers);
		}
	};

	return (
		<div>
			<NavBar />
			{console.log("test")}
			{console.log(questionsAndAnswer)}
			{currentQuestion < questionsAndAnswer.length ? (
				<Question
					questionText={
						questionsAndAnswer[currentQuestion].questionText
					}
					choices={questionsAndAnswer[currentQuestion].choices}
					questionNumber={currentQuestion}
					setAnswer={setAnswer}
				/>
			) : (
				<AIResponse answers={answers} conversation={conversation} />
			)}
		</div>
	);
};

export default QuestionPage;
