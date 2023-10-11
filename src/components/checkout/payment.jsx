import { useNavigate } from "react-router-dom";
import mastercard from "../../assets/payment-logos/mastercard.png";
import visa from "../../assets/payment-logos/visa.png";
import americanExpress from "../../assets/payment-logos/american-express.png";
import klarna from "../../assets/payment-logos/klarna.png";
import applePay from "../../assets/payment-logos/apple-pay.png";
import googlePay from "../../assets/payment-logos/google-pay.png";

export default function Payment() {
  const navigate = useNavigate();
  const paymentLogos = [
    mastercard,
    visa,
    americanExpress,
    klarna,
    applePay,
    googlePay,
  ];

  const renderPaymentProviders = paymentLogos.map((provider) => {
    return (
      <div key={provider} className="payment-provider">
        <img src={provider} alt="company logo" width="60px" />
      </div>
    );
  });
  return (
    <section className="payment-section">
      <h3>Payment details</h3>
      <p>How would you like to pay?</p>
      <div className="payment-provider-container">{renderPaymentProviders}</div>
      <strong>Mastercard</strong>
      <small>
        Please fill out all required <span>*</span> fields.
      </small>
      <form>
        <div className="row">
          <div className="column">
            <label htmlFor="name">
              Cardholders name <span>*</span>
            </label>
            <input type="text" id="name" minLength="2" required />
          </div>
          <div className="column">
            <label htmlFor="cardNumber">
              Card number <span>*</span>
            </label>
            <input
              type="text"
              id="cardNumber"
              minLength="8"
              maxLength="19"
              required
            />
          </div>
        </div>
        <div className="row end-of-card-details">
          <div className="column">
            <label htmlFor="expiration">
              Expiration date <span>*</span>
            </label>
            <input type="month" id="expiration" required />
          </div>
          <div className="column">
            <label htmlFor="cvc">
              CVC <span>*</span>
            </label>
            <input
              type="number"
              id="cvc"
              minLength="3"
              maxLength="4"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <label htmlFor="country">
              Country <span>*</span>
            </label>
            <input
              type="text"
              id="country"
              minLength="4"
              maxLength="56"
              required
            />
          </div>
          <div className="column">
            <label htmlFor="city">
              City <span>*</span>
            </label>
            <input
              type="text"
              id="city"
              minLength="1"
              maxLength="85"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <label htmlFor="address">
              Address <span>*</span>
            </label>
            <input type="text" id="address" minLength="4" required />
          </div>
          <div className="column">
            <label htmlFor="zip">
              Zip-code <span>*</span>
            </label>
            <input type="text" id="zip" minLength="1" maxLength="12" required />
          </div>
        </div>
        <div className="checkout-buttons">
          <button onClick={() => console.log("clicked")} className="button">
            Go back to details
          </button>
          <button type="submit" className="button">
            Pay
          </button>
        </div>
      </form>
    </section>
  );
}
