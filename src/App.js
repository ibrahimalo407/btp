// src/App.js
import React, { useState } from 'react';
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
import ExpenseTracking from './components/ExpenseTracking';
import ResourceManagement from './components/ResourceManagement';

const App = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: 'Projet A', client: 'Client A', description: 'Description A', manager: 'Manager A', startDate: '2024-01-01', endDate: '2024-12-31', budget: '10000', status: 'En cours', location: 'Location A', progress: 50 },
    { id: 2, name: 'Projet B', client: 'Client B', description: 'Description B', manager: 'Manager B', startDate: '2024-02-01', endDate: '2024-11-30', budget: '20000', status: 'En attente', location: 'Location B', progress: 30 },
  ]);

  return (
    <ThemeProvider>
      <AppContent projects={projects} setProjects={setProjects} />
    </ThemeProvider>
  );
};

const AppContent = ({ projects, setProjects }) => {
  const theme = useCustomTheme();

  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <div className="app">
          <Header />
          <Sidebar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/projects" element={<ProjectList projects={projects} />} />
              <Route path="/projects/:projectId" element={<ProjectDetails projects={projects} />} />
              <Route path="/projects/:projectId/edit" element={<ProjectForm projects={projects} setProjects={setProjects} />} />
              <Route path="/projects/new" element={<ProjectForm projects={projects} setProjects={setProjects} />} />
              <Route path="/resources" element={<ResourceManagement />} />
              <Route path="/expenses" element={<ExpenseTracking />} />
            </Routes>
          </main>
        </div>
      </Router>
    </MuiThemeProvider>
  );
};

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

export default App;
