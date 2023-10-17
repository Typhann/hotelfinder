import { Link } from "react-router-dom";
import Search from "./search/Search";
import Profile from "./Profile";
import Login from "./Login";
import Register from "./Register";
import logo from "../assets/logo/logoHotelfinder.webp";

import { 
  FaHeart,
} from "react-icons/fa";

export default function Header() {

  return (
    <>
      <header>
        <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        </div>
        <Search />

        {/*Logged out, defeault*/}
        <div>
        <ul className="SingInRegister">
          <li><Login/></li>
          <li><Register/></li>
        </ul>
      </div>
        
       

         {/*Planed to only showed when user is logged in*/}
         <div className="profile-favorite">
         <Link to="/Favorites">
         <div className="favorite-icon-header"><FaHeart/></div>
          </Link>
          <Profile/>
        </div>
      </header>
    </>
  );
}
