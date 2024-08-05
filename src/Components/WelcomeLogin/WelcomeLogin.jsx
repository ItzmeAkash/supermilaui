import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png';
import imageGoogle from '../../Assets/google.png'; 
import './WelcomeLogin.css';

const WelcomeLogin = () => {
  return (
    <div className='d-flex vh-100'>
      <div className='container my-auto text-center'>
        <div className="row justify-content-center">
          <div className="col-12">
            <img src={logo} alt="Logo" className="img-fluid mb-3" style={{ width: '56%' }} />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 mt-2">
            <Link to="/login" className="button py-2 rounded-5 mb-3 d-flex align-items-center justify-content-center">
              Login
            </Link>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <Link to="/register" className="button py-2 rounded-5 d-flex align-items-center justify-content-center">
              Register
            </Link>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 line"></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <Link to="/register" className="button py-2 rounded-5 button-with-image d-flex align-items-center justify-content-center ">
              <img src={imageGoogle} alt="Image Below Line" className="img-fluid m-2 " style={{ width: '24px', height: '24px' }} />
              Sign in with Google
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeLogin;
