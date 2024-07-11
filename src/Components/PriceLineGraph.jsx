import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { color } from 'chart.js/helpers';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PriceLineGraph = () => {
  // Sample data for price and days
  const priceData = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
  const daysData = [0, 4, 8, 12, 16, 20, 24, 28, 32, 36];

  const filteredPriceData = [priceData[0], priceData[priceData.length - 1]];
  const filteredDaysData = [daysData[0], daysData[daysData.length - 1]];
  const data = {
    labels: daysData,
    datasets: [
      {
        label: '',
        data: priceData,
        borderColor: '#567df4', // Change line color
        backgroundColor: '#fff',
        borderWidth: 2, // Change line thickness
        fill: false,
        tension: 0.2,
        pointRadius: function(context) {
            const index = context.dataIndex;
            return index === 0 || index === priceData.length - 1 ? 5 : 0; // Show only the first and last points
          },
          pointBackgroundColor: function(context) {
            const index = context.dataIndex;
            return index === 0 || index === priceData.length - 1 ? '#567df4' : '#567df4'; // Change color of the first and last points
          },
          pointBorderColor: function(context) {
            const index = context.dataIndex;
            return index === 0 || index === priceData.length - 1 ? '#567df4' : '#567df4'; // Change border color of the first and last points
          },
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        display: false,
      },
      title: {
        display: true,
        text: 'Price for Mar 24, 2024 - Apr 24, 2024 ',
        color: '#1D3557',
        font: {
          size: 24, 
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Days',
        },
        grid: {
            display: false,
          },
      },
      y: {
        title: {
          display: true,
          text: 'Price ($)',
        },
        beginAtZero: false  ,
        ticks: {
          stepSize: 100,
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default PriceLineGraph;
