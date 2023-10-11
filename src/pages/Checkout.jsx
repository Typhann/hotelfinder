import { useState, useEffect } from "react";
import Details from "../components/checkout/details";
import Payment from "../components/checkout/payment";
import Selection from "../components/checkout/selection";
import { FaSearch } from "react-icons/fa";

export default function Checkout() {
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
        <FaSearch />
        <p>Payment</p>
      </div>
      <div className="section-container">
        {/* <Details /> */}
        <Payment />
      </div>
    </>
  );
}
