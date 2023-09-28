import { useState, useEffect, useRef, useContext } from "react";
import { FaLocationArrow, FaCalendarAlt, FaUser } from "react-icons/fa";
import When from "./When";
import Where from "./Where";
import Who from "./Who";
import SearchContext from "../../context/SearchContext";

export default function Search() {
  const [modal, setModal] = useState(null);
  const modalRef = useRef(null);
  const { search } = useContext(SearchContext);
  const { totalAdults, totalChildren, totalPets } = getTotalPeople();

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModal(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleClick(button) {
    switch (button) {
      case "where":
        setModal(<Where handleClick={() => setModal(null)} />);
        break;
      case "when":
        setModal(<When handleClick={() => setModal(null)} />);
        break;
      case "who":
        setModal(<Who handleClick={() => setModal(null)} />);
        break;
      default:
        setModal(null);
    }
  }

  function getTotalPeople() {
    let totalAdults = 0;
    let totalChildren = 0;
    let totalPets = 0;

    search.rooms.forEach((room) => {
      totalAdults += parseInt(room.adults) || 0;
      totalChildren += parseInt(room.children) || 0;
      totalPets += parseInt(room.pets) || 0;
    });

    console.log(totalAdults, totalChildren, totalPets);

    return {
      totalAdults,
      totalChildren,
      totalPets,
    };
  }

  return (
    <div className="search-container">
      <div className="search-options">
        <div onClick={() => handleClick("where")}>
          <FaLocationArrow />
          <strong>{search.where.length ? search.where : "Where"}</strong>
        </div>
        <div onClick={() => handleClick("when")}>
          <FaCalendarAlt />
          <strong>{search.when ? search.when : "When"}</strong>
        </div>
        <div onClick={() => handleClick("who")}>
          <FaUser />
          <strong>
            {totalAdults || totalChildren || totalPets >= 1
              ? `${totalAdults + totalChildren + totalPets}`
              : "Who"}
          </strong>
        </div>
      </div>
      <button className="button">Search</button>

      <div className="modal-container" ref={modalRef}>
        {modal}
      </div>
    </div>
  );
}
