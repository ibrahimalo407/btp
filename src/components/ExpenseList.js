// src/components/ExpenseList.js
import React from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';

const ExpenseList = ({ expenses, onDeleteExpense }) => {
  return (
    <List>
      {expenses.map((expense) => (
        <ListItem key={expense.id} secondaryAction={
          <Button variant="contained" color="secondary" onClick={() => onDeleteExpense(expense.id)}>
            Supprimer
          </Button>
        }>
          <ListItemText primary={expense.description} secondary={`Montant: ${expense.amount} €`} />
        </ListItem>
      ))}
    </List>
  );
};

export default ExpenseList;
