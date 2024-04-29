import { Link } from "react-router-dom";
import Search from "../header/search/Search";
import { useState, useContext, useEffect } from "react";
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
  const [mobile, setMobile] = useState(window.innerWidth < 968);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 968);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <>
      <header>
        <Link className="logo" to="/">
          <img src={logo} alt="Logo" draggable={false} />
        </Link>
        {!mobile && <Search />}

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
              // onClick={() => setDisplay({ ...display, login: true })}
              className="button"
            >
              Log in
            </button>
            <button
              // onClick={() => setDisplay({ ...display, register: true })}
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
