import React, { useState } from 'react';
import { TextField, Button, Paper, Grid, Box } from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './ProjectForm.css';

const ProjectForm = ({ projects, setProjects }) => {
  const [form, setForm] = useState({
    name: '',
    client: '',
    manager: '',
    startDate: new Date(),
    endDate: new Date(),
    budget: '',
    status: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDateChange = (name, date) => {
    setForm({ ...form, [name]: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = { ...form, id: Date.now() };
    setProjects([...projects, newProject]);
    setForm({
      name: '',
      client: '',
      manager: '',
      startDate: new Date(),
      endDate: new Date(),
      budget: '',
      status: '',
    });
  };

  return (
    <Paper className="project-form">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Nom du Projet"
              name="name"
              value={form.name}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Client"
              name="client"
              value={form.client}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Responsable"
              name="manager"
              value={form.manager}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <label>Date de Début</label>
            <DatePicker
              selected={form.startDate}
              onChange={(date) => handleDateChange('startDate', date)}
              className="date-picker"
              dateFormat="dd/MM/yyyy"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <label>Date de Fin</label>
            <DatePicker
              selected={form.endDate}
              onChange={(date) => handleDateChange('endDate', date)}
              className="date-picker"
              dateFormat="dd/MM/yyyy"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Budget"
              name="budget"
              type="number"
              value={form.budget}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Statut"
              name="status"
              value={form.status}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Box mt={2}>
              <Button type="submit" variant="contained" color="primary">
                Ajouter le Projet
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default ProjectForm;
