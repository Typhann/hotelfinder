import database from "./database.json";
import HotelCard from "./src/components/HotelCard";

// Function to shuffle an array from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export function renderHotels(category, display) {
  const shuffledHotels = [...database.hotels];
  shuffleArray(shuffledHotels);

  return (
    <section>
      <div className="space-between">
        <h2>Explore {category}</h2>
      </div>
      <div className={`hotels-container ${display}`}>
        {shuffledHotels.map((hotel) => (
          <HotelCard
            key={hotel.id}
            name={hotel.name}
            address={hotel.address}
            price={hotel.price_per_night}
            id={hotel.id}
            rating={hotel.rating}
          />
        ))}
      </div>
    </section>
  );
}
