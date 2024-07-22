// src/ThemeContext.js
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [customColor, setCustomColor] = useState('#1976d2'); // Couleur primaire par défaut

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const setThemeColor = (color) => {
    setCustomColor(color);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, customColor, setThemeColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
