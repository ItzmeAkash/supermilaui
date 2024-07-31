import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import profileImage from '../../Assets/profile.png';

const NavBar = () => {
  return (
    <nav className="NavBar navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="NavBar-left navbar-brand">
          <h1>Hi, Akash</h1>
        </div>
        <div className="NavBar-right navbar-nav ml-auto">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
