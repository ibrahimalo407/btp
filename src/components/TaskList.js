import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Button } from '@mui/material';

const TaskList = ({ tasks, onSelectTask, onDeleteTask }) => {
  if (!tasks || tasks.length === 0) {
    return <div>Aucune tâche trouvée.</div>;
  }

  return (
    <Paper className="task-list">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nom</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Date de Début</TableCell>
            <TableCell>Date de Fin</TableCell>
            <TableCell>Progrès</TableCell>
            <TableCell>Ressources</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell>{task.name}</TableCell>
              <TableCell>{task.description}</TableCell>
              <TableCell>{task.startDate}</TableCell>
              <TableCell>{task.endDate}</TableCell>
              <TableCell>{task.progress}%</TableCell>
              <TableCell>{task.resources}</TableCell>
              <TableCell>
                <Button onClick={() => onSelectTask(task)} color="primary">
                  Voir
                </Button>
                <Button onClick={() => onDeleteTask(task.id)} color="secondary">
                  Supprimer
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default TaskList;
