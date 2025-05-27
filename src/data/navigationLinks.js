// src/data/navigationLinks.js
import { TbLayoutGrid } from 'react-icons/tb'; // ✅ This is your Dashboard icon
import {
  FiClock,
  FiCalendar,
  FiUserCheck,
  FiBarChart2,
  FiMessageCircle,
  FiPhone,
  FiSettings
} from 'react-icons/fi';

export const navLinks = [
  { name: "Dashboard", icon: <TbLayoutGrid />, highlight: true },  // ✅ Here!
  { name: "History", icon: <FiClock /> },
  { name: "Calendar", icon: <FiCalendar /> },
  { name: "Appointments", icon: <FiUserCheck /> },
  { name: "Statistics", icon: <FiBarChart2 /> },
  { name: "Tests", icon: null }, // No icon
  { name: "Chat", icon: <FiMessageCircle /> },
  { name: "Support", icon: <FiPhone /> },
  { name: "Setting", icon: <FiSettings /> },
];
