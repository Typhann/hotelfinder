import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";
import { FaApple, FaGoogle, FaFacebook, FaWindowClose } from "react-icons/fa";

// Component for Register modal
export default function Register({ display, setDisplay }) {
  return (
    <Modal open={display} onClose={() => setDisplay(false)}>
      <div className="log-in-section">
        <button
          onClick={() => setDisplay({ ...display, register: false })}
          className="close-overlay"
        >
          <FaWindowClose />
        </button>
        <form className="log-in-section-inner">
          <h1>Register</h1>

          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" id="email" size="30" name="email" required />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              id="pass"
              size="35"
              name="password"
              required
            />
          </div>

          <input className="button log-in-BTN" type="submit" value="Register" />

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
              Already have an account?
              <Link to="#"> Log in here</Link>
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
