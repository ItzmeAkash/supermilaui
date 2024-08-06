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
import axiosInstance from '../../axiosInstance'; // Import the axios instance

// Utility function to set a cookie
const setCookie = (name, value, days) => {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
};

// Utility function to validate email
const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address.', {
        autoClose: 7000,
        toastId: "error",
        position: "top-center",
      });
      return;
    }

    if (password.length < 8) {
      toast.error('Password must be at least 8 characters long.', {
        autoClose: 7000,
        toastId: "error",
        position: "top-center",
      });
      return;
    }

    try {
      const response = await axiosInstance.post("/login", formData);
      console.log(response.data);
      if (response.data.message === 'Login successful') {
        setCookie('name', response.data.user.username, 7);
        setCookie('email', response.data.user.email, 7);
        navigate("/MainPage"); // Redirect to main page
      } else {
        toast.success(response.data.message, {
          autoClose: 7000,
          toastId: "success",
          position: "top-center",
        });
      }
    } catch (error) {
      console.error('There was an error!', error);
      toast.error(error.response?.data?.message || 'An error occurred', {
        autoClose: 7000,
        toastId: "error",
        position: "top-center",
      });
    }
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
              value={formData.email} // Corrected value prop
              onChange={handleChange}
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
              value={formData.password} // Corrected value prop
              onChange={handleChange}
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
          <button type="submit" className="btn button-submit mb-3">Login</button>
        </form>
        <div className="or-container mb-3">Or</div>
        <button className="btn btn-google d-flex align-items-center">
          <img src={imageGoogle} alt="Google" className="me-2" style={{ width: '20px' }} />
          <span className="btn-google-text mx-auto">Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
