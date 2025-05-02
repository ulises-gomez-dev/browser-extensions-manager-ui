import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.querySelector("body").setAttribute("data-rm-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return <div></div>;
}

export default App;
