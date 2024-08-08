import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faEye, faEyeSlash, faTimes } from '@fortawesome/free-solid-svg-icons'; // Import faTimes icon
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

  const setCookie = (name, value, days) => {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

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

        {showPopupForgot && (
          <div className="popforgot-overlay">
            <div className="popforgot-content">
              <div className="popforgot-header">
                <h5 className="popforgot-title">Forgot Password</h5>
                <FontAwesomeIcon
                  icon={faTimes}
                  className="popforgot-close-icon"
                  onClick={handlePopupToggle}
                />
              </div>
              <div className="popforgot-body text-center">
                <img src={forgotImage} alt="Reset Password" className="forgot-image" />
                <p className="mt-3">Please enter your email to reset your password.</p>
                <div className="field mb-3 position-relative">
                  <input
                    type="email"
                    className="form-control"
                    id="resetEmail"
                    placeholder="Email Address"
                    required
                  />
                  <FaEnvelope className="field-icon-right" />
                </div>
              </div>
              <div className="popforgot-footer">
                <button type="button" className="btn forgot-button-submit mb-3 rounded-5" onClick={handleSubmit}>Submit</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  export default Login;
