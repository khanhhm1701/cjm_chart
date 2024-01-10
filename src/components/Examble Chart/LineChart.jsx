import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const LineChart = ({ userData, }) => {
  const data = {
    labels: userData.map((data) => data.year),
    datasets: [
      {
        label: "User Gain",
        data: userData.map((data) => data.userGain),
        backgroundColor: "rgba(75, 192, 192, 1)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "User Lost",
        data: userData.map((data) => data.userLost),
        backgroundColor: "rgba(255, 99, 132, 1)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };
  const option = {
    plugins: {
      legend: {
        position: "bottom",
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

export default LineChart;
