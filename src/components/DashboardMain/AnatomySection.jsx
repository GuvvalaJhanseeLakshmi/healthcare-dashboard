import React from 'react';
import '../../styles/AnatomySection.css';

const AnatomySection = () => (
  <div className="anatomy-section-wrapper">
    <div className="anatomy-main">
      <div className="anatomy-left">
        <div className="image-container">
          <img src="./humanbody.jpg" alt="Human Anatomy" className="anatomy-img" />
          <div className="badge heart">❤️ Healthy Heart</div>
          <div className="badge leg">🦵 Healthy Leg</div>
        </div>
      </div>

      <div className="anatomy-right">
        <div className="organ-card lungs">
          <div className="organ-icon">🫁 Lungs</div>
          <div className="organ-date">30 Oct, 2021</div>
          <div className="organ-line lungs"></div>
        </div>
        <div className="organ-card teeth">
          <div className="organ-icon">🦷 Teeth</div>
          <div className="organ-date">28 Oct, 2021</div>
          <div className="organ-line teeth"></div>
        </div>
        <div className="organ-card bone">
          <div className="organ-icon">🦴 Bone</div>
          <div className="organ-date">24 Oct, 2021</div>
          <div className="organ-line bone"></div>
        </div>
      </div>
    </div>
  </div>
);

export default AnatomySection;
