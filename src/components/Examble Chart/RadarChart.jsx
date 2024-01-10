import React from "react";
import { Radar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const RadarChart = () => {
  const data = {
    labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5"],
    datasets: [
      {
        "label": "Doanh số bán hàng",
        "data": [65, 59, 80, 81, 56],
        "backgroundColor": "rgba(75, 192, 192, 0.2)",
        "borderColor": "rgba(75, 192, 192, 1)",
        "borderWidth": 1
      },
      {
        "label": "Lợi nhuận",
        "data": [28, 48, 40, 19, 86],
        "backgroundColor": "rgba(255, 99, 132, 0.2)",
        "borderColor": "rgba(255, 99, 132, 1)",
        "borderWidth": 1
      }
    ],
  };

  return <Radar data={data} />;
};

export default RadarChart;
