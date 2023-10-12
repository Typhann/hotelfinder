import { useState, useEffect } from "react";
import Selection from "../components/checkout/selection";
import Details from "../components/checkout/details";
import Payment from "../components/checkout/payment";
import Confirmation from "../components/checkout/confirmation";
import ConfirmedDetails from "../components/checkout/confirmedDetails";
import { FaSearch } from "react-icons/fa";

export default function Checkout() {
  const [displayPayment, setDisplayPayment] = useState(false);
  const [displayConfirmation, setDisplayConfirmation] = useState(false);
  const [displayDetails, setDisplayDetails] = useState(true);
  const [displayConfirmedDetails, setDisplayConfirmedDetails] = useState(false);

  // scrolls user to top on pageload
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="breadcrumbs">
        <FaSearch className="finished" />
        <p className="finished">Selection</p>
        <div className="breadcrumb-line finished-line" />
        <FaSearch className="finished" />
        <p className="finished">Confirm details</p>
        <div className="breadcrumb-line" />
        <FaSearch
          className={displayPayment || (displayConfirmation && "finished")}
        />
        <p className={displayPayment || (displayConfirmation && "finished")}>
          Payment
        </p>
      </div>
      <div className="section-container">
        <Selection />
        {displayDetails && (
          <Details
            setDisplayDetails={setDisplayDetails}
            setDisplayPayment={setDisplayPayment}
            setDisplayConfirmedDetails={setDisplayConfirmedDetails}
          />
        )}
        {displayConfirmedDetails && <ConfirmedDetails />}
        {displayPayment && (
          <Payment
            setDisplayPayment={setDisplayPayment}
            setDisplayConfirmation={setDisplayConfirmation}
          />
        )}
        {displayConfirmation && <Confirmation />}
      </div>
    </>
  );
}
