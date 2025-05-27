// src/components/UpcomingSchedule.jsx
import React from 'react';
import { upcomingAppointments } from '../../data/appointments';
import SimpleAppointmentCard from './SimpleAppointmentCard';

import '../../styles/UpcomingSchedule.css';

const UpcomingSchedule = () => (
  <div className="upcoming-schedule">
    <h2>The Upcoming Schedule</h2>
    {Object.entries(upcomingAppointments).map(([day, appointments], idx) => (
      <div key={idx} className="schedule-day">
        <h4>On {day}</h4>
        <div className="appointment-row">
          {appointments.map((a, i) => (
            <SimpleAppointmentCard key={i} {...a} />
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default UpcomingSchedule;
