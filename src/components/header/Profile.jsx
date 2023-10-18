import { useState } from "react";
import database from "../../../database.json";
import { Link } from "react-router-dom";
import AuthenticatedContext from "../../context/AuthenticatedContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaEdit,
  FaUserCircle,
  FaAngleDoubleRight,
  FaWindowClose,
  FaStar, 
  FaRegStar,
  FaCheck
} from "react-icons/fa";

export default function Profile() {
  const { setAuthenticated } = useContext(AuthenticatedContext);
  const navigate =  useNavigate()
  const user = database.users;
  
  {
    /*Function for trigger profile section*/
  }
  const [isClosed, setIsClosed] = useState("none");

  const openOverlay = () => {
    setIsClosed("block");
  };
  const closeOverlay = () => {
    setIsClosed("none");
  };

  return (
    <>
      <div className="profile-icon-header" onClick={openOverlay}>
        <FaUserCircle />
      </div>
      <div className="overlay profile" style={{ display: isClosed }}>
        <button
          onClick={closeOverlay}
          className="close-filter-overlay"
          style={{ border: "none", fontSize: "18px", background: "none" }}
        >
          <FaWindowClose />
        </button>

        <div className="my-profile-header">
          <h2>My profile</h2>
          <div className="user-icon">
            <FaUserCircle />
          </div>
        </div>

        <div className="profile-links">
          <ul className="profile-link-list">
            <li>
              <Link onClick={closeOverlay} to="Favorites">
                Favorites <FaAngleDoubleRight />
              </Link>
            </li>
            <li>
              <Link to="/">
                Reviews <FaAngleDoubleRight />
              </Link>
            </li>
          </ul>

          <ul className="profile-link-list">
            <li>
              <Link to="/">
                Bookings <FaAngleDoubleRight />
              </Link>
            </li>
            <li>
              <Link to="/">
                Previous stays <FaAngleDoubleRight />
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>Profile information</h3>
          <div className="bold profile-information">
            <div className="profile-name">
              <p>
                <span>Name:</span><br /> 
                {user[0].name}
              </p>
            </div>

            <div className="profile-adress">
              <p>
                <span>Adress:</span><br /> 
                {user[0].address}{" "}
              </p>
              <p>
                <span>zip-code:</span><br /> 
                {user[0].zip_code}{" "}
              </p>
            </div>

            <div className="profile-contact">
              <p>
                <span>Phone number:</span><br /> 
                {user[0].phone}{" "}
              </p>
              <p>
                <span>Email address:</span><br /> 
                {user[0].email}{" "}
              </p>
            </div>

          </div>
          <button className="edit-profile-button">
            <FaEdit /> Edit profile
          </button>
        </div>

        <div className="upcoming_stay">
          <h3>Your upcoming stay</h3>

          <div className="inline">
            <h4 className="hotel_title">Grand Hyatt Resort</h4>
            <div className="rates">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
            <FaRegStar />
            </div>
          </div>

          <div className="booking-info">
            <p className="bold font-small"><span>Airport transfer <FaCheck/></span></p>
            <p className="bold font-small"><span>Regusted time of check-in:</span></p>
            <p>10:00 Wed, Now 8 2023</p>
            <button className="edit-profile-button">
              <FaEdit /> Manage booking
            </button>
          </div>
        </div>

        <div className="recently_watched">
          <h3>Recently watched</h3>
   
        <div className="recently_watched-hotel">
          <div className="inline">
            <h4 className="hotel_title">Ski Lodge</h4>
            <div className="rates">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
            </div>
          </div>
          <div className="inline">
          <p>Winter Sports Haven</p>
          <p className="bold"><span>$229</span></p>
          </div>
        </div>

        <div className="recently_watched-hotel">
          <div className="inline">
            <h4 className="hotel_title">Seaside Resort</h4>
            <div className="rates">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </div>
          </div>
          <div className="inline">
          <p>Beachfront Paradise</p>
          <p className="bold"><span>$360</span></p>
          </div>
        </div>

        <div className="recently_watched-hotel">
          <div className="inline">
            <h4 className="hotel_title">Mountain Lodge</h4>
            <div className="rates">
            <FaStar />
            <FaStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            </div>
          </div>
          <div className="inline">
          <p>Nature Lover's Retreat </p>
          <p className="bold"><span>$145</span></p>
          </div>
        </div>
          
        </div>

        <button  onClick={ () => (setAuthenticated(false), navigate("/"))} className="button purple-button">Log out</button>
      </div>
    </>
  );
}
