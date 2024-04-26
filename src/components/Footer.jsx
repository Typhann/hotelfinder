import { Link } from "react-router-dom";

import logo from "../assets/logo/logoHotelfinder.webp";

export default function Footer() {
  return (
    <footer>
      <Link className="logo" to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <ul className="footerlist">
        <li>
          <Link to="#"> Log in</Link>
        </li>
        <li>
          <Link to="#"> Register</Link>
        </li>
        <li>
          <Link to="#"> Contact</Link>
        </li>
      </ul>

      <address>
        <p>My street 123</p>
        <p>345 Thisstate</p>
        <p>London, United Kingdom</p>
      </address>
    </footer>
  );
}
