import { useEffect, useState } from "react";
import Button from "../../UI/Button/Button";
import Checkbox from "../../UI/Checkbox/Checkbox";
import "./passwGen.css";

function PasswGen() {
  const [lunPassw, setLunPassw] = useState(0);
  const [styleColor, setStyleColor] = useState({});
  const [passwSettings, setPasswSettings] = useState({
    numbers: true,
    lowercase: true,
    uppercase: true,
    symbols: true,
  });

  const num = "0123456789";
  const low = "abcdefghijklmnopqrstuvwxyz";
  const upp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const sym = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  const [password, setPassword] = useState("password");
  // const [chars, setChars] = useState(
  //   "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-="
  // );
  const [chars, setChars] = useState([num, low, upp, sym]);

  useEffect(() => {
    if (lunPassw >= 4 && lunPassw < 8) {
      setStyleColor({ backgroundColor: "#df6661", width: "25%" });
    } else if (lunPassw >= 8 && lunPassw < 12) {
      setStyleColor({ backgroundColor: "#ffc93c", width: "50%" });
    } else if (lunPassw >= 12 && lunPassw < 16) {
      setStyleColor({ backgroundColor: "#82c91e", width: "75%" });
    } else if (lunPassw >= 16) {
      setStyleColor({ backgroundColor: "#059c02", width: "100%" });
    } else {
      setStyleColor({ backgroundColor: "none", width: "0%" });
    }
  }, [lunPassw]);

  useEffect(() => {
    if (passwSettings.numbers) {
    } else {
    }
  }, [passwSettings]);

  function generatePassword() {
    let password = "";
    if (
      !passwSettings.numbers &&
      !passwSettings.lowercase &&
      !passwSettings.uppercase &&
      !passwSettings.symbols
    ) {
      password = "Please select an option.";
      setPassword(password);
    } else {
      for (let i = 0; i < lunPassw; i++) {
        let randomChar = chars[Math.floor(Math.random() * chars.length)];
        password += randomChar;
      }
      setPassword(password);
    }
  }

  // console.log(generatePassword()); // Output esempio: "KjL7^Pd@"

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
            min="0"
            max="50"
            value={lunPassw}
            onChange={(ev) => setLunPassw(ev.target.value)}
          />
          <input
            type="range"
            min="0"
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
