import { Link } from "react-router-dom";
import Login from './Login';
import Register from "./Register";

import logo from "../assets/logo/logoHotelfinder.webp";

export default function Footer() {
  return (
    <footer>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
   
      <div>
        <ul className="SingInRegister">
        <li><Login/></li>
        <li><Register/></li>
        </ul>
      </div>

      <address>
        <p>My street 123</p>
        <p>345 Thisstate</p>
        <p>London, United Kingdom</p>
      </address>
    </footer>
  );
}
