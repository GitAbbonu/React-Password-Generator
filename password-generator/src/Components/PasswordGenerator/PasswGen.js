import { useState } from "react";
import Button from "../../UI/Button/Button";
import Checkbox from "../../UI/Checkbox/Checkbox";
import "./passwGen.css";

function PasswGen() {
  const [lunPassw, setLunPassw] = useState(0);

  return (
    <div className="pass-container">
      <div className="pass-content-cont">
        <h1>Password Generator</h1>
        <div>Form</div>
        <h3>Password Length:</h3>
        <div className="pass-range">
          <input type="number" min="0" max="50" value={lunPassw} />
          <input
            type="range"
            min="0"
            max="50"
            onChange={(ev) => setLunPassw(ev.target.value)}
          />
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
