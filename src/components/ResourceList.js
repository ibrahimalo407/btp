// src/components/ResourceList.js
import React from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';

const ResourceList = ({ resources, onDeleteResource }) => {
  return (
    <List>
      {resources.map((resource) => (
        <ListItem key={resource.id} secondaryAction={
          <Button variant="contained" color="secondary" onClick={() => onDeleteResource(resource.id)}>
            Supprimer
          </Button>
        }>
          <ListItemText primary={resource.name} secondary={`Type: ${resource.type}`} />
        </ListItem>
      ))}
    </List>
  );
};

export default ResourceList;
