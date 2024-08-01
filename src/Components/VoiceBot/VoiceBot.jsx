import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './VoiceBot.css';

const VoiceBot = () => {
  return (
    <div className="container-fluid Rectangles">
      <div className="row no-gutters">
     
        <div className="col-6 left-col d-flex flex-column align-items-center">
        <div class="col">
          <div className="rectangle largeLeft">
            <span className="rectangle-text">Social Emotional Learning</span>
          </div>
          </div>
          <div class="col">
          <div className="rectangle smallLeft">
            <span className="rectangle-text">AIDS Awareness</span>
          </div>
          </div>
        </div>
        <div className="col-6 right-col d-flex flex-column align-items-center">
        <div class="col">
          <div className="rectangle largeRight">
            <span className="rectangle-text">Stress Management</span>
          </div>
          </div>
          <div class="col">
          <div className="rectangle smallRight">
            <span className="rectangle-text">Mental Health</span>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default VoiceBot;
