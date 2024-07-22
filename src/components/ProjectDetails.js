import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Paper, Typography, Button, Divider, Grid, Box } from '@mui/material';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import TaskDetails from './TaskDetails';
import './ProjectDetails.css';

const ProjectDetails = ({ projects, setProjects }) => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === parseInt(projectId));

  const [tasks, setTasks] = useState(project ? project.tasks : []);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isTaskFormOpen, setIsTaskFormOpen] = useState(false);

  const handleAddTask = (task) => {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    const updatedProjects = projects.map((p) =>
      p.id === project.id ? { ...p, tasks: updatedTasks } : p
    );
    setProjects(updatedProjects);
    setIsTaskFormOpen(false);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    const updatedProjects = projects.map((p) =>
      p.id === project.id ? { ...p, tasks: updatedTasks } : p
    );
    setProjects(updatedProjects);
  };

  if (!project) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <Paper className="project-details">
      <Typography variant="h4" gutterBottom>{project.name}</Typography>
      <Typography variant="subtitle1" gutterBottom>{project.client}</Typography>
      <Divider />
      <Box mt={2}>
        <Typography variant="body1" gutterBottom>{project.description}</Typography>
        <Typography variant="body2">Responsable: {project.manager}</Typography>
        <Typography variant="body2">Date de début: {project.startDate}</Typography>
        <Typography variant="body2">Date de fin prévue: {project.endDate}</Typography>
        <Typography variant="body2">Budget: {project.budget}</Typography>
        <Typography variant="body2">Statut: {project.status}</Typography>
        <Typography variant="body2">Lieu: {project.location}</Typography>
        <Typography variant="body2">Progrès: {project.progress}%</Typography>
      </Box>
      <Divider />
      <Box mt={2}>
        <Button variant="contained" color="secondary" component={Link} to={`/projects/${project.id}/edit`}>
          Éditer le Projet
        </Button>
      </Box>
      <Divider sx={{ marginY: 2 }} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Button variant="contained" color="primary" onClick={() => setIsTaskFormOpen(true)}>
            Ajouter une Tâche
          </Button>
          <TaskList tasks={tasks} onSelectTask={setSelectedTask} onDeleteTask={handleDeleteTask} />
        </Grid>
        <Grid item xs={12} md={6}>
          {isTaskFormOpen ? (
            <TaskForm onAddTask={handleAddTask} />
          ) : (
            <TaskDetails task={selectedTask} />
          )}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProjectDetails;
