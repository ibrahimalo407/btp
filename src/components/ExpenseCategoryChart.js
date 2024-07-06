// src/components/ExpenseCategoryChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Card, CardContent, Typography } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Salaires', 'Matériaux', 'Logistique', 'Divers'],
  datasets: [
    {
      label: 'Dépenses par catégorie',
      data: [50000, 30000, 20000, 10000],
      backgroundColor: ['#007bff', '#28a745', '#dc3545', '#ffc107'],
      hoverOffset: 4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
    title: {
      display: true,
      text: 'Dépenses par catégorie',
    },
  },
};

const ExpenseCategoryChart = () => (
  <Card>
    <CardContent>
      <Typography variant="h5" component="div">
        Dépenses par catégorie
      </Typography>
      <div style={{ height: '400px', width: '100%' }}>
        <Pie data={data} options={options} />
      </div>
    </CardContent>
  </Card>
);

export default ExpenseCategoryChart;
