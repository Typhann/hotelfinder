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
      <div className="row">
        <div className="column">
          <label htmlFor="name">
            Cardholders name<span>*</span>
          </label>
          <input type="text" id="name" />
        </div>
        <div className="column">
          <label htmlFor="cardNumber">
            Card number<span>*</span>
          </label>
          <input type="text" id="cardNumber" />
        </div>
      </div>
      <div className="row end-of-card-details">
        <div className="column">
          <label htmlFor="expiration">
            Expiration date<span>*</span>
          </label>
          <input type="month" id="expiration" />
        </div>
        <div className="column">
          <label htmlFor="cvc">
            CVC<span>*</span>
          </label>
          <input type="number" id="cvc" minLength="8" maxLength="19" />
        </div>
      </div>
      <div className="row">
        <div className="column">
          <label htmlFor="country">
            Country<span>*</span>
          </label>
          <input type="text" id="country" />
        </div>
        <div className="column">
          <label htmlFor="city">
            City<span>*</span>
          </label>
          <input type="text" id="city" minLength="2" />
        </div>
      </div>
      <div className="row">
        <div className="column">
          <label htmlFor="address">
            Address<span>*</span>
          </label>
          <input type="text" id="address" />
        </div>
        <div className="column">
          <label htmlFor="zip">
            Zip-code<span>*</span>
          </label>
          <input type="text" id="zip" minLength="8" maxLength="19" />
        </div>
      </div>
      <div className="checkout-buttons">
        <button onClick={() => navigate("/")} className="button">
          Go back to details
        </button>
        <button type="submit" className="button">
          Pay
        </button>
      </div>
    </section>
  );
}
