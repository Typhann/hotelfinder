import { Link } from "react-router-dom";
import { renderHotels } from "../../utils";
import database from "../../database.json";
import Filter from "../components/Filter";
import { motion } from "framer-motion";

export default function Home() {
  // scrolls user to top
  window.scrollTo(0, 0);
  return (
    <>
      {/* motion.div create animation for nicer loading */}
      <motion.div
        className="fade-in"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <h2 id="popular-destinations">Popular destinations</h2>
        <ul>
          {database.popularDestinations.map((destination) => (
            <li key={destination}>
              <Link to={`search/?q=${destination}`}>{destination}</Link>
            </li>
          ))}
        </ul>
        <Filter />

        {renderHotels("Europe", "carousel")}
        {renderHotels("Africa", "carousel")}
        {renderHotels("USA", "carousel")}
        {renderHotels("South America", "carousel")}
        {renderHotels("Asia", "carousel")}
        {renderHotels("Australia", "carousel")}
      </motion.div>
    </>
  );
}
