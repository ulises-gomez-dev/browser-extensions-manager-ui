import { useState, useEffect } from "react";
import Logo from "./assets/images/logo.svg?react";
import Sun from "./assets/images/icon-sun.svg?react";
import Moon from "./assets/images/icon-moon.svg?react";
import "./Header.css";

function Header() {
  const [theme, setTheme] = useState("light");

  document.body.className = theme;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="logo-header">
      <Logo className="logo" />
      <button className="app-theme-toggle" onClick={toggleTheme}>
        {theme === "light" ? <Moon /> : <Sun />}
      </button>
    </header>
  );
}

export default Header;
