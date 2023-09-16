import React, { useState } from "react";
import "./InputBoxes.css";

function InputBoxes() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="inputContainer">
      <div className="relative-wrapper">
        <h3 className="email">Email</h3>
        <input
          className="inputBoxes"
          type="email"
          value={inputValue}
          onChange={handleChange}
          placeholder="Type something..."
        />
      </div>
    </div>
  );
}

export default InputBoxes;
