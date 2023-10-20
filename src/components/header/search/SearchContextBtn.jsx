import { useState, useContext, useEffect } from "react";
import { FaLocationArrow, FaCalendarAlt, FaUser } from "react-icons/fa";
import SearchContext from "../../../context/SearchContext";

export default function SearchContextBtn({ type }) {
  const { search, setSearch } = useContext(SearchContext);
  const [icon, setIcon] = useState(null);
  const [btn, setBtn] = useState("");
  const { totalAdults, totalChildren, totalPets } = getTotalGuests();

  // Set the button based on the type prop
  useEffect(() => {
    switch (type) {
      case "where":
        setIcon(<FaLocationArrow />);
        setBtn(search.where.length ? search.where : "Where");
        break;
      case "when":
        setIcon(<FaCalendarAlt />);
        setBtn(search.when ? search.when : "When");
        break;
      case "who":
        setIcon(<FaUser />);
        setBtn(
          totalAdults || totalChildren || totalPets >= 1
            ? `${totalAdults + totalChildren + totalPets}`
            : "Who"
        );
        break;
      default:
        setIcon(null);
    }
  }, [type, search]);

  // calculates total guests from all added rooms in search context
  function getTotalGuests() {
    let totalAdults = 0;
    let totalChildren = 0;
    let totalPets = 0;

    search.rooms.forEach((room) => {
      totalAdults += parseInt(room.adults) || 0;
      totalChildren += parseInt(room.children) || 0;
      totalPets += parseInt(room.pets) || 0;
    });

    return {
      totalAdults,
      totalChildren,
      totalPets,
    };
  }

  return (
    <>
      <button
        className="button"
        onClick={() => {
          // set modal to the buttons type in context
          setSearch({ ...search, displayModal: [type] });
        }}
      >
        {icon}
        <strong>{btn}</strong>
      </button>
    </>
  );
}
