import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import './Register.css';
import registerMainImage from '../../Assets/registration.png';

const Register = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);

  const handlePopupToggle = () => setShowPopup(!showPopup);

  const handleTermsChange = (e) => {
    setTermsChecked(e.target.checked);
  };

  return (
    <div className="container d-flex flex-column vh-100">
      <nav className="navbar navbar-expand-lg navbar-light w-100">
        <Link to="/welcomeLogin" className="navbar-brand">
          <button className="back-button ml-2" type="button">
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
        </Link>
      </nav>
      <div className="content-wrapper-register d-flex flex-column justify-content-center align-items-center">
        <img src={registerMainImage} className="register-main-image img-fluid mt-3 mx-auto" alt="Descriptive Alt Text" />
        <div className="text-container text-center mt-3">
          <h1 className="main-text">Get Started</h1>
          <p className="text-black">by creating a <span className="text-red">free account</span></p>
        </div>
        <form className="form-container d-flex flex-column align-items-center mt-2">
          <div className="field mb-3 position-relative">
            <input type="text" className="form-control" id="fullName" placeholder="Full Name" required />
            <FontAwesomeIcon icon={faUser} className="icon-right" />
          </div>
          <div className="field mb-3 position-relative">
            <input type="email" className="form-control" id="email" placeholder="Email Address" required />
            <FontAwesomeIcon icon={faEnvelope} className="icon-right" />
          </div>
          <div className="field mb-3 position-relative">
            <input type="password" className="form-control" id="password" placeholder="Password" required />
            <FontAwesomeIcon icon={faLock} className="icon-right" />
          </div>
          <div className="field mb-3 position-relative">
            <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" required />
            <FontAwesomeIcon icon={faLock} className="icon-right" />
          </div>
          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input register-check-box" id="terms" checked={termsChecked} onChange={handleTermsChange} required />
            <label className="form-check-label-register" htmlFor="terms">
              By checking the box you agree to our <a href="#" onClick={handlePopupToggle}><span className='text-red'>Terms</span> and <span className='text-red'>Conditions</span></a>
            </label>
          </div>
          <button type="submit" className="btn button-submit mb-3">Sign Up</button>
          <div className="login-link mt-2">
            <p className="text-center text-register">Already registered? <Link to="/login" className="text-primary">Login</Link></p>
          </div>
        </form>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Terms and Conditions</h2>
            <div className="popup-content">
              <p>Here are the terms and conditions...</p>
              <p>Here are the terms and conditions...</p>
              <p>Here are the terms and conditions...</p>
              <p>Here are the terms and conditions...</p>
              <p>Here are the terms and conditions...</p>
              <p>Here are the terms and conditions...</p>
              <p>Here are the terms and conditions...</p>
              <p>Here are the terms and conditions...</p>
              <p>Here are the terms and conditions...</p>
              <p>Here are the terms and conditions...</p>
              <p>Here are the terms and conditions...</p>
              <p>Here are the terms and conditions...</p>
              <p>Here are the terms and conditions...</p>

              {/* Add more content here if needed */}
            </div>
            <div className="popup-actions">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="popupTerms" checked={termsChecked} onChange={handleTermsChange} />
                <label className="form-check-label" htmlFor="popupTerms">I agree to the terms and conditions</label>
              </div>
              <button onClick={handlePopupToggle} className="btn accpet-button mt-3">Accept</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Register;
