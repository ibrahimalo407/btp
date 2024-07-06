// src/ThemeContext.js
import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [customColor, setCustomColor] = useState('#3498db'); // Couleur par défaut

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleCustomColor = (color) => {
    setCustomColor(color);
  };

  const theme = {
    darkMode,
    toggleDarkMode,
    customColor,
    toggleCustomColor,
  };

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};
  