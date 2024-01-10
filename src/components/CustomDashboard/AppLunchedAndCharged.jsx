import React from "react";
import { Bar } from "react-chartjs-2";
import { colorData } from "../../data/colorData";
import '../../assets/scss/style.scss'
import zoomPlugin from 'chartjs-plugin-zoom';

const AppLunchedAndCharged = () => {
  const data = {
    labels: ["App Lunched", "Charged"],
    datasets: [
      {
        label: "All users",
        data: [12, 3],
        backgroundColor: colorData.Blue,
        datalabels: {
          display: true,
          color: colorData.White,
          font: {
            weight: "bold",
            size: 14,
            align: "end",
            anchor: "end",
          },
          formatter: (value, context) => {
            const percentage = ((value / 12) * 100).toFixed(1);
            return `${value} (${percentage}%)`;
          },
        },
      },
      {
        label: "Dropoffs",
        data: [0, 9],
        backgroundColor: colorData.Gray,
      },
    ],
  };
  const options = {
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
      x: {
        grid: {
          display: false,
        },
        offset: true,
        stacked: true,
      },
      y: {
        beginAtZero: true,
        suggestedMin: 0,
        stacked: true,
      },
    },
    responsive: true,
  };
  return (
    <div>
      <div className="chart_header">
        <div className="chart_header_left">
          <p className="chart_name">App Lunched Vs. Charged</p>
          <p className="chart_date">User|Funnel Conversions|from May 01, 2023 to May 15, 2022</p>
        </div>
        <div className="chart_header_right">Last updated: Jun 07, 12:38 PM</div>
      </div>

      <div className="chart_container">
        <Bar data={data} options={options} plugins={[zoomPlugin]}/>
      </div>
    </div>
  );
};

export default AppLunchedAndCharged;
