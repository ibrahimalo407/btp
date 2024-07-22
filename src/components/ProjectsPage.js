import React, { useState } from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import ProjectList from './ProjectList';
import ProjectDetails from './ProjectDetails';
import ProjectForm from './ProjectForm';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setIsFormOpen(false);
  };

  const handleFormOpen = () => {
    setSelectedProject(null);
    setIsFormOpen(true);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Projets
      </Typography>
      <Button variant="contained" color="primary" onClick={handleFormOpen}>
        Créer un nouveau projet
      </Button>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <ProjectList projects={projects} onSelectProject={handleProjectSelect} />
        </Grid>
        <Grid item xs={12} md={6}>
          {isFormOpen ? (
            <ProjectForm projects={projects} setProjects={setProjects} />
          ) : (
            <ProjectDetails projects={projects} setProjects={setProjects} project={selectedProject} />
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProjectsPage;
