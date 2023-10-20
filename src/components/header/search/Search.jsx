import { useState, useEffect, useRef, useContext } from "react";
import When from "./When";
import Where from "./Where";
import Who from "./Who";
import SearchContext from "../../../context/SearchContext";
import { Link } from "react-router-dom";
import Toast from "../../Toast/Toast";
import SearchContextBtn from "./SearchContextBtn";

export default function Search() {
  const [error, setError] = useState(false);
  const { search, setSearch } = useContext(SearchContext);
  const [modal, setModal] = useState(null);
  const modalRef = useRef(null);

  function handleSearchClick() {
    if (search.where < 1) {
      setError(true);
      setModal(<Where handleClick={() => setModal(null)} />);
    }
  }

  // if modal is set in context set the corresponding component to the modal
  useEffect(() => {
    if (search.displayModal) {
      switch (search.displayModal[0]) {
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
  }, [search.displayModal]);

  // closes modal on click outside
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
  return (
    <>
      <div className="search-container">
        <div className="search-options">
          <SearchContextBtn error={error} type="where" />
          <SearchContextBtn type="when" />
          <SearchContextBtn type="who" />
        </div>
        <Link
          to={search.where ? `search/?q=${search.where}` : "#"}
          className="button"
          onClick={handleSearchClick}
        >
          Search
        </Link>
        {error && (
          <Toast message="You must enter where first!" type="warning" />
        )}
        <div className="modal-container" ref={modalRef}>
          {modal}
        </div>
      </div>
    </>
  );
}
