import React from 'react';
import { healthIndicators } from '../../data/healthData';
import '../../styles/HealthStatusCards.css';

const HealthStatusCards = () => (
  <div className="appointment-cards">
    {healthIndicators.map((item, idx) => (
      <div
        key={idx}
        className={`appointment-card ${item.type === 'primary' ? 'blue-bg' : 'gray-bg'}`}
      >
        <div className="card-info">
          <p className={`title ${item.type === 'gray' ? 'bold-black' : ''}`}>
            {item.name} <span className="icon">{item.icon}</span>
          </p>
          <p className={`time ${item.type === 'gray' ? 'black-text' : ''}`}>{item.time}</p>
          <p className={`doctor ${item.type === 'gray' ? 'black-text' : ''}`}>{item.doctor}</p>
        </div>
      </div>
    ))}
  </div>
);

export default HealthStatusCards;
