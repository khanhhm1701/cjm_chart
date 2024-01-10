import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { colorData } from "../../data/colorData";
import zoomPlugin from 'chartjs-plugin-zoom';

const SnapShotUserActivity = ({ activityUserData }) => {
  const data = {
    labels: activityUserData.map((data) => data.hour),
    datasets: [
      {
        label: "Today",
        data: activityUserData.map((data) => data.todayUser),
        backgroundColor: colorData.Blue,
        borderColor: colorData.Blue,
        borderWidth: 1,
      },
      {
        label: "Yesterday",
        data: activityUserData.map((data) => data.yesterdayUser),
        backgroundColor: colorData.Green,
        borderColor: colorData.Green,
        borderWidth: 1,
      },
      {
        label: "Week Ago",
        data: activityUserData.map((data) => data.weekUser),
        backgroundColor: colorData.Orange,
        borderColor: colorData.Orange,
        borderWidth: 1,
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
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        offset: true,
      },
      y: {
        beginAtZero: true,
        suggestedMin: 0,
      },
    },
  };

  return (
    <div>
      <div className="chart_header">
        <div className="chart_header_left">
          <p className="chart_name">User Activity</p>
          <p className="chart_date">Sep 08, 2023</p>
        </div>
      </div>
      <div className="chart_container">
        <Line data={data} options={options} plugins={[zoomPlugin]}/>
      </div>
    </div>
  );
};

export default SnapShotUserActivity;
