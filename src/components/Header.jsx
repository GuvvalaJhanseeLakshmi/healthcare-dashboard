// src/components/Header.jsx
import React from 'react';
import { Bell, Plus } from 'lucide-react';

const Header = () => (
  <header className="header">
    <div className="logo">Healthcare<span className="dot">.</span></div>
    <input type="text" placeholder="Search..." />
    <Bell />
    <div className="profile">👤</div>
    <Plus className="add-button" />
  </header>
);

export default Header;

