import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const InvestorDetailGraph = () => {
  const data = {
    labels: [1, 2, 3], // Months
    datasets: [
      {
        label: "Honda Insight Grey",
        data: [2000, 600, 0],
        borderColor: "#1e3a8b", // Navy Blue
        backgroundColor: "#1e3a8b)",
        borderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: "#1e3a8b",
        pointBorderColor: "#1e3a8b",
      },
      {
        label: "Toyota Prius",
        data: [1000, 0, 0],
        borderColor: "#3170f9", // Blue
        backgroundColor: "#3170f9",
        borderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: "#3170f9",
        pointBorderColor: "#3170f9",
      },
      {
        label: "Honda Sonata Black",
        data: [800, 500, 0],
        borderColor: "#d72828", // Red
        backgroundColor: "#d728282)",
        borderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: "#d72828",
        pointBorderColor: "#d72828",
      },
      {
        label: "Hyundai Elantra Black",
        data: [0, 200, 0],
        borderColor: "#2da02c", // Green
        backgroundColor: "#2da02c",
        borderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: "#2da02c",
        pointBorderColor: "#2da02c",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          pointStyle: "line",

        //   generateLabels: (chart) => {
        //     const datasets = chart.data.datasets;
        //     return datasets.map((dataset, i) => ({
        //       text: dataset.label,
        //       fillStyle: dataset.borderColor,
        //       strokeStyle: dataset.borderColor,
        //       lineWidth: dataset.borderWidth,
        //       hidden: !chart.isDatasetVisible(i),
        //       index: i,
        //     }));
        //   },
        },
      },
      title: {
        display: true,
        text: "Returns on Investment",
        color: '#1D3557',
        font: {
          size: 20,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
        },
        grid: {
            display: false,
          },
      },
      y: {
        title: {
          display: true,
          text: "Returns",
        },
        beginAtZero: true,
        ticks: {
            stepSize: 1000,
            callback: function(value) {
              return [0, 1000, 2000].includes(value) ? value : '';
            }
          }
      },
    },
    elements: {
      point: {
        radius: 5,
        backgroundColor: "transparent",
        borderColor: "transparent",
        hoverRadius: 5,
        hoverBackgroundColor: "currentColor",
        hoverBorderColor: "currentColor",
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default InvestorDetailGraph;
