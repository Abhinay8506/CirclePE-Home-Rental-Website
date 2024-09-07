import React from "react";
import "./Final.css"; // Assuming you're adding some custom styles
import { useNavigate } from 'react-router-dom';
const FinalPage = () => {

    
    const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="container">
      <section className="progress-bar">
        <div className="step active">Setup Autopay</div>
        <div className="step active">Setup Autopay</div>
        <div className="step">KYC & move-in</div>
      </section>
      <header>
        <span onClick={handleBack} className="back-icon">
          ←
        </span>
        <h1>One step away ✨ </h1>
        <p>from your dream home</p>
      </header>

      <section className="rent-details">
        <h2 className="Finalsubtitle">Rent converted to Zero-Cost EMI</h2>
        <div className="detail">
          <p>Co-living partner</p>
          <p>Rent-OK</p>
        </div>
        <div className="detail">
          <p>Payment Amount</p>
          <p>INR XXXX.00</p>
        </div>
        <div className="detail">
          <p>Monthly rent</p>
          <p>10,000 INR/mo.</p>
        </div>
        <div className="detail">
          <p>Rent cycle</p>
          <p>5 Months</p>
        </div>

        <button className="zero-emi-btn">Zero COST EMI</button>
      </section>

      <footer>
        <p>
          By clicking on next, you acknowledge that you have read the
          <a href="#">Loan Agreement</a> & <a href="#">KYC</a> and agree to the
          terms and conditions.
        </p>
        <button className="continue-btn">Continue</button>
      </footer>
    </div>
  );
};

export default FinalPage;
