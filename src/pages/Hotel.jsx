import { useParams } from "react-router-dom";
import database from "../../database.json";
import { FaStar, FaRegStar, FaShareAlt, FaRegHeart } from "react-icons/fa";

// create fades during load
import { motion } from "framer-motion";

// images for hotels
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
import BackButton from "../components/BackButton";
import { renderAmenities } from "../../utils";

export default function Hotel() {
  const { id } = useParams();
  const hotel = database.hotels[id - 1];

  // scrolls user to top 
  window.scrollTo(0, 0);

  // Loop for the hotels reviews
  const reviews = hotel.reviews;
  const reviewsList = reviews.map((review, index) => (
    <div key={index}>
      <p className="review-text">&quot;{review}&quot;</p>
      <p className="review-rates">
      {Array.from({ length: 5 }, (_, index) => (
          <span key={index}>
              {index < hotel.review_ratings ? <FaStar /> : <FaRegStar />}
          </span>
        ))}
      </p>
    </div>
  ));

  return (
    <>
    {/* motion.div create animation for nicer loading */}
      <motion.div
        className="fade-in"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <BackButton />
        <div className="hotel-header">
          <div className="name-rating">
            <h1>{hotel.name}</h1>
            {/* Creates and maps over an array of five and returns filled stars for the hotels rating and empty stars for the remainder to five */}
            {Array.from({ length: 5 }, (_, index) => (
              <span key={index}>
                {index < hotel.review_ratings ? <FaStar /> : <FaRegStar />}
              </span>
            ))}
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

            <div>
              <h3>Hotel</h3>
              <p>{hotel.description}</p>
              {/* Hotel amantites and icons from utils.jsx */}
              {renderAmenities(hotel.amenities)}
            </div>

            <div className="restaurant">
              <h3>Restaurant</h3>
              <p>{hotel.restaurant_description}</p>
              {/* Restaurant amantites and icons from utils.jsx */}
              <div>{renderAmenities(hotel.restaurant_amenities)}</div>
            </div>

            <div>
              <h3>Location</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13826.255625836358!2d-87.0482837115719!3d20.657553864612346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e5d1373869c1f%3A0x73c6152510886982!2sSandos%20Caracol%20Eco%20Resort!5e0!3m2!1ssv!2ses!4v1696259424496!5m2!1ssv!2ses"
                style={{ border: "none", height: "250px" }}
                allowFullScreen=""
                loading="lazy"
                width="100%"
                height="200%"
              ></iframe>
            </div>

            <div className="review_ratings">
              <h3>Reviews</h3>
              <p style={{ fontWeight: "bold" }}>
                {/* simulates statistic for reviews from database.json */}
                {hotel.review_ratings}/5 (based on {hotel.review_amounts}{" "}
                reviews)
              </p>
              <div className="review-list">{reviewsList}
              </div>
            </div>
          </div>
          {/* booking */}
          <ReservationForm className="hotel-section" />
        </section>
      </motion.div>
    </>
  );
}
