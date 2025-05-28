import React from 'react';
import '../../styles/ActivityFeed.css';

const ActivityFeed = () => {
  // Days: 7 days Mon-Sun
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  
  const data = days.map((day, i) => [
    { value: 40, color: '#d1d5db' },
    { value: 50, color: 'rgb(148, 241, 232)' },

    { value: 70, color: 'linear-gradient(to top, #3b82f6, rgb(148, 241, 232))' }, // reversed gradient
    {
      value: 40,
      color: i % 2 === 0 ? '#3b82f6' : '#d1d5db', // even index: blue, odd: gray
    },
    
  ]);

  return (
    <div className="activity-feed">
      <div className="activity-header">
        <h4>Activity</h4>
        <p className="activity-subtext">3 appointments in this week</p>
      </div>
      <div className="bar-chart">
        {data.map((daySegments, i) => (
          <div key={i} className="bar">
            <div className="bar-group">
              {daySegments.map((seg, idx) => (
                <div
                  key={idx}
                  className="bar-line"
                  style={{
                    height: `${seg.value}%`,
                    background: seg.color,
                  }}
                ></div>
              ))}
            </div>
            <span>{days[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
