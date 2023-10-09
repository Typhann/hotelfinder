import { Link } from "react-router-dom";
import Search from "./search/Search";


// To do: Make logo a picture and add it here
export default function Header() {
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
          <button className="button">Log in</button>
          <button className="button">Register</button>
        </div>
      </header>
    </>
  );
}
