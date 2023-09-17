import { useState } from "react";
import Question from "./Question";

const QuestionPage = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
  
    const questions = [
      'What is your name?',
      'What is your favorite color?',
      'What is your quest?',
    ];
  
    const setAnswer = (questionNumber, answer) => {
      const newAnswers = [...answers];
      newAnswers[questionNumber] = answer;
      setAnswers(newAnswers);
  
      // Go to next question
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        console.log('Quiz finished. Answers:', newAnswers);
      }
    };
  
    return (
      <div>
        <Question 
          questionText={questions[currentQuestion]} 
          questionNumber={currentQuestion} 
          setAnswer={setAnswer} 
        />
      </div>
    );
  };
  
  export default QuestionPage;