import { Link } from "react-router-dom";
import Search from "./search/Search";
import {useState} from 'react';

export default function Header() {

   {/*Function for trigger Log in section*/}
   const [isClosed, setIsClosed] = useState('none');
   const openOverlay = () => {
       setIsClosed('block');
   }
 
  return (
    <>
      <header>
        <div className="logo">
          <Link to="/">
            <span>Hotelfinder</span>
            <strong>Book Hotels with ease</strong>
          </Link>
        </div>
        <Search />
        <div className="login-register">
          <button onClick={openOverlay} className="button">Log in</button>
          <button className="button">Register</button>
        </div>
      </header>
    </>
  );
}
