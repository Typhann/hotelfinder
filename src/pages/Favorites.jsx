import HotelCard from "../components/HotelCard";
import Filter from "../components/Filter";
import database from "../../database.json";
import { FaShareAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Favorite() {
  // show first 8 objects in JSON to visualize favorite items
  const showHotels = [...database.hotels].slice(0, 8);

  return (
    <>
      <motion.div
        className="fade-in"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <section className="favorite-section">
          <div className="share-favorites">
            <h1>My Favorites</h1>
            <div className="share-list">
              <FaShareAlt />
              <p>share list</p>
            </div>
          </div>

          <div className="filter-buttons">
            <Filter />
          </div>

          <div className={`hotels-container grid`}>
            {showHotels.map((hotel) => (
              <HotelCard
                key={hotel.id}
                name={hotel.name}
                address={hotel.address}
                price={hotel.price_per_night}
                id={hotel.id}
              />
            ))}
          </div>
        </section>
      </motion.div>
    </>
  );
}
