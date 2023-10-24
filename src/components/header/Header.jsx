import { Link } from "react-router-dom";
import Search from "../header/search/Search";
import { useState, useContext } from "react";
import Profile from "./Profile";
import Login from "./Login";
import Register from "./Register";
import { FaHeart } from "react-icons/fa";
import AuthenticatedContext from "../../context/AuthenticatedContext";
import Toast from "../Toast/Toast";
import logo from "../../assets/logo/logoHotelfinder.webp";

export default function Header() {
  const [display, setDisplay] = useState({ login: false, register: false });
  const { authenticated } = useContext(AuthenticatedContext);

  return (
    <>
      <header>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <Search />

        {/* Logged in */}
        {authenticated ? (
          <div className="profile-favorite">
            <Link to="/Favorites">
              <div className="favorite-icon-header">
                <FaHeart />
              </div>
            </Link>
            <Profile />
          </div>
        ) : (
          // Logged out
          <div className="login-register">
            <button
              onClick={() => setDisplay({ ...display, login: true })}
              className="button"
            >
              Log in
            </button>
            <button
              onClick={() => setDisplay({ ...display, register: true })}
              className="button"
            >
              Register
            </button>
          </div>
        )}
      </header>

      {/* Displays modals */}
      {display.login && (
        <Login display={display.login} setDisplay={setDisplay} />
      )}
      {display.register && (
        <Register display={display.register} setDisplay={setDisplay} />
      )}

      {authenticated && <Toast type="success" message="Welcome back Maria!" />}
    </>
  );
}
