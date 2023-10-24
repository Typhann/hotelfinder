import { useState } from "react";
import Slider from "@mui/material/Slider";
import { FaSlidersH, FaWindowClose, FaStar, FaRegStar } from "react-icons/fa";
import Drawer from "@mui/material/Drawer";

export default function FilterButtons() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      {/*Buttons for trigger filter section*/}
      <div className="filter-buttons">
        <label htmlFor="sort-by"></label>
        <select name="sort" id="sort-by">
          <option value="Default">Sort by - Recommended</option>
          <option value="LowToHigh">Price - Low To High</option>
          <option value="HighToLow">Price - High To Low</option>
        </select>
        <button onClick={() => setOpenDrawer(true)} className="button">
          <FaSlidersH /> Filter
        </button>
      </div>

      {/*Filter section, hidden on defeault
       Drawer - create sliding effect from the side for profile section */}
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <div className="overlay filter-section slide">
          <button
            onClick={() => setOpenDrawer(false)}
            className="close-filter-overlay"
            style={{ border: "none", fontSize: "18px", background: "none" }}
          >
            <FaWindowClose />
          </button>
          <h2>Search</h2>
          <input placeholder="search hotel ...." />
          <h2>Filter by</h2>
          <h3>Popular filters</h3>

          <div className="popular-filters">
            <ul>
              <li>
                <input type="checkbox" value="Meals" name="HotelPreference" />{" "}
                Meals included
              </li>
              <li>
                <input type="checkbox" value="Family" name="HotelPreference" />{" "}
                Family friendly
              </li>
              <li>
                <input type="checkbox" value="Beach" name="hotelpreference" />{" "}
                Beach
              </li>
              <li>
                <input type="checkbox" value="Pool" name="hotelpreference" />{" "}
                Pool
              </li>
              <li>
                <input type="checkbox" value="WiFi" name="hotelpreference" />{" "}
                WiFi
              </li>
            </ul>
          </div>

          <h3>Price per night</h3>
          {/*slider from @mui/material/Slider to simulate price range*/}
          <Slider max={1000} min={50} />
          <h3>Guest rating</h3>
          <div className="quest-rating-filter">
            <ul>
              <li>
                <input type="checkbox" value="Wonderful" name="Wonderful" />{" "}
                Wonderful
              </li>
              <li>
                <input type="checkbox" value="Very Good" name="Very Good" />{" "}
                Very Good
              </li>
              <li>
                <input type="checkbox" value="Good" name="Good" /> Good
              </li>
            </ul>
          </div>

          <h3>Hotel star rating</h3>
          <div className="star-rating-filter">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
            <FaRegStar />
          </div>

          {/*Closes filter section*/}
          <button
            onClick={() => setOpenDrawer(false)}
            className="button purple-button"
          >
            Apply filter
          </button>
        </div>
      </Drawer>
    </>
  );
}
