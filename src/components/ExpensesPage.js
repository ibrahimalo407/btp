// src/components/ExpensesPage.js
import React, { useState } from 'react';
import { Paper, Typography, Button, Grid, Box, Divider } from '@mui/material';
import ExpenseList from './ExpenseList';
import ExpenseForm from './ExpenseTracking';
import './ExpensesPage.css';

const ExpensesPage = ({ expenses, setExpenses }) => {
  const [isExpenseFormOpen, setIsExpenseFormOpen] = useState(false);

  const handleAddExpense = (expense) => {
    const newExpenses = [...expenses, expense];
    setExpenses(newExpenses);
    setIsExpenseFormOpen(false);
  };

  return (
    <Paper className="expenses-page">
      <Typography variant="h4" gutterBottom>Suivi des Dépenses</Typography>
      <Button variant="contained" color="primary" onClick={() => setIsExpenseFormOpen(true)}>
        Ajouter une Dépense
      </Button>
      <Divider sx={{ marginY: 2 }} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <ExpenseList expenses={expenses} />
        </Grid>
        <Grid item xs={12} md={6}>
          {isExpenseFormOpen && <ExpenseForm onAddExpense={handleAddExpense} />}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ExpensesPage;
