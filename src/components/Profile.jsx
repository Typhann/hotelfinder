import {useState} from 'react';
import database from "../../database.json";
import { Link } from "react-router-dom";
import HotelCard from "./HotelCard";


import {
    FaEdit,
    FaUserCircle,
    FaAngleDoubleRight,
    FaWindowClose,
  } from "react-icons/fa";


  export default function Profile () {
    const user = database.users;
    console.log(JSON.stringify(user[0].name)) 

    {/*Function for trigger profile section*/}
   const [isClosed, setIsClosed] = useState('none');

   const openOverlay = () => {
       setIsClosed('block');
   }
   const closeOverlay = () => {
    setIsClosed('none');
  }

    return (
        <>
        <div className="profile-icon-header" onClick={openOverlay}><FaUserCircle/></div>
        <div className="overlay profile" style={{display: isClosed}}>
        <button onClick={closeOverlay} className='close-filter-overlay' style={{border: 'none', fontSize: '18px', background: 'none'}}><FaWindowClose/></button>
            
            <div className="my-profile-header">
                <h2>My profile</h2>
                <div className="user-icon"><FaUserCircle /></div>
            </div>

            <div className="profile-links">
                <ul className="profile-link-list">
                    <li onClick={closeOverlay}><Link to="favorites">Favorites <FaAngleDoubleRight /></Link></li>
                    <li><Link to="/">Reviews <FaAngleDoubleRight /></Link></li>
                </ul>

                <ul className="profile-link-list">
                    <li><Link to="/">Bookings <FaAngleDoubleRight /></Link></li>
                    <li><Link to="/">Previous stays <FaAngleDoubleRight /></Link></li>
                </ul>
            </div>
        
            <div>
                <h3>Profile information</h3>
                <div className="profile-information">
                    <div className="profile-name">
                        <p><span>Name:</span> {user[0].name}</p>
                    </div>
                    <div className="profile-adress">
                        <p><span>Adress:</span> {user[0].address} </p>
                        <p><span>zip-code:</span> {user[0].zip_code} </p>
                    </div>
                    <div className="profile-contact"> 
                    <p><span>Phone number:</span> {user[0].phone} </p>
                    <p><span>Email address:</span> {user[0].email} </p>
                    </div>

                </div>
                <button className="edit-profile-button"><FaEdit /> Edit profile</button>
            </div>

            <div className='upcoming_stay'>
                <h3>Your upcoming stay</h3>
                <HotelCard />
            </div>

            <div className='recently_watched'>
                <h3>Recently watched</h3>
                <HotelCard />
            </div>

            <button onClick={closeOverlay} className="button purple-button">Log out</button>
        </div>
        </>
    );
}