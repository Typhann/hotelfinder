import { useState, useEffect, useRef, useContext } from "react";
import { FaLocationArrow, FaCalendarAlt, FaUser } from "react-icons/fa";
import When from "./When";
import Where from "./Where";
import Who from "./Who";
import SearchContext from "../../../context/SearchContext";
import { Link } from "react-router-dom";
import Toast from "../../Toast/Toast";
import SearchContextBtn from "./SearchContextBtn";

export default function Search() {
  const [error, setError] = useState(false);
  const { search } = useContext(SearchContext);

  function handleSearchClick() {
    if (search.where < 1) {
      setError(true);
    }
  }

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
      </div>
    </>
  );
}
