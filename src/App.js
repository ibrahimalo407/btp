// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import { ThemeProvider, useTheme } from './ThemeContext'; // Assurez-vous que le chemin est correct ici

const App = () => {
  return (
    <ThemeProvider>
      <MuiThemeProvider theme={createTheme(useCustomTheme)}>
        <Router>
          <div className="app">
            <Header />
            <Sidebar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                {/* Ajoutez d'autres routes ici */}
              </Routes>
            </main>
          </div>
        </Router>
      </MuiThemeProvider>
    </ThemeProvider>
  );
};

export default App;

// Custom Theme
const useCustomTheme = () => {
  const { darkMode } = useTheme();

  return createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#dc004e',
      },
    },
  });
};
