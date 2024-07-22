import React, { useState } from 'react';
import { Paper, Typography, TextField, Button, List, ListItem, ListItemText, Divider } from '@mui/material';
import './ResourceManagement.css';

const ResourceManagement = () => {
  const [resources, setResources] = useState([]);
  const [form, setForm] = useState({ name: '', type: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResources([...resources, { ...form, id: Date.now() }]);
    setForm({ name: '', type: '' });
  };

  const handleDelete = (id) => {
    setResources(resources.filter((resource) => resource.id !== id));
  };

  return (
    <Paper className="resource-management">
      <Typography variant="h4" gutterBottom>Gestion des Ressources</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nom"
          name="name"
          value={form.name}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Type"
          name="type"
          value={form.type}
          onChange={handleChange}
          fullWidth
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Ajouter une ressource
        </Button>
      </form>
      <Divider sx={{ marginY: 2 }} />
      <List>
        {resources.map((resource) => (
          <ListItem key={resource.id} className="resource-item">
            <ListItemText
              primary={resource.name}
              secondary={`Type: ${resource.type}`}
            />
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleDelete(resource.id)}
            >
              Supprimer
            </Button>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default ResourceManagement;
