import React from "react";
import { useNavigate } from 'react-router-dom';
import "./style.css";

const ZeroSecurityDepositForm = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  const handleFinal = () =>{
    navigate('/Final-Page');
  };
  return (
    <div className="form-popup">
    <div className="header">
      <div className="title">Circle</div>
      <div className="subtitle">App</div>
    </div>
    <div className="subheading">
      Rent at <span className="highlight">Zero</span> security deposit
    </div>
    <p className="info-text">Set-up No Cost EMI in 3 steps</p>
    <div className="steps-container">
      <div className="step">
        <div className="step-number">1</div>
        <div className="step-details">
          <h3 className="step-title">Eligibility Check</h3>
          <p className="step-subtitle">
            <span className="icon">📋</span> Basic details
          </p>
          <p className="step-subtitle">
            <span className="icon">🔧</span> Work details
          </p>
        </div>
      </div>
      <div className="step">
        <div className="step-number">2</div>
        <div className="step-details">
          <h3 className="step-title">Setup AutoPay</h3>
          <p className="step-subtitle">
            <span className="icon">📋</span> Basic details
          </p>
          <p className="step-subtitle">
            <span className="icon">🔧</span> Work details
          </p>
        </div>
      </div>
      <div className="step">
        <div className="step-number">3</div>
        <div className="step-details">
          <h3 className="step-title">Move-in</h3>
        </div>
      </div>
    </div>
    <div className="terms">
        <input type="checkbox" id="terms" />
        <label htmlFor="terms" className="terms-label">
          By clicking this, you approve our{" "}
          <a href="#" className="link">terms and conditions</a> and{" "}
          <a href="#" className="link">privacy policy</a>.
        </label>
    </div>

     
    <div className="cta">
      <button className="cta-button" onClick={handleFinal}>Get Started</button>
      <button className="cta-back-button" onClick={handleBack}>Back</button>
    </div>
  </div>
  );
};

export default ZeroSecurityDepositForm;