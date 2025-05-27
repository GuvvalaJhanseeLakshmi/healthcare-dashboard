// src/components/Header.jsx
import React from 'react';
import { Bell, Plus, Search } from 'lucide-react';

const Header = () => (
  <header className="header">
    <div className="top-section">
      <div className="search-wrapper">
        <Search className="search-icon" size={18} />
        <input className="search-input" type="text" placeholder="Search..." />
      </div>
      <Bell className="bell-icon" size={20} />
    </div>

    <div className="bottom-section">
      <div className="logo">Dashboard<span className="dot">.</span></div>
      <div className="right-section">
        <div className="profile">👤</div>
        <Plus className="add-button" />
      </div>
    </div>
  </header>
);

export default Header;
