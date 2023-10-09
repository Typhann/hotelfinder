import { Link } from "react-router-dom";
import logo from "../assets/logo/logoHotelfinder.webp";

export default function Footer() {
    return (
        <footer>
            
            <div className="logo">
            <Link to="/">
                <img src={logo} alt="Logo" />;
            </Link>
            </div>

            <div>
                <p>My stree 123</p>
                <p>345 Thisstate</p>
                <p>London, United Kingdom</p>
            </div>
        </footer>
    );
}