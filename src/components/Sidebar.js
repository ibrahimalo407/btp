// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import './Sidebar.css';

const Sidebar = () => {
  const { darkMode, customColor } = useTheme();

  return (
    <div className={`sidebar ${darkMode ? 'dark' : ''}`}>
      <div className="sidebar-menu">
        <Link to="/">Accueil</Link>
        <Link to="/projects">Projets</Link>
        <Link to="/resources">Ressources</Link>
        <Link to="/expenses">Dépenses</Link>
        <Link to="/subcontractors">Sous-traitants</Link>
        <Link to="/communication">Communication</Link>
        <Link to="/chat">Chat</Link>

      </div>
      <div className="sidebar-theme-switch">
        <div className="color-picker" style={{ backgroundColor: customColor }}></div>
      </div>
    </div>
  );
};

export default Sidebar;
