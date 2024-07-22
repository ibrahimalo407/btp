// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import { ThemeProvider, useTheme } from './ThemeContext';
import ProjectsPage from './components/ProjectsPage';
import ProjectList from './components/ProjectList';
import ProjectDetails from './components/ProjectDetails';
import ProjectForm from './components/ProjectForm';
import ResourceManagement from './components/ResourceManagement';
import ExpenseTracking from './components/ExpenseTracking';
import SubcontractorManagement from './components/SubcontractorManagement';
import Communication from './components/Communication'; 
import Chat from './components/Chat';

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

const App = () => {
  const theme = useCustomTheme();

  return (
    <ThemeProvider>
      <MuiThemeProvider theme={theme}>
        <Router>
          <div className="app">
            <Header />
            <Sidebar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/projects" element={<ProjectList />} />
                <Route path="/projects/:projectId" element={<ProjectDetails />} />
                <Route path="/projects/:projectId/edit" element={<ProjectForm />} />
                <Route path="/projects/new" element={<ProjectForm />} />
                <Route path="/resources" element={<ResourceManagement />} />
                <Route path="/expenses" element={<ExpenseTracking />} />
                <Route path="/subcontractors" element={<SubcontractorManagement />} />
                <Route path="/communication" element={<Communication />} /> 
                <Route path="/chat" element={<Chat />} />
              </Routes>
            </main>
          </div>
        </Router>
      </MuiThemeProvider>
    </ThemeProvider>
  );
};

export default App;
