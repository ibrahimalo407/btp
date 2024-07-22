// src/components/SubcontractorManagement.js
import React, { useState } from 'react';
import { Paper, Typography, Box, Button, List, ListItem, ListItemText, Divider, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import './SubcontractorManagement.css';

const SubcontractorManagement = () => {
  const [subcontractors, setSubcontractors] = useState([
    { id: 1, name: 'Sous-traitant A', contract: 'Contrat A', performance: 'Bonne' },
    { id: 2, name: 'Sous-traitant B', contract: 'Contrat B', performance: 'Moyenne' },
  ]);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentSubcontractor, setCurrentSubcontractor] = useState({ id: null, name: '', contract: '', performance: '' });
  const [isEditing, setIsEditing] = useState(false);

  const handleAdd = () => {
    setCurrentSubcontractor({ id: null, name: '', contract: '', performance: '' });
    setIsEditing(false);
    setOpenDialog(true);
  };

  const handleEdit = (subcontractor) => {
    setCurrentSubcontractor(subcontractor);
    setIsEditing(true);
    setOpenDialog(true);
  };

  const handleDelete = (id) => {
    setSubcontractors(subcontractors.filter(subcontractor => subcontractor.id !== id));
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleDialogSave = () => {
    if (isEditing) {
      setSubcontractors(subcontractors.map(subcontractor => 
        subcontractor.id === currentSubcontractor.id ? currentSubcontractor : subcontractor
      ));
    } else {
      setSubcontractors([...subcontractors, { ...currentSubcontractor, id: Date.now() }]);
    }
    setOpenDialog(false);
  };

  return (
    <Paper className="subcontractor-management">
      <Typography variant="h4" gutterBottom>Gestion des Sous-traitants</Typography>
      <Box mt={2}>
        <Button variant="contained" color="primary" onClick={handleAdd}>Ajouter un Sous-traitant</Button>
      </Box>
      <Divider sx={{ marginY: 2 }} />
      <List>
        {subcontractors.map((subcontractor) => (
          <ListItem key={subcontractor.id}>
            <ListItemText
              primary={subcontractor.name}
              secondary={`Contrat: ${subcontractor.contract}, Performance: ${subcontractor.performance}`}
            />
            <Button variant="contained" color="secondary" onClick={() => handleEdit(subcontractor)}>Éditer</Button>
            <Button variant="contained" color="error" sx={{ marginLeft: 2 }} onClick={() => handleDelete(subcontractor.id)}>Supprimer</Button>
          </ListItem>
        ))}
      </List>

      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>{isEditing ? 'Éditer Sous-traitant' : 'Ajouter Sous-traitant'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Nom"
            type="text"
            fullWidth
            value={currentSubcontractor.name}
            onChange={(e) => setCurrentSubcontractor({ ...currentSubcontractor, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Contrat"
            type="text"
            fullWidth
            value={currentSubcontractor.contract}
            onChange={(e) => setCurrentSubcontractor({ ...currentSubcontractor, contract: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Performance"
            type="text"
            fullWidth
            value={currentSubcontractor.performance}
            onChange={(e) => setCurrentSubcontractor({ ...currentSubcontractor, performance: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Annuler</Button>
          <Button onClick={handleDialogSave} color="primary">{isEditing ? 'Sauvegarder' : 'Ajouter'}</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default SubcontractorManagement;
