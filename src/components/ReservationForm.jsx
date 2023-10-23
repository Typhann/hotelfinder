import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SearchContext from "../context/SearchContext";
import SearchContextBtn from "./header/search/SearchContextBtn";
import Toast from "../components/Toast/Toast";

export const Counter = ({ room, roomPrice, setError }) => {
  const { search, setSearch } = useContext(SearchContext);
  const [value, setValue] = useState(0);

  // decreases counter value, removes room from context and subtracts the rooms price from the totalprice in context.
  function decrease() {
    if (value >= 1 && value <= 5) {
      setValue((prevVal) => prevVal - 1);
      // finds the index of the room in the array in context
      const roomIndex = search.reservedRooms.indexOf(room);
      if (roomIndex !== -1) {
        // creates a copy of the array
        const updatedReservedRooms = [...search.reservedRooms];
        // removes the room from the array
        updatedReservedRooms.splice(roomIndex, 1);

        // updates context
        setSearch({
          ...search,
          reservedRooms: updatedReservedRooms,
          totalPrice: search.totalPrice - roomPrice,
        });
      }
    }
  }

  // increases counter value, adds room to context and calculates total price using previous price in context + the room price
  function increase() {
    if (value >= 0 && value <= 4) {
      setValue((prevVal) => prevVal + 1);
      // adds the current room to copied array from context
      const updatedReservedRooms = [...search.reservedRooms, room];
      // updates context
      setSearch({
        ...search,
        reservedRooms: updatedReservedRooms,
        totalPrice: search.totalPrice + roomPrice,
      });
      setError(false);
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
  const navigate = useNavigate();
  const { id } = useParams();
  const [error, setError] = useState({ when: false, who: false });

  // clears the context on mount
  useEffect(() => {
    setSearch({
      ...search,
      reservedRooms: [],
      totalPrice: 0,
    });
  }, []);

  const priceKingRoom = 429;
  const priceQueenRoom = 299;
  const priceSingleRoom = 149;
  const priceFamilyRoom = 499;

  // checks that user has filled in all necessary information to continue process, if not then display correct error and feedback
  function handleClick() {
    if (search.when.length < 1) {
      setError({ ...error, when: true, who: false, room: false });
      setSearch({ ...search, displayModal: ["when"] });
    } else if (search.reservedRooms.length < 1) {
      setError({ ...error, when: false, who: false, room: true });
    } else {
      navigate(`/checkout/hotel/${id}`);
    }
  }

  return (
    <>
      <div className="reservation-form-container">
        <div className="buttons">
          <SearchContextBtn type="when" />
        </div>
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
                <Counter
                  setError={setError}
                  room="King Room"
                  roomPrice={priceKingRoom}
                />
              </td>
            </tr>
            <tr>
              <td>Queen Room</td>
              <td>Sleeps 2</td>
              <td>${priceQueenRoom}</td>
              <td className="right-column">
                <Counter
                  setError={setError}
                  room="Queen Room"
                  roomPrice={priceQueenRoom}
                />
              </td>
            </tr>
            <tr>
              <td>Single Room</td>
              <td>Sleeps 1</td>
              <td>${priceSingleRoom}</td>
              <td className="right-column">
                <Counter
                  setError={setError}
                  room="Single Room"
                  roomPrice={priceSingleRoom}
                />
              </td>
            </tr>
            <tr className="divider">
              <td>Family Room</td>
              <td>Sleeps 6</td>
              <td>${priceFamilyRoom}</td>
              <td className="right-column">
                <Counter
                  setError={setError}
                  room="Family Room"
                  roomPrice={priceFamilyRoom}
                />
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
          {error.room ? (
            <h3>You must choose a room first!</h3>
          ) : (
            <small>
              All reservations come with a 24-hour free-cancellation.
            </small>
          )}
          <button
            // navigates user to checkout only if user has selected a room
            onClick={handleClick}
            className="button"
          >
            Reserve
          </button>
        </div>
        {error.when && (
          <Toast message="You must enter when first!" type="warning" />
        )}
      </div>
    </>
  );
}
