// src/components/Header.jsx
import React from 'react';
import { Bell, Plus } from 'lucide-react';
import '../styles/Header.css';

const Header = () => (
  <header className="header">
    <div className="logo">Dashboard<span className="dot">.</span></div>
    <input className="search-input" type="text" placeholder="Search..." />
    <div className="right-section">
      <Bell className="icon" />
      <div className="profile">👤</div>
      <Plus className="add-button" />
    </div>
  </header>
);

export default Header;
