import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar/navbar";

const TestComponent = (props) => {
  return (
    <div>
      <NavBar></NavBar>
      Hello World
      <Button>Button here</Button>
    </div>
  );
};

export default TestComponent;
