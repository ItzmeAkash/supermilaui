import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faEye, faEyeSlash, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FaEnvelope } from 'react-icons/fa';
import imageGoogle from '../../Assets/google.png';
import forgotImage from '../../Assets/register.jpg';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(String(email).toLowerCase());
};

const validatePassword = (password) => {
  return password.length >= 6;
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [showPopupForgot, setShowPopupForgot] = useState(false);
  const [showOtpPopup, setShowOtpPopup] = useState(false);
  const [showResetPopup, setShowResetPopup] = useState(false);
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const setCookie = (name, value, days) => {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast.error('Invalid email format');
      return;
    }

    if (!validatePassword(password)) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.message === 'Login successful') {
        toast.success('Login successful');
        setCookie('name', data.user.username, 7);
        setCookie('email', data.user.email, 7);
        navigate('/MainPage');
      } else if (data.message === 'User Not Found Please Register') {
        toast.error('User not found, redirecting to registration page');
        setTimeout(() => {
          navigate('/register');
        }, 1500);
      } else {
        toast.error(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      toast.error('An error occurred while logging in');
    }
  };

  const handlePopupToggle = () => setShowPopupForgot(!showPopupForgot);

  const handleForgotSubmit = async () => {
    try {
      const response = await fetch('https://backend.supermilla.com/resetPassword/request-reset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      console.log(data);

      if (data.message === 'OTP sent successfully') {
        toast.success('OTP sent successfully');
        setShowPopupForgot(false);
        setShowOtpPopup(true);
      } else {
        toast.error(data.message || 'Request failed');
      }
    } catch (error) {
      console.error('Error during password reset request:', error);
      toast.error('An error occurred while requesting password reset');
    }
  };

  const handleOtpSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8000/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp }),
      });

      const data = await response.json();

      if (data.message === 'OTP verified successfully') {
        toast.success('OTP verified successfully');
        setShowOtpPopup(false);
        setShowResetPopup(true);
      } else {
        toast.error('Invalid OTP');
      }
    } catch (error) {
      console.error('Error during OTP verification:', error);
      toast.error('An error occurred while verifying OTP');
    }
  };

  const handlePasswordReset = async () => {
    if (newPassword !== confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, newPassword }),
      });

      const data = await response.json();

      if (data.message === 'Password reset successfully') {
        toast.success('Password reset successfully');
        setShowResetPopup(false);
      } else {
        toast.error('Password reset failed');
      }
    } catch (error) {
      console.error('Error during password reset:', error);
      toast.error('An error occurred while resetting password');
    }
  };

  return (
    <div className="container d-flex flex-column vh-100">
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <nav className="navbar navbar-expand-lg navbar-light w-100">
        <Link to="/welcomeLogin" className="navbar-brand">
          <button className="back-button ml-2" type="button">
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
        </Link>
      </nav>
      <div className="content-wrapper d-flex flex-column justify-content-center align-items-center">
        <div className="text-container text-center mb-3">
          <h1 className="main-text">Let's Get</h1>
          <h2 className="sub-text">Started</h2>
        </div>
        <form className="form-container d-flex flex-column align-items-center mt-2" onSubmit={handleSubmit}>
          <div className="field mb-3 position-relative">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FaEnvelope className="field-icon-right" />
          </div>
          <div className="field mb-3 position-relative">
            <input
              type={showPassword ? 'text' : 'password'}
              className="form-control"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="password-toggle-icon" onClick={() => setShowPassword(!showPassword)}>
              <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
            </span>
          </div>

          {!showPopupForgot && (
            <div className="form-check-container d-flex align-items-center justify-content-between mb-3 w-100">
              <div className="d-flex align-items-center">
                <input
                  type="checkbox"
                  className="form-check-input register-check-box"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  required
                />
                <label className="form-check-label ms-4" htmlFor="rememberMe">Remember Me</label>
              </div>
              <a onClick={handlePopupToggle} className="text-primary">
                <p className="forgot-password">Forgot Password?</p>
              </a>
            </div>
          )}

          <div className="button-container">
            <button type="submit" className="btn button-submit mb-3 rounded-5">Login</button>
            <div className="or-container mb-3">Or</div>
            <button className="btn btn-google d-flex align-items-center rounded-5">
              <img src={imageGoogle} alt="Google" className="me-2" style={{ width: '20px' }} />
              <span className="btn-google-text rounded-5 mx-auto">Sign in with Google</span>
            </button>
          </div>
        </form>
      </div>

      {/* Forgot Password Popup */}
      {showPopupForgot && (
        <div className="popforgot-overlay">
          <div className="popforgot-content">
            <div className="popforgot-header">
              <h5 className="popforgot-title">Forgot Password</h5>
              <FontAwesomeIcon
                icon={faTimes}
                className="popforgot-close-icon"
                onClick={() => setShowPopupForgot(false)}
              />
            </div>
            <div className="popforgot-body text-center">
              <img src={forgotImage} alt="Forgot Password" className="forgot-image mb-3" />
              <p>Enter your email address to reset your password.</p>
              <div className="field mb-3 position-relative">
                <input
                  type="email"
                  className="form-control"
                  id="forgotEmail"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <FaEnvelope className="field-icon-right" />
              </div>
            </div>
            <div className="popforgot-footer">
              <button type="button" className="btn forgot-button-submit mb-3 rounded-5" onClick={handleForgotSubmit}>Submit</button>
            </div>
          </div>
        </div>
      )}

      {/* OTP Popup */}
      {showOtpPopup && (
        <div className="popforgot-overlay">
          <div className="popforgot-content">
            <div className="popforgot-header">
              <h5 className="popforgot-title">Enter OTP</h5>
              <FontAwesomeIcon
                icon={faTimes}
                className="popforgot-close-icon"
                onClick={() => setShowOtpPopup(false)}
              />
            </div>
            <div className="popforgot-body text-center">
              <p>Please enter the OTP sent to your email.</p>
              <div className="field mb-3 position-relative">
                <input
                  type="text"
                  className="form-control"
                  id="otp"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="popforgot-footer">
              <button type="button" className="btn forgot-button-submit mb-3 rounded-5" onClick={handleOtpSubmit}>Submit OTP</button>
            </div>
          </div>
        </div>
      )}

      {/* Reset Password Popup */}
      {showResetPopup && (
        <div className="popforgot-overlay">
          <div className="popforgot-content">
            <div className="popforgot-header">
              <h5 className="popforgot-title">Reset Password</h5>
              <FontAwesomeIcon
                icon={faTimes}
                className="popforgot-close-icon"
                onClick={() => setShowResetPopup(false)}
              />
            </div>
            <div className="popforgot-body text-center">
              <p>Please enter your new password.</p>
              <div className="field mb-3 position-relative">
                <input
                  type="password"
                  className="form-control"
                  id="newPassword"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>
              <div className="field mb-3 position-relative">
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="popforgot-footer">
              <button type="button" className="btn forgot-button-submit mb-3 rounded-5" onClick={handlePasswordReset}>Reset Password</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
