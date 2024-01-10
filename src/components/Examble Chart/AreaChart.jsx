import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const AreaChart = ({ userData }) => {
  const data = {
    labels: userData.map((data) => data.year),
    datasets: [
      {
        fill: true,
        label: "User Gain",
        data: userData.map((data) => data.userGain),
        backgroundColor: "rgb(97,187,168,0.1)",
        borderColor: "rgb(97,187,168)",
        borderWidth: 1.5,
      },
      
    ],
  };
  const option = {
    plugins: {
      legend: {
        position: "bottom",
      },
      datalabels: {
        display: false, 
      },
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true
          },
          mode: 'xy',
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        suggestedMin: 0,
      },
    },
  };

  return <Line data={data} options={option} />;
};

export default AreaChart;
