import {useState} from 'react';
import Slider from '@mui/material/Slider';
import {
    FaSlidersH,
    FaSortDown,
    FaWindowClose,
    FaStar,
    FaRegStar,
  } from "react-icons/fa";

export default function FilterButtons () {

    {/*Function for trigger filter section*/}
    const [isClosed, setIsClosed] = useState('none');
    const openOverlay = () => {
        setIsClosed('block');
    }
    const closeOverlay = () => {
        setIsClosed('none');
    }
      
    return (
        <>
        {/*Buttons for trigger filter section*/}
        <div className="filter-buttons">
            <label for="sort-by"></label>
            <select name="pets" id="sort-by">
                <option value="Default">Sort by - Recommended</option>
                <option value="LowToHigh">Price - Low To High</option>
                <option value="HighToLow">Price - High To Low</option>
            </select>
            <button onClick={openOverlay} className="filter-button"><FaSlidersH/> Filter</button>
        </div>

        {/*Filter section, hidden on defeault*/}
        <div className="overlay filter-section" style={{display: isClosed}}>
            <button onClick={closeOverlay} className='close-filter-overlay' style={{border: 'none', fontSize: '18px', background: 'none'}}><FaWindowClose/></button>
            <h2>Search</h2>
            <input placeholder='search hotel ....'/>
            <h2>Filter by</h2>
            <h3>Popular filters</h3>

            <div className="popular-filters">
                <ul>
                    <li><input type="checkbox" value="Meals" name="HotelPreference" /> Meals included</li>
                    <li><input type="checkbox" value="Family" name="HotelPreference" /> Family friendly</li>
                    <li><input type="checkbox" value="Beach" name="hotelpreference" /> Beach</li>
                    <li><input type="checkbox" value="Pool" name="hotelpreference" /> Pool</li>
                    <li><input type="checkbox" value="WiFi" name="hotelpreference" /> WiFi</li>
                </ul>
            </div>

            <h3>Price per night</h3>
            {/*slider from @mui/material/Slider*/}
            <Slider max={1000} min={50} />
            <h3>Guest rating</h3>
            <div className="quest-rating-filter">
                <ul>
                    <li><input type="checkbox" value="Wonderful" name="Wonderful" /> Wonderful</li>
                    <li><input type="checkbox" value="Very Good" name="Very Good" /> Very Good</li>
                    <li><input type="checkbox" value="Good" name="Good" /> Good</li>
                </ul>
            </div>

            <h3>Hotel star rating</h3>
            <div className='star-rating-filter'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaRegStar/>
                <FaRegStar/>
            </div>
            
        </div>
        </>
    );
}