import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FaEnvelope } from 'react-icons/fa';
import imageGoogle from '../../Assets/google.png';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., API call)
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
    // After successful login, navigate to another page
    navigate('/MainPage');
  };

  return (
    <div className="container d-flex flex-column vh-100">
      <ToastContainer />
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
          <div className="form-check-container d-flex align-items-center mb-3">
            <input type="checkbox" className="form-check-input register-check-box" id="terms-login" required />
            <label className="form-check-label ms-4" htmlFor="rememberMe">Remember Me</label>
          </div>
          <div className="button-container">
            <button type="submit" className="btn button-submit mb-3 rounded-5">Login</button>
            <div className="or-container mb-3">Or</div>
            <button className="btn btn-google d-flex align-items-center rounded-5">
              <img src={imageGoogle} alt="Google" className="me-2" style={{ width: '20px' }} />
              <span className="btn-google-text rounded-5 mx-auto rounded-5">Sign in with Google</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
