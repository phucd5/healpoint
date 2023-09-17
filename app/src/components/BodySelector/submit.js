import "./style.css";

const SubmitButton = ({ onClick }) => {
  return (
    <div className="button-container">
      <button className="submit-button" onClick={onClick}>
        Submit
      </button>
    </div>
  );
};

export default SubmitButton;
