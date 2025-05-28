import React from 'react';
import { Bell, Plus, Search } from 'lucide-react';
import '../styles/Header.css';

const Header = () => (
  <header className="header">
    <div className="top-section">
      <label className="search-wrapper">
        <Search className="search-icon" size={22} />
        <input className="search-input" type="text" placeholder="Search..." />
        <Bell className="bell-icon" size={24} />
      </label>

     
    </div>

    {/* Bottom section if you want later */}
    {/* <div className="bottom-section">
      <div className="logo">Dashboard<span className="dot"></span></div>
    </div> */}
  </header>
);

export default Header;
