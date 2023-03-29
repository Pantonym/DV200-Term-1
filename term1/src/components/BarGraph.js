import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';

function BarChart({ ChartData }) {
  return (
    <Bar

      options={{
        elements: {
          point: {
            radius: 0
          }
        },
        scales: {
          x: {
            grid: {
              color: "rgb(141, 141, 141)"
            }
          },
          y: {
            grid: {
              color: "rgb(141, 141, 141)"
            }
          }
        }
      }}

      data={ChartData} />
  )
}

export default BarChart;