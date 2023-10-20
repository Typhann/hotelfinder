import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaStar,
  FaRegStar,
  FaShareAlt,
  FaHeart,
  FaRegHeart,
  FaUmbrellaBeach,
  FaSwimmer,
  FaWifi,
} from "react-icons/fa";
import hotelImage1 from "../assets/hotel-images/hotel-placeholder-1-min.webp";
import hotelImage2 from "../assets/hotel-images/hotel-placeholder-2-min.webp";
import hotelImage3 from "../assets/hotel-images/hotel-placeholder-3-min.webp";
import hotelImage4 from "../assets/hotel-images/hotel-placeholder-4-min.webp";
import hotelImage5 from "../assets/hotel-images/hotel-placeholder-5-min.webp";
import hotelImage6 from "../assets/hotel-images/hotel-placeholder-6-min.webp";
import hotelImage7 from "../assets/hotel-images/hotel-placeholder-7-min.webp";
import hotelImage8 from "../assets/hotel-images/hotel-placeholder-8-min.webp";
import hotelImage9 from "../assets/hotel-images/hotel-placeholder-9-min.webp";
import hotelImage10 from "../assets/hotel-images/hotel-placeholder-10-min.webp";

export default function HotelCard(props) {
  const navigate = useNavigate();
  const [favorite, setFavorite] = useState(false);
  const hotelImages = [
    hotelImage1,
    hotelImage2,
    hotelImage3,
    hotelImage4,
    hotelImage5,
    hotelImage6,
    hotelImage7,
    hotelImage8,
    hotelImage9,
    hotelImage10,
  ];

  // When card is clicked the user is navigated to the hotel page with the id of the clicked card
  function handleClick() {
    navigate(`/hotel/${props.id}`);
  }

  // toggles hearts favorite state
  function toggle(event) {
    event.stopPropagation(); // this is used to stop the cards handleClick function to run
    setFavorite((prev) => !prev);
    console.log(favorite);
  }

  const hotelImage = hotelImages[props.id - 1];
  return (
    <div onClick={handleClick} className="card-container">
      <img
        src={hotelImage}
        width="275px"
        height="175px"
        alt={props.name}
        loading="lazy"
      />
      <div className="star-container">
        {/* creates an array for the stars and generates a filled star for each rating and unfilled stars for the remainder to five */}
        {Array.from({ length: 5 }, (_, index) => (
          <span key={index}>
            {index < props.rating ? <FaStar /> : <FaRegStar />}
          </span>
        ))}
      </div>
      <h3>{props.name}</h3>
      <div className="card-info">
        <p>{props.address}</p>
        <h3>
          <strong>${props.price}</strong>
        </h3>
      </div>
      <div className="tags-container">
        <div className="tag">
          <FaUmbrellaBeach />
          <small>Nearby beach</small>
        </div>
        <div className="tag">
          <FaSwimmer />
          <small>Pool</small>
        </div>
        <div className="tag">
          <FaWifi />
          <small>Wifi</small>
        </div>
      </div>
      <div className="card-bottom">
        <a href="#">Map</a>
        <div className="share-heart">
          <FaShareAlt />
          {favorite ? (
            <FaHeart className="filled" onClick={toggle} />
          ) : (
            <FaRegHeart onClick={toggle} />
          )}
        </div>
      </div>
    </div>
  );
}
