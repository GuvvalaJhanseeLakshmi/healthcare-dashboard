import React from 'react';

import '../styles/DashboardMainContent.css';

import AnatomySection from './DashboardMain/AnatomySection';
import HealthStatusCards from './DashboardMain/HealthStatusCards';
import CalendarView from './DashboardMain/CalendarView';
import UpcomingSchedule from './DashboardMain/UpcomingSchedule';
import ActivityFeed from './DashboardMain/ActivityFeed';

const DashboardMainContent = () => (
  <div className="dashboard-layout">
    <div className="left-panel">
      <h2 className="dashboard-title">Dashboard</h2>
      <AnatomySection />
      <ActivityFeed />
    </div>
    <div className="right-panel">
      <CalendarView />
      <HealthStatusCards />
      <UpcomingSchedule />
    </div>
  </div>
);

export default DashboardMainContent;
