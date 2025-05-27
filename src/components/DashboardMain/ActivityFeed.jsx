// src/components/ActivityFeed.jsx
import React from 'react';
import '../../styles/ActivityFeed.css';

const ActivityFeed = () => {
  const data = [60, 40, 75, 90, 50, 30, 65]; // Example heights in percent

  return (
    <div className="activity-feed">
      <h4>Activity</h4>
      <p className="activity-subtext">7 appointments this week</p>
      <div className="bar-chart">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
          <div key={i} className="bar">
            <div className="fill" style={{ height: `${data[i]}%` }}></div>
            <span>{day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
