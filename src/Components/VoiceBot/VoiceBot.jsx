import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './VoiceBot.css';

const VoiceBot = () => {
  return (
    <div className='container '>
      <div className='row g-1'>
        <div className='col-6 mt-4 '>
          <div className='card left-card large-card justify-content-center align-items-center '>
          Social Emotional Learning
          </div>
          <div className='card left-card small-card justify-content-center align-items-center'>
          AIDS Awareness
          </div>
        </div>
        <div className='col-6 mt-4'>
          <div className='card right-card small-card justify-content-center align-items-center '>
          Mental Health
          </div>
          <div className='card right-card large-card justify-content-center align-items-center'>
          Stress Management
          </div>

        </div>

        <div className='col-6'>
        <div className='card full-card justify-content-center align-items-center '>
          Mmc
          </div>

        </div>
      </div>
    </div>
  );
}

export default VoiceBot;
