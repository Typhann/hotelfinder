import database from "./database.json";
import HotelCard from "./src/components/HotelCard";
import {
  FaLeaf,
  FaBookOpen,
  FaThumbsUp,
  FaBabyCarriage,
  FaHamburger,
  FaWifi,
  FaUmbrellaBeach,
} from "react-icons/fa";

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
            amenities={hotel.amenities}
          />
        ))}
      </div>
    </section>
  );
}

// switch for the Hotel and resturant amenities icons
export function renderAmenityIcon(amenity) {
  switch (amenity) {
    case "Family friendly":
      return <FaBabyCarriage />;
    case "Food Included":
      return <FaHamburger />;
    case "WiFi":
      return <FaWifi />;
    case "Beach":
      return <FaUmbrellaBeach />;
    case "Vegan options":
      return <FaLeaf />;
    case "A la carte":
      return <FaBookOpen />;
    case "Allergy-friendly":
      return <FaThumbsUp />;

    default:
      console.log("no icon found");
  }
}

// Loop for all the Hotel and resturant amenities icons
// with the purpose of showing icons for all amenities
export function renderAmenities(amenities) {
  return (
    <div className="amenities">
      {amenities.map((amenity) => (
        <div key={amenity}>
          {renderAmenityIcon(amenity)}
          {console.log(amenity)}
          <p>{amenity}</p>
        </div>
      ))}
    </div>
  );
}
