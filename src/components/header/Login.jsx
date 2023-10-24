import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";
import { FaApple, FaGoogle, FaFacebook, FaWindowClose } from "react-icons/fa";
import AuthenticatedContext from "../../context/AuthenticatedContext";

// Component for Login modal
export default function Login({ display, setDisplay }) {
  const [checkUser, setCheckUser] = useState(false);
  const { setAuthenticated } = useContext(AuthenticatedContext);

  // fakes an authentication
  function handlesubmit(e) {
    setCheckUser(true);
    e.preventDefault();
    setTimeout(() => {
      setCheckUser(false);
      setDisplay(false);
      setAuthenticated(true);
    }, 2000);
  }

  return (
    <Modal open={display} onClose={() => setDisplay(false)}>
      <div className="log-in-section">
        <button
          onClick={() => setDisplay({ ...display, login: false })}
          className="close-overlay"
        >
          <FaWindowClose />
        </button>
        <form onSubmit={handlesubmit} className="log-in-section-inner">
          <h1>Log in</h1>

          <div className="email">
            <label htmlFor="login-email">Email</label>
            <br />
            <input
              type="email"
              id="login-email"
              size="30"
              name="email"
              value="maria.svensson@gmail.com"
              readOnly
            />
          </div>

          <div className="password">
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              id="password"
              size="35"
              name="password"
              value="*********"
              readOnly
            />
          </div>

          <button
            className={`button log-in-BTN ${checkUser && "disabled"}`}
            type="submit"
            value="Log in"
          >
            {checkUser ? "Logging in..." : "Log in"}
          </button>

          <div className="social-log-in">
            <div className="divBTN">
              <p>
                <FaApple /> Continue with Apple
              </p>
            </div>
            <div className="divBTN">
              <p>
                <FaGoogle /> Continue with Google
              </p>
            </div>
            <div className="divBTN">
              <p>
                <FaFacebook /> Continue with Facebook
              </p>
            </div>
          </div>

          <div className="new-account">
            <p>
              Do not have an account yet?
              <Link to="#"> Register now</Link>
            </p>
            <p>
              <Link to="#"> Terms & Conditions</Link>
            </p>
          </div>
        </form>
      </div>
    </Modal>
  );
}
