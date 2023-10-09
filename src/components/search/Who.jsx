import { useState, useContext, useEffect } from "react";
import SearchContext from "../../context/SearchContext";

// Creates a room
const Room = ({ number }) => {
  const { search } = useContext(SearchContext);
  const room = search.rooms[number - 1] || {};

  return (
    <>
      <strong>Room {number}</strong>
      <div className="room-options-container">
        <Counter label="Adults" room={room} roomIndex={number - 1} />
        <Counter label="Children" room={room} roomIndex={number - 1} />
        <Counter label="Pets" room={room} roomIndex={number - 1} />
      </div>
    </>
  );
};

// maximum allowed guests per room is 10, roomIndex keeps track of which room
const Counter = ({ label, room, roomIndex }) => {
  const { search, setSearch } = useContext(SearchContext);
  // Keeps track of counters value, uses value from search context if it exists
  const [value, setValue] = useState(room[label.toLowerCase()] || 0);

  // decreases counters value
  function decrease() {
    if (value >= 1 && value <= 10) {
      setValue((prevVal) => prevVal - 1);
    }
  }

  // increases counters value
  function increase() {
    if (value >= 0 && value <= 9) {
      setValue((prevVal) => prevVal + 1);
    }
  }

  // Sets updated rooms value to search context
  useEffect(() => {
    // creates a copy of the search context rooms array
    const updatedRooms = [...search.rooms];
    // updates the current rooms labels value to the value of the counter
    // the label in this case can either be Adults, Children or Pets depending on which is clicked.
    updatedRooms[roomIndex] = {
      ...updatedRooms[roomIndex],
      [label.toLowerCase()]: value,
    };

    setSearch({
      ...search,
      rooms: updatedRooms,
    });
  }, [value]);

  return (
    <div className="counter-container">
      <p>{label}</p>
      <div className="counter">
        <div style={{ cursor: "pointer" }} onClick={decrease}>
          -
        </div>
        <p>{value}</p>
        <div style={{ cursor: "pointer" }} onClick={increase}>
          +
        </div>
      </div>
    </div>
  );
};
export default function Who({ handleClick }) {
  const { search, setSearch } = useContext(SearchContext);
  const { rooms } = search;

  // Keeps tracks of amount of rooms
  const [roomCount, setRoomCount] = useState(rooms.length || 1);

  // removes the last added room from search context
  function removeRoom() {
    if (roomCount > 1) {
      const updatedRooms = rooms.slice(0, roomCount - 1); // Remove the last room
      // Update search rooms in search context
      setSearch({
        ...search,
        rooms: updatedRooms,
      });
      // Remove room from room tracker
      setRoomCount(roomCount - 1);
    }
  }

  return (
    <div className="search-options-popup">
      {/* Creates an array from roomCount and maps over the array and renders a Room component for each room */}
      {Array.from({ length: roomCount }, (_, index) => (
        <Room number={index + 1} key={index} />
      ))}
      <strong>
        {/* Adds a room to roomCount, maximum allowed amount of rooms is 5 */}
        <a
          style={
            roomCount === 5 ? { opacity: "50%", cursor: "not-allowed" } : {}
          }
          onClick={() =>
            roomCount < 5 && setRoomCount((prevRooms) => prevRooms + 1)
          }
        >
          Add room
        </a>
      </strong>
      {/* Removes the last added room */}
      {roomCount > 1 && (
        <strong>
          <a onClick={() => removeRoom()}>Remove room</a>
        </strong>
      )}
      <button onClick={handleClick} className="button">
        Done
      </button>
    </div>
  );
}
