import React, { useState } from 'react';
import Home from './Home';
import PropertyDetails from "./PropertyDetails";
import ZeroSecurityDepositForm from './ZeroSecurityDepositForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FinalPage from './FinalPage';


const App = () => {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property-details" element={<PropertyDetails />} />
        <Route path="/zero-security-deposit" element={<ZeroSecurityDepositForm />} />
        <Route path="/Final-page" element={<FinalPage />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
