import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import profileImage from '../../Assets/profile.png';

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any logout logic here (e.g., clearing user data, tokens, etc.)
    navigate('/welcomePage'); // Redirect to welcome page
  };

  return (
    <nav className="NavBar navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="NavBar-left navbar-brand">
          <h1>Hi, Akash</h1>
        </div>
        <div className="NavBar-right ml-auto d-flex align-items-center">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <button className="logout-button btn btn-outline-light" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
