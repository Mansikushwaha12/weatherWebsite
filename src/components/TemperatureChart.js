import React from 'react';
import { Line } from 'react-chartjs-2';

const TemperatureChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.timestamp), // Example: Assuming timestamp is the label
    datasets: [
      {
        label: 'Temperature',
        data: data.map(item => item.temperature),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        type: 'category', // Ensure x-axis is configured as category type
        labels: chartData.labels,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={chartData} options={chartOptions} />;
};

export default TemperatureChart;
