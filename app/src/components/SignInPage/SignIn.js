import InputBoxes from "./InputBoxes";
import InputPasswordBoxes from "./InputPasswordBoxes";
import "./InputBoxes.css";

const SignIn = () => {
  return (
    <div className="SignIn">
      <InputBoxes />
      <InputPasswordBoxes />
    </div>
  );
};

export default SignIn;
