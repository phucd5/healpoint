import { ReactElement, useState } from "react";

export function useForm(getSteps, formData) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const steps = getSteps(); // <-- Call the function to get the steps

  function next() {
    console.log(formData);
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) {
        return i;
      }
      return i + 1;
    });
  }
  function next() {
    console.log(formData); // Now this should correctly log the formData
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) {
        return i;
      }
      return i + 1;
    });
  }

  function back() {
    setCurrentStepIndex((i) => {
      if (i <= 0) return 1;
      return i - 1;
    });
  }

  function goTo(index) {}

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    goTo,
    next,
    back,
  };
}
