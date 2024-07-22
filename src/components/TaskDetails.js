import React from 'react';
import { Paper, Typography, Divider } from '@mui/material';

const TaskDetails = ({ task }) => {
  if (!task) {
    return <div>Tâche non trouvée</div>;
  }

  return (
    <Paper className="task-details">
      <Typography variant="h4">{task.name}</Typography>
      <Typography variant="body1">{task.description}</Typography>
      <Divider />
      <Typography variant="body2">Date de début: {task.startDate}</Typography>
      <Typography variant="body2">Date de fin: {task.endDate}</Typography>
      <Typography variant="body2">Progrès: {task.progress}%</Typography>
      <Typography variant="body2">Ressources: {task.resources}</Typography>
    </Paper>
  );
};

export default TaskDetails;
