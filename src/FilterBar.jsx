import Button from "./components/Button";
import "./FilterBar.css";

function FilterBar({
  allHandler,
  activeHandler,
  inactiveHandler,
  activeButton,
}) {
  return (
    <header className="filter-bar">
      <h1>Extensions List</h1>
      <div className="filter-btns">
        <Button
          className={activeButton === "all" ? "active" : ""}
          clickHandler={allHandler}
          label="All"
        />
        <Button
          className={activeButton === "active" ? "active" : ""}
          label="Active"
          clickHandler={activeHandler}
        />
        <Button
          className={activeButton === "inactive" ? "active" : ""}
          label="Inactive"
          clickHandler={inactiveHandler}
        />
      </div>
    </header>
  );
}

export default FilterBar;
