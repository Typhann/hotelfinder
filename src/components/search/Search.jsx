import { FaLocationArrow, FaCalendarAlt, FaUser } from "react-icons/fa";

export default function Search() {
  return (
    <div className="search-container">
      <p>
        <FaLocationArrow /> <strong>Where</strong>
      </p>
      <p>
        <FaCalendarAlt /> <strong>When</strong>
      </p>
      <p>
        <FaUser />
        <strong>Who</strong>
      </p>
    </div>
  );
}
