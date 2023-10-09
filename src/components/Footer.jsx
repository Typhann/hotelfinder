import { Link } from "react-router-dom";
import logo from "../assets/logo/logoHotelfinder.webp";

export default function Footer() {
    return (
        <footer>
            <div className="logo">
            <Link to="/">
                <img src={logo} alt="Logo"/>
            </Link>
            </div>

            <div>
                <ul className="footerList">
                    <li><Link to="/">Policy</Link></li>
                    <li><Link to="/">About us</Link></li>
                    <li><Link to="/">Contact</Link></li>
                </ul>
            </div>

            <address>
                <h3>Our adress</h3>
                <p>My stree 123</p>
                <p>345 Thisstate</p>
                <p>London, United Kingdom</p>
            </address>
        </footer>
    );
}