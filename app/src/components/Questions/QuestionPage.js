import { useState } from "react";
import Question from "./Question";
import NavBar from "../NavBar/navbar2";
import AIResponse from "../AIResponse/AIResponse";

const QuestionPage = ({
	questionsAndAnswer,
	conversation,
	language,
	healthData,
}) => {
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
		}
	};

	return (
		<div>
			<NavBar />
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
				<AIResponse
					answers={answers}
					healthData={healthData}
					conversation={conversation}
					language={language}
				/>
			)}
		</div>
	);
};

export default QuestionPage;
