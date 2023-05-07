import "./checkbox.css";

function Checkbox({ passwSettings, setPasswSettings }) {
  return (
    <div className="container-checkbox">
      <label htmlFor="checkbox-1">
        <input
          type="checkbox"
          id="checkbox-1"
          name="checkbox-1"
          checked={passwSettings.numbers}
          onChange={(ev) =>
            setPasswSettings({ ...passwSettings, numbers: ev.target.checked })
          }
        />
        Numbers
      </label>
      <label htmlFor="checkbox-2">
        <input
          type="checkbox"
          id="checkbox-2"
          name="checkbox-2"
          checked={passwSettings.lowercase}
          onChange={(ev) =>
            setPasswSettings({ ...passwSettings, lowercase: ev.target.checked })
          }
        />
        Lowercase
      </label>

      <label htmlFor="checkbox-3">
        <input
          type="checkbox"
          id="checkbox-3"
          name="checkbox-3"
          checked={passwSettings.uppercase}
          onChange={(ev) =>
            setPasswSettings({ ...passwSettings, uppercase: ev.target.checked })
          }
        />
        Uppercase
      </label>
      <label htmlFor="checkbox-4">
        <input
          type="checkbox"
          id="checkbox-4"
          name="checkbox-4"
          checked={passwSettings.symbols}
          onChange={(ev) =>
            setPasswSettings({ ...passwSettings, symbols: ev.target.checked })
          }
        />
        Symbols
      </label>
    </div>
  );
}

export default Checkbox;
