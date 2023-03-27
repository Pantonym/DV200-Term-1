import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';

function RadarChart({ ChartData }) {
  return (
    <Radar

      options={{
        elements: {
          point: {
            radius: 0
          }
        },
        scales: {
          r: {
            angleLines: {
              color: '#FFFFFF'
            },
            grid: {
              color: "#FFFFFF"
            },
            pointLabels: {
              color: '#FFFFFF'
            },
            ticks: {
              color: '#FFFFFF',
              backdropColor: '#000000'
            }
          }
        }
      }}

      data={ChartData} />
  )
}

export default RadarChart;