import { useState, useEffect, useRef, useContext } from "react";
import { FaLocationArrow, FaCalendarAlt, FaUser } from "react-icons/fa";
import When from "./When";
import Where from "./Where";
import Who from "./Who";
import SearchContext from "../../context/SearchContext";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function Search() {
  const [modal, setModal] = useState(null);
  const modalRef = useRef(null);
  const { search } = useContext(SearchContext);
  const { totalAdults, totalChildren, totalPets } = getTotalGuests();

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

  function handleSearchClick() {
    if (search.where < 1) {
      alert("you have to enter a search first");
      handleClick("where");
    }
  }

  return (
    <>
      <ToastContainer />
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
        <Link
          to={search.where ? `search/?q=${search.where}` : "#"}
          className="button"
          onClick={handleSearchClick}
        >
          Search
        </Link>

        <div className="modal-container" ref={modalRef}>
          {modal}
        </div>
      </div>
    </>
  );
}
