import { useState, useContext, useEffect, useRef } from "react";
import { FaLocationArrow, FaCalendarAlt, FaUser } from "react-icons/fa";
import SearchContext from "../../../context/SearchContext";
import Where from "./Where";
import When from "./When";
import Who from "./Who";

export default function SearchContextBtn({ type, error, setError }) {
  const { search } = useContext(SearchContext);
  const [icon, setIcon] = useState(null);
  const [btn, setBtn] = useState("");
  const modalRef = useRef(null);
  const [modal, setModal] = useState(null);
  const { totalAdults, totalChildren, totalPets } = getTotalGuests();

  useEffect(() => {
    error && setModal(<Where handleClick={() => setModal(null)} />);

    return () => {
      setModal(null);
    };
  }, [error]);

  function handleModal(button) {
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
  useEffect(() => {
    // Set the button based on the type prop
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

  // Closes modal on click outside
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
          handleModal(type);
          window.scrollTo(0, 0);
        }}
      >
        {icon}
        <strong>{btn}</strong>
      </button>
      <div className="modal-container" ref={modalRef}>
        {modal}
      </div>
    </>
  );
}
