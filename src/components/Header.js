// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material'; // Assurez-vous d'importer les composants nécessaires depuis MUI
import MenuIcon from '@mui/icons-material/Menu';
import SidebarToggleIcon from '@mui/icons-material/MenuOpen';
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Importez l'icône pour le thème clair
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Importez l'icône pour le thème sombre
import { useTheme } from '../ThemeContext';
import './Header.css';

const Header = () => {
  const { darkMode, toggleDarkMode, toggleCustomColor } = useTheme();

  const handleColorChange = (color) => {
    toggleCustomColor(color);
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Dashboard BTP
        </Typography>
        <Button color="inherit" onClick={() => handleColorChange('#e74c3c')}>
          Red
        </Button>
        <Button color="inherit" onClick={() => handleColorChange('#3498db')}>
          Blue
        </Button>
        <IconButton edge="end" color="inherit" aria-label="toggle-sidebar">
          <SidebarToggleIcon />
        </IconButton>
        <IconButton edge="end" color="inherit" aria-label="toggle-theme" onClick={toggleDarkMode}>
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
