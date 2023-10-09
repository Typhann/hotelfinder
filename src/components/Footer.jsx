import { Link } from "react-router-dom";

// To do: Make logo a picture and add it here

export default function Footer() {
    return (
        <footer>
            <div className="logo">
            <Link to="/">
                <span>Hotelfinder</span>
                <strong>Book Hotels with ease</strong>
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