import { Link } from "react-router-dom";
import { renderHotels } from "../../utils";
import database from "../../database.json";
import FilterButtons from "../components/FilterButtons";
import FilterSection from "../components/FilterSection";
{/*import Profile from "../components/Profile";*/}

export default function Home() {
  window.scrollTo(0, 0);
  return (
    <>
      <h2>Popular destinations</h2>
      <ul>
        {database.popularDestinations.map((destination) => (
          <li key={destination}>
            <Link to={`search/?q=${destination}`}>{destination}</Link>
          </li>
        ))}
      </ul>
        <FilterButtons />
        <FilterSection />
        {/*<Profile />*/}
      {renderHotels("Europe", "carousel")}
      {renderHotels("Africa", "carousel")}
      {renderHotels("USA", "carousel")}
      {renderHotels("South America", "carousel")}
      {renderHotels("Asia", "carousel")}
      {renderHotels("Australia", "carousel")}
    </>
  );
}
