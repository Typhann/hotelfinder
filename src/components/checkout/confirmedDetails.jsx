import { Link } from "react-router-dom";

export default function ConfirmedDetails() {
  return (
    <section className="confirmed-details-section-small">
      <h3>Booking details</h3>
      <strong>Full name</strong>
      <p>Maria Svensson</p>
      <strong>Email</strong>
      <p>maria.svensson@gmail.com</p>
      <strong>Airport transfer ✔️</strong>
      <strong>Requested time of check-in</strong>
      <p>10:00 Wed, Nov 8</p>
      <Link to="/">Change details</Link>
    </section>
  );
}
