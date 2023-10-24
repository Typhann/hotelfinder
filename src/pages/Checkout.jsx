import { useState, useEffect } from "react";
import Selection from "../components/checkout/selection";
import Details from "../components/checkout/details";
import Payment from "../components/checkout/payment";
import Confirmation from "../components/checkout/confirmation";
import ConfirmedDetails from "../components/checkout/confirmedDetails";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

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
    {/* motion.div create animation for nicer loading */}
      <motion.div
        className="fade-in"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >

        {/* progress bar */}
        <div className="breadcrumbs">
          <FaSearch className="finished" />
          <p className="finished">Selection</p>
          <div className="breadcrumb-line finished-line" />
          <FaSearch className="finished" />
          <p className="finished">Confirm details</p>
          <div
            className={
              displayPayment || displayConfirmation
                ? "breadcrumb-line finished-line"
                : "breadcrumb-line"
            }
          />
          <FaSearch
            className={displayPayment || displayConfirmation ? "finished" : ""}
          />
          <p
            className={displayPayment || displayConfirmation ? "finished" : ""}
          >
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
              setDisplayDetails={setDisplayDetails}
            />
          )}
          {displayConfirmation && <Confirmation />}
        </div>
      </motion.div>
    </>
  );
}
