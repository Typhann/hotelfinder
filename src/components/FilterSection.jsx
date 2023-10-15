import Slider from '@mui/material/Slider';
import {useState} from 'react';

import {
    FaWindowClose,
    FaStar,
    FaRegStar,
  } from "react-icons/fa";

export default function FilterSection () {
    const [isClosed, setIsClosed] = useState('block');

    const closeOverlay = () => {
        setIsClosed('none');
    }

    return (
        <>
        <div className="overlay filter-section" style={{display: isClosed}}>
            <button onClick={closeOverlay} className='close-filter-overlay'><FaWindowClose/></button>
            <h2>Search</h2>
            <input placeholder='search hotel ....'/>
            <h2>Filter by</h2>
            <h3>Popular filters</h3>

            <div className="popular-filters">
                <ul>
                    <li><input type="checkbox" value="All" name="hotelpreference" /> All inclusive</li>
                    <li><input type="checkbox" value="Beach" name="hotelpreference" /> Beach</li>
                    <li><input type="checkbox" value="Meals" name="hotelpreference" /> Meals included</li>
                    <li><input type="checkbox" value="Pool" name="hotelpreference" /> Pool</li>
                    <li><input type="checkbox" value="WiFi" name="hotelpreference" /> WiFi</li>
                </ul>
            </div>

            <h3>Price per night</h3>
            <Slider max={1000} min={50} />
            <h3>Guest rating</h3>
            <div className="quest-rating-filter">
                <ul>
                    <li><input type="checkbox" value="Any" name="questrating" /> Any</li>
                    <li><input type="checkbox" value="Wonderful" name="Wonderful" /> Wonderful</li>
                    <li><input type="checkbox" value="Very Good" name="Very Good" /> Very Good</li>
                    <li><input type="checkbox" value="Good" name="Good" /> Good</li>
                </ul>
            </div>

            <h3>Star rating</h3>
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