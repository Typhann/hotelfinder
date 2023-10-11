import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Details() {
  const navigate = useNavigate();
  const [focusedInput, setFocusedInput] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    message: false,
  });

  // properties must match inputs name on HTML element for handleChange function to work
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    transfer: false,
    insurance: false,
    message: "",
  });

  // controlled form
  // updates formData with the inputs value
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // sets inputs focus state to true to not apply success style
    setFocusedInput({ ...focusedInput, [name]: true });
  }
  function getInputClassName(name, value) {
    // Dont set a class if the input is focused
    if (focusedInput[name]) {
      return "";
    }

    // validation here is only for styling, form uses native html validation
    switch (name) {
      case "firstName":
      case "lastName":
        if (value.length >= 2) {
          return "success";
        } else if (value.length !== 0) {
          return "error";
        }
        break;
      case "email":
        if (value.length >= 8 && value.includes("@")) {
          return "success";
        } else if (value.length !== 0) {
          return "error";
        }
        break;
      case "phone":
        if (value.length >= 6) {
          return "success";
        } else if (value.length !== 0) {
          return "error";
        }
        break;
      case "message":
        if (value.length >= 10) {
          return "success";
        } else if (value.length !== 0) {
          return "error";
        }
        break;
      default:
        return "";
    }
  }

  return (
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
            <input
              onChange={handleChange}
              className={getInputClassName("firstName", formData.firstName)}
              onBlur={() =>
                setFocusedInput({ ...focusedInput, firstName: false })
              }
              name="firstName"
              id="firstName"
              type="text"
              required
              minLength="2"
            />
          </div>
          <div className="lastName">
            <label htmlFor="lastName">
              Last name <span>*</span>
            </label>
            <input
              onChange={handleChange}
              className={getInputClassName("lastName", formData.lastName)}
              onBlur={() =>
                setFocusedInput({ ...focusedInput, lastName: false })
              }
              name="lastName"
              id="lastName"
              type="text"
              required
              minLength="2"
            />
          </div>
        </div>
        <label htmlFor="email">
          Email address <span>*</span>
        </label>
        <input
          onChange={handleChange}
          className={getInputClassName("email", formData.email)}
          onBlur={() => setFocusedInput({ ...focusedInput, email: false })}
          name="email"
          id="email"
          type="email"
          required
          minLength="6"
        />
        <label htmlFor="phone">Phone number</label>
        <input
          onChange={handleChange}
          className={getInputClassName("phone", formData.phone)}
          onBlur={() => setFocusedInput({ ...focusedInput, phone: false })}
          name="phone"
          id="phone"
          type="tel"
          minLength="6"
        />
        <h3>Add to your booking</h3>
        <div className="checkbox">
          <label htmlFor="transfer">Airport transfer for $59</label>
          <input name="transfer" id="transfer" type="checkbox" />
        </div>
        <div className="checkbox">
          <label name="insurance" htmlFor="insurance">
            Travel insurance for $49
          </label>
          <input name="insurance" id="insurance" type="checkbox" />
        </div>
        <h3>Got any special requests?</h3>
        <p>
          Send a message to the hotel with any special requests that you might
          have.
        </p>
        <textarea
          onChange={handleChange}
          className={getInputClassName("message", formData.message)}
          onBlur={() => setFocusedInput({ ...focusedInput, message: false })}
          name="message"
          minLength="10"
        />
        <strong>Request early check-in</strong>
        <p>Your check in is at 12:00 on Wed, Nov 8</p>
        <label htmlFor="checkIn">Estimated time of arrival</label>
        <input name="checkIn" id="checkIn" type="time" />
        <div className="checkout-buttons">
          <button onClick={() => navigate("/")} className="button">
            Go back to selection
          </button>
          <button type="submit" className="button">
            Continue to payment
          </button>
        </div>
      </form>
    </section>
  );
}
