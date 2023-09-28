import { useState, useContext, useEffect } from "react";
import SearchContext from "../../context/SearchContext";

const Room = ({ number }) => {
  const { search, setSearch } = useContext(SearchContext);
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

const Counter = ({ label, room, roomIndex }) => {
  const { search, setSearch } = useContext(SearchContext);
  const [value, setValue] = useState(room[label.toLowerCase()] || 0);

  function decrease() {
    if (value >= 1 && value <= 10) {
      setValue((prevVal) => prevVal - 1);
    }
  }

  function increase() {
    if (value >= 0 && value <= 9) {
      setValue((prevVal) => prevVal + 1);
    }
  }

  useEffect(() => {
    const updatedRooms = [...search.rooms];
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
      <strong>{label}</strong>
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
export default function Who() {
  const { search, setSearch } = useContext(SearchContext);
  const { rooms } = search;

  const [roomCount, setRoomCount] = useState(rooms.length || 1);

  function removeRoom() {
    if (roomCount > 1) {
      const updatedRooms = rooms.slice(0, roomCount - 1); // Remove the last room
      setSearch({
        ...search,
        rooms: updatedRooms,
      });
      setRoomCount(roomCount - 1);
    }
  }

  return (
    <div className="search-options-popup">
      {Array.from({ length: roomCount }, (_, index) => (
        <Room number={index + 1} key={index} />
      ))}
      <strong>
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
      {roomCount > 1 && (
        <strong>
          <a onClick={() => removeRoom()}>Remove room</a>
        </strong>
      )}
    </div>
  );
}
