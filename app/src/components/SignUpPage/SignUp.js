import InputBoxes from "./InputBoxes";
import InputPasswordBoxes from "./InputPasswordBoxes";
import SignUpButton from "./SignUpButton";
import "./InputBoxes.css";
import PasswordConfBoxes from "./PasswordConfirmationBox";

const SignUp = () => {
  return (
    <div className="SignUp">
      <InputBoxes />
      <InputPasswordBoxes />
      <PasswordConfBoxes />
      <SignUpButton />
    </div>
  );
};

export default SignUp;
