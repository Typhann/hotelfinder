import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import WorldMap from "./WorldMap";
import SearchContext from "../../../context/SearchContext";
import database from "../../../../database.json";

export default function Where({ handleClick }) {
  const { search, setSearch } = useContext(SearchContext);
  const [input, setInput] = useState("");
  const [activeDestination, setActiveDestination] = useState("");
  const [resetMapSelection, setResetMapSelection] = useState(false);
  const navigate = useNavigate();

  // Sets search input to search context and resets active styling for popular destination and map
  function handleChange(event) {
    const inputValue = event.target.value;
    setInput(inputValue);
    setSearch({ ...search, where: inputValue });
    setActiveDestination("");
    setResetMapSelection(true);
  }

  // Allows user to search using enter keypress
  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      if (input.length > 1) {
        console.log("Enter key pressed");
        handleClick();
        navigate(`search/?q=${search.where}`);
      }
    }
  };

  // Sets clicked popular destination to search context and search input field and resets active styling for map
  function handleDestinationClick(event) {
    const clickedDestination = event.target.textContent;
    setActiveDestination(clickedDestination);
    setInput(clickedDestination);
    setSearch({ ...search, where: clickedDestination });
    setResetMapSelection(true);
  }

  return (
    <div className="search-options-popup">
      <label htmlFor="search">Search</label>
      <input
        name="search"
        type="text"
        autoFocus
        value={input}
        placeholder="Enter any country, hotel or destination..."
        onChange={(event) => handleChange(event)}
        onKeyDown={handleOnKeyDown}
      ></input>
      <strong>Popular destinations</strong>
      {/* Renders popular destination */}
      <ul>
        {database.popularDestinations.map((destination) => (
          <li
            key={destination}
            onClick={handleDestinationClick}
            className={activeDestination === destination ? "active" : ""}
          >
            {destination}
          </li>
        ))}
      </ul>
      <WorldMap
        setActiveDestination={setActiveDestination}
        setInput={setInput}
        resetMapSelection={resetMapSelection}
        setResetMapSelection={setResetMapSelection}
      />
      <button className="button" onClick={handleClick}>
        Done
      </button>
    </div>
  );
}
