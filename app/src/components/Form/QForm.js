import { useForm } from "./Form";
import { useState } from "react";
import { Q1 } from "./Q1";
import { Q2 } from "./Q2";
import { Q3 } from "./Q3";

const QForm = () => {
  const [formData, setFormData] = useState({
    A1: "",
    A2: "",
    A3: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const getSteps = () => [
    <Q1 value={formData.A1} onChange={handleChange} />,
    <Q2 value={formData.A2} onChange={handleChange} />,
    <Q3 value={formData.A3} onChange={handleChange} />,
  ];

  const { steps, currentStepIndex, step, back, next } = useForm(
    getSteps,
    formData
  );

  function onSubmit(e) {
    e.preventDefault();
  }

  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
      }}
    >
      <form onSubmit={onSubmit}>
        <div
          style={{
            position: "absolute",
            top: ".5rem",
            right: ".5rem",
          }}
        >
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div>
          {currentStepIndex !== 0 && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button type="next" onClick={next}>
            {currentStepIndex === 2 ? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default QForm;
