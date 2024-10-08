import React from 'react';
import compnayLogo from '../../Assets/COPUBLICAlogo.png';
import './SplashScreen.css'; 

const SplashScreen = () => {
  return (
    <div className='container-fluid d-flex justify-content-center align-items-center vh-100'>
      <div className='card border-0'>
        <div className='card-body text-center'>
          <div className='p-4 rounded-circle d-inline-block'>
            <img src={compnayLogo} alt='Logo' className='img-fluid splash-logo' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
