import "./style.css";

const SubmitButton = ({ onClick, disabled }) => {
	return (
		<div className="button-container">
			<button
				className="submit-button"
				onClick={onClick}
				disabled={disabled}
			>
				Submit
			</button>
		</div>
	);
};

export default SubmitButton;
