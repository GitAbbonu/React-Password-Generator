import "./checkbox.css";

function Checkbox() {
  return (
    <div className="container-checkbox">
      <label for="checkbox-1">
        <input type="checkbox" id="checkbox-1" name="checkbox-1" />
        Numbers
      </label>
      <label for="checkbox-2">
        <input type="checkbox" id="checkbox-2" name="checkbox-2" />
        Lowercase
      </label>

      <label for="checkbox-3">
        <input type="checkbox" id="checkbox-3" name="checkbox-3" />
        Uppercase
      </label>
      <label for="checkbox-4">
        <input type="checkbox" id="checkbox-4" name="checkbox-4" />
        Symbols
      </label>
    </div>
  );
}

export default Checkbox;
