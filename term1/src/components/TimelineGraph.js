import React from 'react';
import { Line } from 'react-chartjs-2';

function LineChart({ ChartData }) {
  return (
    <Line

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

export default LineChart;