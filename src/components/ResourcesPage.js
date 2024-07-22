// src/components/ResourcesPage.js
import React, { useState } from 'react';
import { Paper, Typography, Button, Grid, Box, Divider } from '@mui/material';
import ResourceList from './ResourceList';
import ResourceForm from './ResourceManagement';
import './ResourcesPage.css';

const ResourcesPage = ({ resources, setResources }) => {
  const [isResourceFormOpen, setIsResourceFormOpen] = useState(false);

  const handleAddResource = (resource) => {
    const newResources = [...resources, resource];
    setResources(newResources);
    setIsResourceFormOpen(false);
  };

  return (
    <Paper className="resources-page">
      <Typography variant="h4" gutterBottom>Gestion des Ressources</Typography>
      <Button variant="contained" color="primary" onClick={() => setIsResourceFormOpen(true)}>
        Ajouter une Ressource
      </Button>
      <Divider sx={{ marginY: 2 }} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <ResourceList resources={resources} />
        </Grid>
        <Grid item xs={12} md={6}>
          {isResourceFormOpen && <ResourceForm onAddResource={handleAddResource} />}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ResourcesPage;
