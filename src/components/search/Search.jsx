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
        setModal(<When />);
        break;
      case "who":
        setModal(<Who />);
        break;
    }
  }

  return (
    <div className="search-container">
      <div className="search-options">
        <div>
          <FaLocationArrow />{" "}
          <strong onClick={() => handleClick("where")}>
            {search.where.length ? search.where : "Where"}
          </strong>
        </div>
        <div>
          <FaCalendarAlt />{" "}
          <strong onClick={() => handleClick("when")}>
            {search.when ? search.when : "When"}
          </strong>
        </div>
        <div>
          <FaUser />
          <strong onClick={() => handleClick("who")}>
            {search.who ? search.who : "Who"}
          </strong>
        </div>
      </div>
      <button>Search</button>

      <div className="modal-container" ref={modalRef}>
        {modal}
      </div>
    </div>
  );
}
