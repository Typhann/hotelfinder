import { useState, useContext } from "react";
import SearchContext from "../context/SearchContext";

export const Counter = ({ room, roomPrice }) => {
  const { search, setSearch } = useContext(SearchContext);
  const [value, setValue] = useState(0);

  function decrease() {
    if (value >= 1 && value <= 5) {
      setValue((prevVal) => prevVal - 1);
      const roomIndex = search.reservedRooms.indexOf(room);
      if (roomIndex !== -1) {
        const updatedReservedRooms = [...search.reservedRooms];
        updatedReservedRooms.splice(roomIndex, 1);

        setSearch({
          ...search,
          reservedRooms: updatedReservedRooms,
          totalPrice: search.totalPrice - roomPrice,
        });
      }
    }
  }

  function increase() {
    if (value >= 0 && value <= 4) {
      setValue((prevVal) => prevVal + 1);
      const updatedReservedRooms = [...search.reservedRooms, room];
      setSearch({
        ...search,
        reservedRooms: updatedReservedRooms,
        totalPrice: search.totalPrice + roomPrice,
      });
    }
  }

  return (
    <div className="counter-container">
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

export default function ReservationForm() {
  const { search, setSearch } = useContext(SearchContext);
  const priceKingRoom = 429;
  const priceQueenRoom = 299;
  const priceSingleRoom = 149;
  const priceFamilyRoom = 499;

  console.log(search.reservedRooms);

  console.log(search.roomsNextToEachOther);

  return (
    <form className="reservation-form-container">
      <table>
        <thead>
          <tr className="divider">
            <th>Room</th>
            <th>People</th>
            <th>Price</th>
            <th className="right-column">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>King Room</td>
            <td>Sleeps 2</td>
            <td>${priceKingRoom}</td>
            <td className="right-column">
              <Counter room="King Room" roomPrice={priceKingRoom} />
            </td>
          </tr>
          <tr>
            <td>Queen Room</td>
            <td>Sleeps 2</td>
            <td>${priceQueenRoom}</td>
            <td className="right-column">
              <Counter room="Queen Room" roomPrice={priceQueenRoom} />
            </td>
          </tr>
          <tr>
            <td>Single Room</td>
            <td>Sleeps 1</td>
            <td>${priceSingleRoom}</td>
            <td className="right-column">
              <Counter room="Single Room" roomPrice={priceSingleRoom} />
            </td>
          </tr>
          <tr className="divider">
            <td>Family Room</td>
            <td>Sleeps 6</td>
            <td>${priceFamilyRoom}</td>
            <td className="right-column">
              <Counter room="Family Room" roomPrice={priceFamilyRoom} />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="checkbox-price">
        <label>
          Request rooms next to each other
          <input
            // Flips the true and false in context when checkbox is clicked
            onClick={() => {
              setSearch((prevSearch) => ({
                ...prevSearch,
                roomsNextToEachOther: !prevSearch.roomsNextToEachOther,
              }));
            }}
            type="checkbox"
          />
        </label>
        <strong>Total: ${search.totalPrice}</strong>
      </div>
      <div className="make-reservation">
        <small>All reservations come with a 24-hour free-cancellation.</small>
        <button className="button">Reserve</button>
      </div>
    </form>
  );
}
