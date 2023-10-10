import { useParams } from "react-router-dom";
import database from "../../database.json";
import {
  FaStar,
  FaRegStar,
  FaShareAlt,
  FaHeart,
  FaRegHeart,
  FaWifi,
  FaSwimmingPool,
  FaBabyCarriage,
  FaSkiing,
  FaHotTub,
  FaWater,
  FaHorse,
  FaCity,
  FaHiking,
  FaUmbrellaBeach,
  FaGlassMartiniAlt,
  FaPizzaSlice,
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
import ReservationForm from "../components/ReservationForm";

export default function Hotel() {
  const { id } = useParams();
  const hotel = database.hotels[id - 1];
  console.log(id);
  console.log(hotel);

  // Loop for the hotels reviews
  const reviews = hotel.reviews;
  const reviewsList = reviews.map((review, index) => (
  <p key={index}>{review}</p>
));

  return (
    <>
      <a href="javascript:history.back()">&lt;&lt; Go back</a>
      <div className="hotel-header">
        <div className="name-rating">
          <h1>{hotel.name}</h1>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <div className="share-heart">
          <FaShareAlt />
          <FaRegHeart />
        </div>
      </div>
      <p>{hotel.address}</p>
      <div className="image-container carousel">
        <img src={hotelImage1} alt="Image of hotel" />
        <img src={hotelImage2} alt="Image of hotel" />
        <img src={hotelImage3} alt="Image of hotel" />
        <img src={hotelImage4} alt="Image of hotel" />
        <img src={hotelImage5} alt="Image of hotel" />
        <img src={hotelImage6} alt="Image of hotel" />
        <img src={hotelImage7} alt="Image of hotel" />
        <img src={hotelImage8} alt="Image of hotel" />
        <img src={hotelImage9} alt="Image of hotel" />
        <img src={hotelImage10} alt="Image of hotel" />
      </div>
      <section className="hotel-section-container">
        <div className="hotel-section">
          <h2>{hotel.title}</h2>
          <p>{hotel.description}</p>

          <h3>We offer</h3>
          <p>{hotel.amenities}</p>

          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13826.255625836358!2d-87.0482837115719!3d20.657553864612346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e5d1373869c1f%3A0x73c6152510886982!2sSandos%20Caracol%20Eco%20Resort!5e0!3m2!1ssv!2ses!4v1696259424496!5m2!1ssv!2ses"
              style={{ border: "none" }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>

          <section className="review-section">
            <h3>Our reviews</h3>
            <div className="review_ratings">
            <p>{hotel.review_ratings}/10 (based on {hotel.review_amounts} reviews)</p>
          </div>
            <div className="review-list">{reviewsList}</div>
          </section>  
          
        </div>
        <ReservationForm className="hotel-section" />
      </section>
    </>
  );
}
