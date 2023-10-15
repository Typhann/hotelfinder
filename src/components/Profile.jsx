import {useState} from 'react';
import {
    FaEdit,
    FaUserCircle,
    FaAngleDoubleRight,
    FaWindowClose,
  } from "react-icons/fa";

  import { Link } from "react-router-dom";
  export default function Profile () {
    const [isClosed, setIsClosed] = useState('block');

    const closeOverlay = () => {
        setIsClosed('none');
    }

    return (
        <>
        <div className="overlay profile" style={{display: isClosed}}>
        <button onClick={closeOverlay} className='close-filter-overlay' style={{border: 'none', fontSize: '18px', background: 'none'}}><FaWindowClose/></button>
            
            <div className="my-profile-header">
                <h2>My profile</h2>
                <h2><FaUserCircle /></h2>
            </div>

            <div className="profile-links">
                <ul className="profile-link-list">
                    <li><Link to="/">Favorites <FaAngleDoubleRight /></Link></li>
                    <li><Link to="/">Reviews <FaAngleDoubleRight /></Link></li>
                </ul>

                <ul className="profile-link-list">
                    <li><Link to="/">Bookings <FaAngleDoubleRight /></Link></li>
                    <li><Link to="/">Previous stays <FaAngleDoubleRight /></Link></li>
                </ul>
            </div>
        
            <div className="profile-information">
                <h2>Profile information</h2>
                <div>
                    <p>First Name: </p>
                    <p>Last Name: </p>
                    <p>Adress: </p>
                    <p>City: </p>
                    <p>Phone number: </p>
                    <p>Email address: </p>
                </div>
                <button className="edit-profile-button"><FaEdit /> Edit profile</button>
            </div>

            <div>
                <h2>Your upcoming stay</h2>
            </div>

            <div>
                <h2>Recently watch</h2>
            </div>
            <button className="button log-out-button">Log out</button>
        </div>
        </>
    );
}