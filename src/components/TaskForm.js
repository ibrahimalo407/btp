import React, { useState } from 'react';
import { TextField, Button, Paper, Grid } from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TaskForm = ({ onAddTask }) => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    startDate: new Date(),
    endDate: new Date(),
    progress: 0,
    resources: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDateChange = (name, date) => {
    setForm({ ...form, [name]: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask({ ...form, id: Date.now() });
    setForm({
      name: '',
      description: '',
      startDate: new Date(),
      endDate: new Date(),
      progress: 0,
      resources: '',
    });
  };

  return (
    <Paper className="task-form">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Nom de la Tâche"
              name="name"
              value={form.name}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              name="description"
              value={form.description}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
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
          <Grid item xs={12}>
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
          <Grid item xs={12}>
            <TextField
              label="Progrès (%)"
              name="progress"
              type="number"
              value={form.progress}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Ressources"
              name="resources"
              value={form.resources}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Enregistrer
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default TaskForm;
