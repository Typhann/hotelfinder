import { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import database from "../../../database.json";
import { FaStar, FaRegStar } from "react-icons/fa";
import { renderAmenities } from "../../../utils";
import SearchContext from "../../context/SearchContext";

export default function Selection() {
  const { id } = useParams();
  const hotel = database.hotels[id - 1];
  const { search } = useContext(SearchContext);

  // Count the number of each type of room in context
  const roomCounts = {};
  search.reservedRooms.forEach((room) => {
    roomCounts[room] = (roomCounts[room] || 0) + 1;
  });

  // Create elements to display room counts
  const roomElements = [];
  for (const room in roomCounts) {
    const count = roomCounts[room];
    const roomText = count > 1 ? `${count} x ${room}` : `1 x ${room}`;
    roomElements.push(<p key={room}>{roomText}</p>);
  }

  return (
    <section className="selection-section">
      <h3>Selection</h3>
      <div className="row">
        <strong>{hotel.name}</strong>
        {/* Creates and maps over an array of five and returns filled stars for the hotels rating and empty stars for the remainder to five */}
        <div>
          {Array.from({ length: 5 }, (_, index) => (
            <span key={index}>
              {index < hotel.rating ? <FaStar /> : <FaRegStar />}
            </span>
          ))}
        </div>
      </div>
      <p>{hotel.address}.</p>
      {renderAmenities(hotel.amenities)}
      <div className="dates-container">
        <div className="dates">
          <p>Check-in</p>
          <strong>{search.when.slice(0, 5)}</strong>
        </div>
        <div className="dates">
          <p>Check-out</p>
          <strong>{search.when.slice(8, 13)}</strong>
        </div>
      </div>

      <div className="selected-rooms">{roomElements}</div>
      <div className="row">
        <strong>Total price of ${search.totalPrice}</strong>
      </div>
      <Link to="/">Change selection</Link>
    </section>
  );
}
