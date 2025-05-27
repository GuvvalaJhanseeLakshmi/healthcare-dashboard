// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { navLinks } from '../data/navigationLinks';
import { FiMenu } from 'react-icons/fi';
import '../styles/sidebar.css';

const Sidebar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Close sidebar when clicking a nav link (on mobile)
  const handleLinkClick = () => {
    if (isMobileOpen) setIsMobileOpen(false);
  };

  return (
    <>
      {/* Topbar for mobile */}
      <div className="mobile-topbar">
        <button
          className="menu-button"
          aria-label="Toggle menu"
          onClick={() => setIsMobileOpen((prev) => !prev)}
        >
          <FiMenu size={24} />
        </button>
        <h1 className="mobile-logo">
          <span className="health-text">Health</span>
          <span className="care-text">care.</span>
        </h1>
      </div>

      {/* Sidebar */}
      <aside className={`sidebar ${isMobileOpen ? 'open' : ''}`}>
        <h1 className="sidebar-logo">
          <span className="health-text">Health</span>
          <span className="care-text">care.</span>
        </h1>
        <h3>General</h3>
        <ul>
          {navLinks.map((link, idx) => (
            <li
              key={link.id || idx}
              className={link.highlight ? 'highlight' : ''}
              onClick={handleLinkClick}
              tabIndex={0}
              role="button"
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleLinkClick();
                }
              }}
            >
              {link.icon && <span className="icon">{link.icon}</span>}
              <span>{link.name}</span>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
