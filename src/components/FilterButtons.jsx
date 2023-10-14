
import {
    FaSlidersH,
    FaSortDown,
  } from "react-icons/fa";

export default function FilterButtons () {

    return (
        <>
        <div className="filter-buttons">
            <button className="sort-button">Sort by <FaSortDown/></button>
            <button className="filter-button"><FaSlidersH/> Filter</button>
        </div>
        </>
    );
}