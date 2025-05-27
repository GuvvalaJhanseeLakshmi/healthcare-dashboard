import React from 'react';
import '../../styles/ActivityFeed.css';

const ActivityFeed = () => {
  const data = [
    { value: 60, color: '#4f46e5' }, // Indigo
    { value: 40, color: '#0ea5e9' }, // Sky Blue
    { value: 75, color: '#a855f7' }, // Purple
    { value: 90, color: '#10b981' }, // Green
    { value: 50, color: '#f97316' }, // Orange
    { value: 30, color: '#ec4899' }, // Pink
    { value: 65, color: '#3b82f6' }, // Blue
  ];

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="activity-feed">
      <h4>Activity</h4>
      <p className="activity-subtext">7 appointments in this week</p>
      <div className="bar-chart">
        {data.map((item, i) => (
          <div key={i} className="bar">
            <div className="fill" style={{ height: `${item.value}%`, backgroundColor: item.color }}></div>
            <span>{days[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
