import { useEffect, useState } from "react";

function usePassword() {
  //Chars che corrispondo alle opzioni
  const num = "0123456789";
  const low = "abcdefghijklmnopqrstuvwxyz";
  const upp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const sym = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  const [lunPassw, setLunPassw] = useState(1);
  const [styleColor, setStyleColor] = useState({});

  //Oggetto che tiene le opzioni dei checkbox
  const [passwSettings, setPasswSettings] = useState({
    numbers: true,
    lowercase: true,
    uppercase: true,
    symbols: true,
  });
  const [password, setPassword] = useState("password");

  //Inizializzazione dei chars con tuttle le opzioni attive
  const [chars, setChars] = useState([...num, ...low, ...upp, ...sym]);

  //Controllo del colore della password, cambia colore in base alla lunghezza
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
    createAlgorithm();
  }, [passwSettings]);

  //Crea Array di chars da usare come password
  function createAlgorithm() {
    let newArrayChars = [];
    if (passwSettings.numbers === true) {
      newArrayChars = [...num];
    }
    if (passwSettings.lowercase === true) {
      newArrayChars = [...newArrayChars, ...low];
    }
    if (passwSettings.uppercase === true) {
      newArrayChars = [...newArrayChars, ...upp];
    }
    if (passwSettings.symbols === true) {
      newArrayChars = [...newArrayChars, ...sym];
    }

    setChars(newArrayChars);
  }

  //Crea password in base ai settings scelti, oppure di dice di sceglierne almeno uno
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

  return {
    password,
    styleColor,
    lunPassw,
    setLunPassw,
    passwSettings,
    setPasswSettings,
    generatePassword,
  };
}

export default usePassword;
