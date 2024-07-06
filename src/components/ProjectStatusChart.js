// src/components/ProjectStatusChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Card, CardContent, Typography } from '@mui/material';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['Projets terminés', 'Projets en cours'],
  datasets: [
    {
      label: 'Projets',
      data: [10, 5],
      backgroundColor: ['#28a745', '#007bff'],
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
      text: 'Projets terminés vs en cours',
    },
  },
};

const ProjectStatusChart = () => (
  <Card>
    <CardContent>
      <Typography variant="h5" component="div">
        Projets terminés vs en cours
      </Typography>
      <div style={{ height: '400px', width: '100%' }}>
        <Bar data={data} options={options} />
      </div>
    </CardContent>
  </Card>
);

export default ProjectStatusChart;
