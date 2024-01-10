import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chartjs-plugin-datalabels";
import { Chart as ChartJS } from "chart.js/auto";
import { colorData } from "../../data/colorData";
import zoomPlugin from 'chartjs-plugin-zoom';

const TodayViewUsageSource = ({ usageSourceData }) => {
  const totalUsers = usageSourceData.reduce((acc, data) => acc + data.user, 0);

  const data = {
    labels: usageSourceData.map((data) => data.source),
    datasets: [
      {
        label: "Usage Source",
        data: usageSourceData.map((data) => data.user),
        backgroundColor: [colorData.Blue, colorData.Green, colorData.Orange],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
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
      datalabels: {
        display: true,
        color: colorData.White,
        align: "center",
        anchor: "center",
        font: {
          size: 12,
        },
        formatter: (value) => {
          const percentage = ((value / totalUsers) * 100).toFixed(1);
          return `${percentage}%`;
        },
      },
    },
    cutout: "70%",
  };

  return (
    <div>
      <div className="chart_header">
        <div className="chart_header_left">
          <p className="chart_name">Usage Source</p>
          <p className="chart_date">Sep 08, 2023</p>
        </div>
      </div>
      <div className="doughnut_info">
        <div className="doughnut_info_container">
          <div className="doughnut_info_container_center">
            <p className="doughnut_info_container_center_num">{totalUsers}</p>
            <p className="doughnut_info_container_center_des">Total Users</p>
          </div>
          <Doughnut data={data} options={options} plugins={[zoomPlugin]}/>
        </div>
      </div>
    </div>
  );
};

export default TodayViewUsageSource;
