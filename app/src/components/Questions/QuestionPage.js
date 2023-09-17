import { useState } from "react";
import Question from "./Question";
import NavBar from "../NavBar/navbar";

const QuestionPage = ({questionsAndAnswer}) => {
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
        console.log('Quiz finished. Answers:', newAnswers);
      }
    };
  
    return (
        <div>
        <NavBar/>
          {currentQuestion < questionsAndAnswer.length ? (
            <Question 
              questionText={questionsAndAnswer[currentQuestion].questionText} 
              choices = {questionsAndAnswer[currentQuestion].choices}
              questionNumber={currentQuestion} 
              setAnswer={setAnswer} 
            />
          ) : (
            <div className = 'endText'>Thank you for completing the questions!</div>
          )}
        </div>
      );
  };
  
  export default QuestionPage;