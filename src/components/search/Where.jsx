import { useContext, useState } from "react";
import WorldMap from "../WorldMap";
import SearchContext from "../../context/SearchContext";

export default function Where({ handleClick }) {
  const { search, setSearch } = useContext(SearchContext);
  const [input, setInput] = useState("");
  const [activeDestination, setActiveDestination] = useState("");
  const [resetMapSelection, setResetMapSelection] = useState(false);

  function handleChange(event) {
    const inputValue = event.target.value;
    setInput(inputValue);
    setSearch({ ...search, where: inputValue });
    setActiveDestination("");
    setResetMapSelection(true);
  }
  function handleDestinationClick(event) {
    const clickedDestination = event.target.textContent;
    setActiveDestination(clickedDestination);
    setInput(clickedDestination);
    setSearch({ ...search, where: clickedDestination });
    setResetMapSelection(true);
  }

  const popularDestinations = [
    "Berlin",
    "Paris",
    "Brazil",
    "Stockholm",
    "Tokyo",
    "New York",
    "Thailand",
    "Mexico",
    "Australia",
    "London",
    "Copenhagen",
    "Singapore",
  ];

  return (
    <div className="search-options-popup">
      <label htmlFor="search">Search</label>
      <input
        name="search"
        type="text"
        value={input}
        placeholder="Enter any country, hotel or destination..."
        onChange={(event) => handleChange(event)}
      ></input>
      <strong>Popular destinations</strong>
      <ul>
        {popularDestinations.map((destination) => (
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
