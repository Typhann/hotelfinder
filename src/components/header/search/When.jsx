import { DateCalendar } from "@mui/x-date-pickers";
import { useState, useContext, useEffect } from "react";
import SearchContext from "../../../context/SearchContext";

export default function When({ handleClick }) {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const { search, setSearch } = useContext(SearchContext);

  // Sets search context to input from calendar
  useEffect(() => {
    if (checkIn && checkOut) {
      setSearch({
        ...search,
        when: `${checkIn.$D}/${checkIn.$M + 1} - ${checkOut.$D}/${
          checkOut.$M + 1
        }`,
      });
    }
  }, [checkIn, checkOut, search, setSearch]);

  return (
    <div className="search-options-popup">
      <div className="calendar-container">
        <div className="calendar">
          <strong>
            Check in
            {checkIn && `: ${checkIn.$D}/${checkIn && checkIn.$M + 1}`}
          </strong>
          <DateCalendar
            value={checkIn}
            onChange={(newValue) => setCheckIn(newValue)}
          />
        </div>
        <div className="calendar">
          <strong>
            Check out
            {checkOut && `: ${checkOut.$D}/${checkOut && checkOut.$M + 1}`}{" "}
          </strong>
          <DateCalendar
            value={checkOut}
            onChange={(newValue) => setCheckOut(newValue)}
          />
        </div>
      </div>
      <button className="button" onClick={handleClick}>
        Done
      </button>
    </div>
  );
}
