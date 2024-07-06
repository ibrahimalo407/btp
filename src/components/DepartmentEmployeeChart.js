// src/components/DepartmentEmployeeChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Card, CardContent, Typography } from '@mui/material';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['Département A', 'Département B', 'Département C', 'Département D'],
  datasets: [
    {
      label: 'Employés par département',
      data: [10, 20, 15, 5],
      backgroundColor: '#007bff',
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
      text: 'Employés par département',
    },
  },
};

const DepartmentEmployeeChart = () => (
  <Card>
    <CardContent>
      <Typography variant="h5" component="div">
        Employés par département
      </Typography>
      <div style={{ height: '400px', width: '100%' }}>
        <Bar data={data} options={options} />
      </div>
    </CardContent>
  </Card>
);

export default DepartmentEmployeeChart;
