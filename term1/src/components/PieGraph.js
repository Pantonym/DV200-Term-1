import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';

function PieChart({ ChartData }) {
  return (
    <Pie data={ChartData} />
  )
}

export default PieChart;