import React from 'react';
import './NavBar.css';
import profileImage from '../../Assets/profile.png';

const NavBar = () => {
  return (
    <div className='NavBar'>
      <div className='NavBar-left'>
        <h1>Hi, Akash</h1>
       
      </div>
      <div className='NavBar-right'>
        <img src={profileImage} alt='Profile' className='profile-image' />
      </div>
    </div>
  );
}

export default NavBar;
