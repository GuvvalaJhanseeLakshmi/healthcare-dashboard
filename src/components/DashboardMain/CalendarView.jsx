import React from 'react';
import '../../styles/CalendarView.css';
import { Plus } from 'lucide-react';

const CalendarView = () => {
  const week = [
    { day: 'Mon', date: 25, times: ['10:00', '11:00', '12:00'], highlight: [] },
    { day: 'Tue', date: 26, times: ['08:00', '09:00', '10:00'], highlight: ['09:00'], highlightColor: 'blue' },
    { day: 'Wed', date: 27, times: ['12:00', '....', '13:00'], highlight: [] },
    { day: 'Thu', date: 28, times: ['10:00', '11:00', '....'], highlight: ['10:00', '11:00'], highlightColor: 'gray' },
    { day: 'Fri', date: 29, times: ['....', '14:00', '16:00'], highlight: [] },
    { day: 'Sat', date: 30, times: ['12:00', '14:00', '15:00'], highlight: ['12:00'], highlightColor: 'gray' },
    { day: 'Sun', date: 31, times: ['09:00', '10:00', '11:00'], highlight: ['09:00'], highlightColor: 'gray' },
  ];

  return (
    <div className="calendar-block">
      {/* Icons in top-right */}
      <div className="right-section">
        <div className="profile">👤</div>
        <div className="add-button">
          <Plus size={18} />
        </div>
      </div>

      <h3>October 2021</h3>

      <div className="calendar-row days">
        {week.map((item, index) => (
          <div key={index} className="calendar-cell">{item.day}</div>
        ))}
      </div>

      <div className="calendar-row dates">
        {week.map((item, index) => (
          <div key={index} className="calendar-cell">{item.date}</div>
        ))}
      </div>

      <div className="calendar-row times">
        {week.map((item, index) => (
          <div key={index} className="calendar-cell">
            {item.times.map((time, idx) => {
              const isHighlighted = item.highlight.includes(time);
              const colorClass =
                isHighlighted && item.highlightColor === 'blue'
                  ? 'highlight-blue'
                  : isHighlighted
                  ? 'highlight-gray'
                  : '';
              return (
                <div key={idx} className={`time-slot ${colorClass}`}>
                  {time}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
