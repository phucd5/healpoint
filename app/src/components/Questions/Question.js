import { useState } from "react";

const Question = ({ questionText, questionNumber, setAnswer }) => {
    const [value, setValue] = useState('');
  
    const handleSubmit = () => {
      setAnswer(questionNumber, value);
      setValue(''); 
    };
  
    return (
      <div>
        <label>{questionText}</label>
        <input 
          type="text" 
          value={value} 
          onChange={(e) => setValue(e.target.value)} 
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
  };
  

  export default Question;