import Button from "../../UI/Button/Button";
import Checkbox from "../../UI/Checkbox/Checkbox";
import "./passwGen.css";
import usePassword from "./usePassword";

function PasswGen() {
  const {
    password,
    styleColor,
    lunPassw,
    setLunPassw,
    passwSettings,
    setPasswSettings,
    generatePassword,
  } = usePassword();

  return (
    <div className="pass-container">
      <div className="pass-content-cont">
        <h1>Password Generator</h1>
        <div>
          <div className="passw-generator">
            <input type="text" value={password} readOnly />
          </div>
          <div className="passw-generator-color" style={styleColor}></div>
        </div>
        <h3>Password Length:</h3>
        <div className="pass-range">
          <input
            type="number"
            min="1"
            max="50"
            value={lunPassw}
            onChange={(ev) => setLunPassw(ev.target.value)}
          />
          <input
            type="range"
            min="1"
            max="50"
            value={lunPassw}
            onChange={(ev) => setLunPassw(ev.target.value)}
          />
        </div>
        <div>
          <h3>Password Options:</h3>

          <Checkbox
            passwSettings={passwSettings}
            setPasswSettings={setPasswSettings}
          />
        </div>
        <Button click={generatePassword}>Generate Password</Button>
      </div>
    </div>
  );
}

export default PasswGen;
