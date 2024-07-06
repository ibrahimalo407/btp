// src/components/Dashboard.js
import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import ChartComponent from './ChartComponent';
import ExpenseChart from './ExpenseChart';
import ResourceChart from './ResourceChart';
import ExpenseCategoryChart from './ExpenseCategoryChart';
import ProjectStatusChart from './ProjectStatusChart';
import DepartmentEmployeeChart from './DepartmentEmployeeChart';
import './Dashboard.css';

const Dashboard = () => (
  <div className="dashboard">
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <ChartComponent />
      </Grid>
      <Grid item xs={12} md={6}>
        <ExpenseChart />
      </Grid>
      <Grid item xs={12} md={6}>
        <ResourceChart />
      </Grid>
      <Grid item xs={12} md={6}>
        <ExpenseCategoryChart />
      </Grid>
      <Grid item xs={12} md={6}>
        <ProjectStatusChart />
      </Grid>
      <Grid item xs={12} md={6}>
        <DepartmentEmployeeChart />
      </Grid>
      <Grid item xs={12}>
        <Paper className="info-box">
          <Typography variant="h6">Projets en cours</Typography>
          <Typography variant="h4">5 projets actifs</Typography>
        </Paper>
        <Paper className="info-box">
          <Typography variant="h6">Ressources disponibles</Typography>
          <Typography variant="h4">20 employés disponibles</Typography>
        </Paper>
        <Paper className="info-box">
          <Typography variant="h6">Dépenses totales</Typography>
          <Typography variant="h4">$120,000</Typography>
        </Paper>
      </Grid>
    </Grid>
  </div>
);

export default Dashboard;
