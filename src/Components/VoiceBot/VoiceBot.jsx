import React from 'react';
import './VoiceBot.css';

const VoiceBot = () => {
  return (
    <div className="container Rectangles">
      <div className="row">
        <div className="col-12 col-md-6 d-flex flex-column align-items-center">
          <div className="rectangle largeLeft">
            <span className="rectangle-text">Social Emotional Learning</span>
          </div>
          <div className="rectangle smallLeft">
            <span className="rectangle-text">AIDS Awareness</span>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex flex-column align-items-center">
          <div className="rectangle largeRight">
            <span className="rectangle-text">Stress Management</span>
          </div>
          <div className="rectangle smallRight">
            <span className="rectangle-text">Mental Health</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VoiceBot;
