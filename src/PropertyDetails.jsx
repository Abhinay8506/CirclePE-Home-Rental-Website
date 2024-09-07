import React, { useState } from "react";

import "./style.css";
import { useLocation, useNavigate } from 'react-router-dom';


const PropertyDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const property = location.state?.property;
  
  
  const [selectedPeriod, setSelectedPeriod] = useState(6); // Default to 6 months
  const [showPopup, setShowPopup] = useState(false);
  

  const handlePayWithCircleClick = () => {
    navigate('/zero-security-deposit');
  };

  const handleBack = () => {
    navigate('/');
  };


  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
  };

  const parsePrice = (price) => parseInt(price.replace(/[₹,]/g, ""));
  const calculateTotal = () => {
    return selectedPeriod * parsePrice(property.price);
  };

  return (
    <div className="property-details">
      <div className="heading-container">
        <button onClick={handleBack} className="back-button">
          <span>&#9664;</span>
        </button>
        <h1 className="heading">Transaction Review</h1>
      </div>

      <div className="property-box">
        <img src={property.image} alt={property.title} />
        <div className="property-info">
          <h2>{property.title}</h2>
          <p className="property-location">{`📌 ${property.location}`}</p>
          <p className="property-rating">{`⭐ ${property.rating}`}</p>
          <p className="property-price">{`₹ ${property.price}`}</p>
        </div>
      </div>

      <div className="select-period">
        <h3>Select Period</h3>
        <div className="period-buttons">
          <button
            onClick={() => handlePeriodChange(3)}
            className={selectedPeriod === 3 ? "active" : ""}
          >
            3 months
          </button>
          <button
            onClick={() => handlePeriodChange(6)}
            className={selectedPeriod === 6 ? "active" : ""}
          >
            6 months
          </button>
          <button
            onClick={() => handlePeriodChange(9)}
            className={selectedPeriod === 9 ? "active" : ""}
          >
            9 months
          </button>
        </div>
      </div>

      <div className="payment-details">
        <h3>Payment Details</h3>
        <div className="payment-container">
          <p>
            Period time <span>{selectedPeriod} months</span>
          </p>
          <p>
            Monthly payment <span>₹{property.price}</span>
          </p>
          <p>
            Security Deposit <span>₹{parsePrice(property.price) * 0}</span>
          </p>
          <div className="total">
            <p>
              Total <span>₹{calculateTotal()}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="popup-container">
        {showPopup && (
          <div className="popup">
            <div className="popup-heading">
              <span className="heading-text">
                Rent at Zero Security Deposit
              </span>
              <span className="heading-star">★</span>
            </div>
            <div className="popup-content">
              <div className="success-icon">
                <span className="checkmark">&#10003;</span>
              </div>
              <div className="subsection">
                <span>Approved</span>
              </div>
              <ul className="popup-pointers">
                <li>
                  <span className="tick">&#10003;</span> New Rent offer: 80% of
                  current rent
                </li>
                <li>
                  <span className="tick">&#10003;</span> Zero Security deposit
                  move-in
                </li>
                <li>
                  <span className="tick">&#10003;</span> 3-Months salary cover
                </li>
              </ul>
            </div>
          </div>
        )}

        <div
          className="pay-button-container"
          onMouseEnter={() => setShowPopup(true)}
          onMouseLeave={() => setShowPopup(false)}
        >
          <button className="pay-button" onClick={handlePayWithCircleClick}>
            Pay with Circle
          </button>
          

        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
