import Button from "../../UI/Button/Button";
import Checkbox from "../../UI/Checkbox/Checkbox";
import "./passwGen.css";

function PasswGen() {
  return (
    <div className="pass-container">
      <div className="pass-content-cont">
        <h1>Password Generator</h1>
        <div>Form</div>
        <div>
          <h3>Password Length:</h3>
          <input type="number" min="0" max="50" />
          <input type="range" min="0" max="50" />
        </div>
        <div>
          <h3>Password Settings:</h3>

          <Checkbox />
        </div>
        <Button>Generate Password</Button>
      </div>
    </div>
  );
}

export default PasswGen;
