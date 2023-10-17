import HotelCard from "../components/HotelCard";
import Filter from "../components/Filter";
import database from "../../database.json";

export default function Favorite() {
  return (
    <>
      {/* <Filter /> */}
      <section>
        <h1>Favorite page</h1>
        <div className={`hotels-container grid`}>
          <HotelCard
            key={database.hotels[1].id}
            name={database.hotels[1].name}
            address={database.hotels[1].address}
            price={database.hotels[1].price_per_night}
            id={database.hotels[1].id}
          />
        </div>
      </section>
    </>
  );
}
