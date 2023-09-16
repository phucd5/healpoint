import React, { useState } from "react";
import "./InputBoxes.css";

function InputPasswordBoxes(props) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="inputContainer">
      <div className="relative-wrapper">
        <h3 className="password">Password</h3>
        <input
          className="inputBoxes"
          type="password"
          value={inputValue}
          onChange={handleChange}
          placeholder="Type something..."
        />
      </div>
    </div>
  );
}

export default InputPasswordBoxes;
