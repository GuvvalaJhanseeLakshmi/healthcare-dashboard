// src/components/SimpleAppointmentCard.jsx
import React from 'react';
import { Heart, Eye, Activity, Brain } from 'lucide-react';

const iconMap = {
  heart: <Heart size={16} className="icon-red" />,
  eye: <Eye size={16} className="icon-blue" />,
  activity: <Activity size={16} className="icon-green" />,
  brain: <Brain size={16} className="icon-purple" />
};

const SimpleAppointmentCard = ({ title, time, icon }) => (
  <div className="appointment-chip">
    {iconMap[icon]}
    <span>{title}</span>
    <small>{time}</small>
  </div>
);

export default SimpleAppointmentCard;
