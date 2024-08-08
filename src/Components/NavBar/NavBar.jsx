import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import profileImage from '../../Assets/profile.png';

const NavBar = () => {
  const navigate = useNavigate();

  function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  function deleteAllCookies() {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    }
  }
  const handleLogout = () => {
    deleteAllCookies()
    navigate('/welcomePage'); // Redirect to welcome page
  };
  const userName = getCookie('name');
  const carouselRef = useRef(null);

  return (
    <nav className="NavBar navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="NavBar-left navbar-brand">
          <h1>Hi {userName}</h1>
        </div>
        <div className="NavBar-right ml-auto d-flex align-items-center">
          {/* <img src={profileImage} alt="Profile" className="profile-image" /> */}
          <button className="logout-button btn btn-outline-light" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
