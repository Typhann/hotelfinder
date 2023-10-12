import { useParams, Link } from "react-router-dom";
import database from "../../../database.json";
import { FaStar } from "react-icons/fa";

export default function Selection() {
  const { id } = useParams();
  const hotel = database.hotels[id - 1];

  return (
    <section className="selection-section">
      <h3>Selection</h3>
      <div className="row">
        <strong>{hotel.name}</strong>
        <div className="star-container">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>
      <p>{hotel.address}.</p>
      <div className="tags-container">
        <p>Breakfast included</p>
        <p>Pool</p>
        <p>Child-friendly</p>
      </div>
      <div className="dates-container">
        <div className="dates">
          <p>Check-in</p>
          <strong>Wed, Nov 8</strong>
        </div>
        <div className="dates">
          <p>Check-out</p>
          <strong>Sun, Nov 12</strong>
        </div>
      </div>
      <p>1 x Family room</p>
      <p>1 x King room</p>
      <div className="row">
        <strong>Total of five guests</strong>
        <strong>Total price of $1008</strong>
      </div>
      <Link to="/">Change selection</Link>
    </section>
  );
}
