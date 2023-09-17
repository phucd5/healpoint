import { ReactElement, useState } from "react";

export function useForm(steps) {
  const [currentstepIndex, setCurrentStepIndex] = useState(0);

  function next(formData) {
    setCurrentStepIndex((i) => {
      console.log(i);
      if (i >= steps.length - 1) {
        console.log("hi");
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
    currentstepIndex,
    step: steps[currentstepIndex],
    steps,
    goTo,
    next,
    back,
  };
}
