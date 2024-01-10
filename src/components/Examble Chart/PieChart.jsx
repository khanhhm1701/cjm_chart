import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const PieChart = () => {
  const data = {
    labels: ["Green", "Yellow", "Orange"],
    datasets: [
      {
        label: "Color Vote",
        data: [55, 30, 15],
        backgroundColor: ["rgb(97,187,168)", "rgb(249,220,100)", "rgb(241,137,78)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "left",
      },
    },
  };

  return <Pie data={data} options={options}/>;
};

export default PieChart;
