import "./Button.css";

function Button({ className, clickHandler, label }) {
  return (
    <button
      className={`filter-tab ${className}`}
      onClick={clickHandler}
      onMouseDown={(e) => e.preventDefault()}
    >
      <p className="filter-tab-text">{label}</p>
    </button>
  );
}

export default Button;
