import { useState } from "react";
import "./Button.css";

function Button({ label }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(isActive ? false : true);
  };

  return (
    <button className="filter-tab" onClick={handleClick}>
      {label}
    </button>
  );
}

export default Button;
