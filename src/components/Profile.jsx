import {
    FaEdit,
    FaUserCircle,
    FaAngleDoubleRight,
  } from "react-icons/fa";

export default function Profile () {

    return (
        <>
        <div className="profile">
            <div>
                <h2>My profile <FaUserCircle /></h2>
            </div>

            <div className="profile-links">
                <ul className="profile-link-list">
                    <li>Favorites <FaAngleDoubleRight /></li>
                    <li>Bookings <FaAngleDoubleRight /></li>
                    <li>Reviews <FaAngleDoubleRight /></li>
                    <li>Previous stays <FaAngleDoubleRight /></li>
                </ul>
            </div>
        
            <div className="profile-information">
                <p>First Name: </p>
                <p>Last Name: </p>
                <p>Adress: </p>
                <p>City: </p>
                <p>Phone number: </p>
                <p>Email address: </p>
                <button className="edit-profile-button"><FaEdit /> Edit profile</button>
            </div>

            <div>
                <h2>Your upcoming stay</h2>
            </div>

            <div>
                <h2>Recently watch</h2>
            </div>
            <button className="log-out-button">Log out</button>
        </div>
        </>
    );
}