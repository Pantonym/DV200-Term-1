import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';

function BarChart( {ChartData} ) {
  return (
    <Bar data={ChartData} />
  )
}

export default BarChart;