import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Confetti from "react-confetti";
export default function Confirmed() {
  const [displayConfetti, setDisplayConfetti] = useState(250);

  window.scrollTo(0, 0);

  // stops confetti animation after 5 seconds
  setTimeout(() => {
    setDisplayConfetti(0);
  }, 5000);
  return (
    <>
      <Confetti numberOfPieces={displayConfetti} />
      <section className="confirmation-section">
        <h1>Booking confirmed</h1>
        <FaSearch />
        <h3>Reference number #9774589</h3>
        <strong>
          We have sent your reservation details to maja.svensson@gmail.com
        </strong>
        <p>
          If you can&apos;t find it make sure to also check your emails spam
          folder
        </p>
        <div className="row">
          <div className="email-confirmation">
            <label htmlFor="emailConfirmation">
              Send confirmation email again or to someone else
            </label>
            <input type="email" placeholder="maja.svensson@gmail.com" />
          </div>
          <button className="button">Send</button>
        </div>
        <button className="button">Download as PDF</button>
        <p>
          This booking is covered by our 24-hour free{" "}
          <a href="#">Cancellation Policy</a>
        </p>
        <div className="row">
          <p>
            <a href="#">Terms & conditions</a>
          </p>
          <p>
            <a href="#">Manage booking</a>
          </p>
        </div>
      </section>
    </>
  );
}
