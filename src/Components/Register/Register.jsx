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
      <div className="popup-inner-top">
      <span>Terms and Conditions</span>
  <span>&</span>
  <span>Privacy and Policy</span>
      </div>
      <div className="popup-content">
      <div className="popup-content">
              <h3>Terms and Conditions w.e.f 13 January 2024</h3>
              <h4>1. Acceptance of Terms</h4>
              <p>By accessing or using the COPUBLICA Voicebot Service ("Service"), you agree to comply with and be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use our Service.</p>
              <h4>2. Privacy Policy Integration</h4>
              <p>Your use of the Service is also governed by our Privacy Policy, which is incorporated by reference. Please review our Privacy Policy(supermilla.com/privacy-policy) to understand how we collect, use, and protect your personal data.</p>
              <h4>3. User Consent and Data Collection</h4>
              <p>Consent for data collection is implied through service usage without explicit opt-in. By using our Service, users acknowledge and agree to the terms outlined in our Privacy Policy. We collect various types of personal data, as detailed in the Privacy Policy, to provide and improve our Service.</p>
              <h4>4. Data Access and Retention</h4>
              <p>Only authorized employees of COPUBLICA have access to user data. We retain personal data for 1 year to provide the Service, train our AI, generate analytics, and comply with legal obligations. After 1 year, data is anonymized.</p>
              <h4>5. User Rights</h4>
              <p>Users have the right under GDPR to access or delete the personal data we hold. Contact <a href="mailto:support@copublica.dk">support@copublica.dk</a> to make requests.</p>
              <h4>6. Data Security</h4>
              <p>We implement appropriate technical and organizational measures to protect user data, including encryption, access controls, auditing, and regular security reviews.</p>
              <h4>7. Marketing Communications</h4>
              <p>Users are automatically subscribed to receive marketing communications. To opt-out, users need to contact our support team at <a href="mailto:support@copublica.dk">support@copublica.dk</a> for prompt assistance.</p>
              <h4>8. User Profiling</h4>
              <p>We use data for detailed user profiling and automated decisions to enhance user experiences. This includes tailoring interactions based on user preferences and behavior patterns.</p>
              <h4>9. Children's Privacy</h4>
              <p>Our Service is designed for users of all ages, including children. We are committed to complying with child privacy laws and implementing measures to ensure the safety and protection of young users.</p>
              <h4>10. Disclosure of Data</h4>
              <p>We may disclose data if required by law to comply with legal processes, regulatory requirements, or law enforcement requests, prioritizing user privacy and protection.</p>
              <h4>11. Policy Updates</h4>
              <p>If we make changes to these Terms or the Privacy Policy, active registered users will be notified by email. We encourage periodic review of these documents.</p>
              <h4>12. Contact Information</h4>
              <p>For any inquiries or concerns related to these Terms or our Privacy Policy, please email <a href="mailto:voicebot@copublica.dk">voicebot@copublica.dk</a>.</p>

              <h2>Privacy Policy w.e.f 13rd January 2024</h2>
              <p>This privacy policy discloses how COPUBLICA collects, uses, shares, and protects the personal data of users of our voicebot service.</p>
              <h4>Data Collection</h4>
              <p>We collect the following types of personal data when you use our service:</p>
              <ul>
                <li>- Usage data such as session duration, number of messages, bot interactions</li>
                <li>- Contact details such as name, email address, phone number</li>
                <li>- Voice recordings which are transcribed into text by our service</li>
              </ul>
              <h4>Data is collected via:</h4>
              <ul>
                <li>- Direct input from users when setting up an account and using features</li>
                <li>- Cookies, analytics tools, and other technologies to track usage</li>
                <li>- Third-party services linked to our voicebot</li>
              </ul>
              <p>This data allows us to provide and improve our service, follow legal obligations, and send marketing communications.</p>
              <h4>Data Access and Retention</h4>
              <p>Only authorized employees of COPUBLICA have access to user data. We retain personal data for 1 year in order to provide our service, train our AI, generate analytics, and comply with legal obligations. After 1 year, data is anonymized.</p>
              <h4>User Rights</h4>
              <p>Users have the right under GDPR to access, edit, delete, restrict processing of, and receive copies of the personal data we hold. Contact <a href="mailto:support@copulica.dk">support@copulica.dk</a> to make requests.</p>
              <h4>Data Security</h4>
              <p>We implement appropriate technical and organizational measures to protect user data, including encryption, access controls, auditing, and regular security reviews.</p>
              <h4>Voice Data</h4>
              <p>Voice recordings from our service are automatically transcribed into text. The text transcriptions are stored, but the original voice recordings are deleted after transcription is complete.</p>
              <h4>Marketing Communications</h4>
              <p>Users are automatically subscribed to receive marketing communications when signing up for our service. To opt-out, users need to contact our support team at <a href="mailto:support@copublica.dk">support@copublica.dk</a> for prompt assistance.</p>
              <h4>Disclosure of Data</h4>
              <p>We may disclose user data if required to by law to comply with legal process, regulatory requirements, or law enforcement requests.</p>
              <h4>Policy Updates</h4>
              <p>We reserve the right to update this Privacy Policy at any time to reflect changes to our practices or for legal, regulatory, or operational reasons. We will notify active registered users of any changes by email.</p>
              <h4>Contact Information</h4>
              <p>For any inquiries or concerns related to this Privacy Policy, please email <a href="mailto:voicebot@copublica.dk">voicebot@copublica.dk</a>.</p>
            </div>
      </div>
      <div className="popup-actions container">
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
