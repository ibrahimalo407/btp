// src/components/ExpenseChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Card, CardContent, Typography } from '@mui/material';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Dépenses mensuelles',
      data: [3000, 4000, 3200, 4500, 5000, 4800],
      fill: false,
      backgroundColor: '#007bff',
      borderColor: '#007bff',
      tension: 0.1
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
      text: 'Dépenses mensuelles',
    },
  },
};

const ExpenseChart = () => (
  <Card>
    <CardContent>
      <Typography variant="h5" component="div">
        Dépenses mensuelles
      </Typography>
      <div style={{ height: '400px', width: '100%' }}>
        <Line data={data} options={options} />
      </div>
    </CardContent>
  </Card>
);

export default ExpenseChart;
