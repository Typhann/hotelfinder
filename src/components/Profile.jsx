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
                <div className="user-icon"><FaUserCircle /></div>
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
        
            <div>
                <h2>Profile information</h2>
                <div className="profile-information">
                    <div className="profile-name">
                        <p><span>Name:</span> Maria Svensson</p>
                    </div>
                    <div className="profile-adress">
                        <p><span>Adress:</span> Onmystreet 45B </p>
                        <p><span>zip-code:</span> 123 45, UK </p>
                    </div>
                    <div className="profile-contact"> 
                    <p><span>Phone number:</span> +427 4959 38 99 </p>
                    <p><span>Email address:</span> maria.svensson@email.uk </p>
                    </div>

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