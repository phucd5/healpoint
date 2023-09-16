import InputBoxes from "./InputBoxes";
import InputPasswordBoxes from "./InputPasswordBoxes";
import SignUpButton from "./SignUpButton";
import LogInButton from "./LogInButton";
import "./InputBoxes.css";

const SignIn = () => {
  return (
    <div className="SignIn">
      <InputBoxes />
      <InputPasswordBoxes />
      <SignUpButton />
      <LogInButton />
    </div>
  );
};

export default SignIn;
