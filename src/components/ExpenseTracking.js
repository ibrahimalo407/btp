import React, { useState } from 'react';
import { Paper, Typography, TextField, Button, List, ListItem, ListItemText, Divider } from '@mui/material';
import './ExpenseTracking.css';

const ExpenseTracking = () => {
  const [expenses, setExpenses] = useState([]);
  const [form, setForm] = useState({ description: '', amount: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExpenses([...expenses, { ...form, id: Date.now() }]);
    setForm({ description: '', amount: '' });
  };

  const handleDelete = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <Paper className="expense-tracking">
      <Typography variant="h4" gutterBottom>Suivi des Dépenses</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Description"
          name="description"
          value={form.description}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Montant"
          name="amount"
          value={form.amount}
          onChange={handleChange}
          type="number"
          fullWidth
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Ajouter
        </Button>
      </form>
      <Divider sx={{ marginY: 2 }} />
      <List>
        {expenses.map((expense) => (
          <ListItem key={expense.id} className="expense-item">
            <ListItemText
              primary={expense.description}
              secondary={`Montant: ${expense.amount}`}
            />
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleDelete(expense.id)}
            >
              Supprimer
            </Button>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default ExpenseTracking;
