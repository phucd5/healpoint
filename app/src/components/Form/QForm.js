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

  const { A1, A2, A3 } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const { steps, currentstepIndex, step, back, next } = useForm([
    <Q1 value={A1} onChange={handleChange} />,
    <Q2 value={A2} onChange={handleChange} />,
    <Q3 value={A3} onChange={handleChange} />,
  ]);

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
          {currentstepIndex + 1} / {steps.length}
        </div>
        {step}
        <div>
          {currentstepIndex !== 0 && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button type="next" onClick={next}>
            {currentstepIndex === 2 ? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default QForm;
