import WorldMap from "../WorldMap";

export default function Where({ handleClick }) {
  return (
    <div className="search-options-popup">
      <label htmlFor="search">Search</label>
      <input
        name="search"
        type="text"
        placeholder="Enter any country, hotel or destination..."
      ></input>
      <strong>Popular destinations</strong>
      <ul>
        <li>
          <a>Berlin</a>
        </li>
        <li>
          <a>Paris</a>
        </li>
        <li>
          <a>Brazil</a>
        </li>
        <li>
          <a>Stockholm</a>
        </li>
        <li>
          <a>Tokyo</a>
        </li>
        <li>
          <a>New York</a>
        </li>
        <li>
          <a>Thailand</a>
        </li>
        <li>
          <a>Mexico</a>
        </li>
        <li>
          <a>Australia</a>
        </li>
        <li>
          <a>London</a>
        </li>
        <li>
          <a>Copenhagen</a>
        </li>
        <li>
          <a>Singapore</a>
        </li>
      </ul>
      <WorldMap />
      <button onClick={handleClick}>Done</button>
    </div>
  );
}
