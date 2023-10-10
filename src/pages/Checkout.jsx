import { FaSearch } from "react-icons/fa";

export default function Checkout() {
  window.scrollTo(0, 0);
  return (
    <>
      <div className="breadcrumbs">
        <FaSearch className="finished" />
        <p className="finished">Selection</p>
        <div className="breadcrumb-line finished-line" />
        <FaSearch className="finished" />
        <p className="finished">Confirm details</p>
        <div className="breadcrumb-line" />
        <FaSearch />
        <p>Payment</p>
      </div>
      <div className="section-container">
        {/* <section className="selection">
          <h3>Selection</h3>
        </section>
        <section className="booking-details"></section> */}
        <section className="confirm-details">
          <h3>Confirm details</h3>
          <small>
            Please fill out all required <span>*</span> fields.
          </small>
          <form>
            <div className="fullName-container">
              <div className="firstName">
                <label htmlFor="firstName">
                  First name <span>*</span>
                </label>
                <input id="firstName" type="text" />
              </div>
              <div className="lastName">
                <label htmlFor="lastName">
                  Last name <span>*</span>
                </label>
                <input id="lastName" type="text" />
              </div>
            </div>
            <label htmlFor="email">
              Email address <span>*</span>
            </label>
            <input id="email" type="email" />
            <label htmlFor="phone">Phone number</label>
            <input id="phone" type="tel" />
            <h3>Add to your booking</h3>
            <div className="checkbox">
              <label htmlFor="transfer">Airport transfer for $59</label>
              <input id="transfer" type="checkbox" />
            </div>
            <div className="checkbox">
              <label htmlFor="insurance">Travel insurance for $49</label>
              <input id="insurance" type="checkbox" />
            </div>
            <h3>Got any special requests?</h3>
            <p>
              Send a message to the hotel with any special requests that you
              might have.
            </p>
            <textarea />
            <strong>Request early check-in</strong>
            <p>Your check in is at 12:00 on Wed, Nov 8</p>
            <label htmlFor="checkIn">Estimated time of arrival</label>
            <input id="checkIn" type="time" />
            <div className="checkout-buttons">
              <button className="button">Go back to selection</button>
              <button className="button">Continue to payment</button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}
