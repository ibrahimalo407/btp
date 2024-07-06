// src/components/ChartComponent.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Card, CardContent, Typography } from '@mui/material';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Projets en cours',
      backgroundColor: '#007bff',
      borderColor: '#007bff',
      borderWidth: 1,
      hoverBackgroundColor: '#0056b3',
      hoverBorderColor: '#0056b3',
      data: [5, 7, 3, 6, 4, 8],
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const ChartComponent = () => (
  <Card>
    <CardContent>
      <Typography variant="h5" component="div">
        Projets en cours par mois
      </Typography>
      <div style={{ height: '400px', width: '100%' }}>
        <Bar data={data} options={options} />
      </div>
    </CardContent>
  </Card>
);

export default ChartComponent;
