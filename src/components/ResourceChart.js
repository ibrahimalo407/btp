// src/components/ResourceChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Card, CardContent, Typography } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Employés disponibles', 'Employés occupés'],
  datasets: [
    {
      label: 'Ressources',
      data: [20, 80],
      backgroundColor: ['#28a745', '#dc3545'],
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
      text: 'Disponibilité des ressources',
    },
  },
};

const ResourceChart = () => (
  <Card>
    <CardContent>
      <Typography variant="h5" component="div">
        Ressources disponibles
      </Typography>
      <div style={{ height: '400px', width: '100%' }}>
        <Doughnut data={data} options={options} />
      </div>
    </CardContent>
  </Card>
);

export default ResourceChart;
