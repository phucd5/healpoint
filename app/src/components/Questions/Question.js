import { useState } from "react";
import "./style.css"

const Question = ({ questionText, questionNumber, setAnswer }) => {
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    setAnswer(questionNumber, value);
    setValue(''); 
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="wrapper">
      <label>{questionText}</label>
      <input 
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Question;
