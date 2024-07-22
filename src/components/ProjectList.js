import React from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Button } from '@mui/material';
import './ProjectList.css';

const ProjectList = ({ projects }) => {
  if (!projects || projects.length === 0) {
    return <div>Aucun projet trouvé.</div>;
  }

  return (
    <Paper className="project-list">
      <Button variant="contained" color="primary" component={Link} to="/projects/new">
        Créer un Projet
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nom</TableCell>
            <TableCell>Client</TableCell>
            <TableCell>Responsable</TableCell>
            <TableCell>Date de Début</TableCell>
            <TableCell>Date de Fin</TableCell>
            <TableCell>Budget</TableCell>
            <TableCell>Statut</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id}>
              <TableCell>{project.name}</TableCell>
              <TableCell>{project.client}</TableCell>
              <TableCell>{project.manager}</TableCell>
              <TableCell>{project.startDate}</TableCell>
              <TableCell>{project.endDate}</TableCell>
              <TableCell>{project.budget}</TableCell>
              <TableCell>{project.status}</TableCell>
              <TableCell>
                <Button component={Link} to={`/projects/${project.id}`} color="primary">
                  Voir
                </Button>
                <Button component={Link} to={`/projects/${project.id}/edit`} color="secondary">
                  Éditer
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default ProjectList;
