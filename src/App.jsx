import { useState } from "react";
import data from "./data.json";
import Header from "./Header";
import FilterBar from "./FilterBar";
import "./App.css";

function App() {
  const [extensions, setExtensions] = useState(data);
  const [filterState, setFilterState] = useState("all");

  const handleAll = () => {
    setFilterState("all");
  };

  const handleActive = () => {
    setFilterState("active");
  };

  const handleInactive = () => {
    setFilterState("inactive");
  };

  return (
    <div className="app-container">
      <Header />
      <FilterBar
        allHandler={handleAll}
        activeHandler={handleActive}
        inactiveHandler={handleInactive}
        activeButton={filterState}
      />
    </div>
  );
}

export default App;
