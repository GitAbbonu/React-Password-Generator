import "./button.css";

function Button({ click }) {
  return (
    <button onClick={click} className="btn">
      Generate Password
    </button>
  );
}

export default Button;
