import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { colorData } from "../../data/colorData";
import zoomPlugin from 'chartjs-plugin-zoom';

const SnapShotNewAndReturnUsers = ({ newAndReturnUserData }) => {
  const data = {
    labels: newAndReturnUserData.map((data) => data.hour),
    datasets: [
      {
        label: "New Users",
        data: newAndReturnUserData.map((data) => data.newUser),
        backgroundColor: colorData.Blue,
        borderColor: colorData.Blue,
        borderWidth: 1,
      },
      {
        label: "Return Users",
        data: newAndReturnUserData.map((data) => data.returnUser),
        backgroundColor: colorData.Green,
        borderColor: colorData.Green,
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
          <p className="chart_name">New vs Returning</p>
          <p className="chart_date">Sep 08, 2023</p>
        </div>
      </div>

      <div className="chart_statistics">
        <div className="chart_statistics_item">
          <p className="chart_statistics_item_number">18354</p>
          <p className="chart_statistics_item_des">Live Users</p>
        </div>
        <div className="chart_statistics_item">
          <p className="chart_statistics_item_number">14767</p>
          <p className="chart_statistics_item_des">Returning Users</p>
        </div>
      </div>
      <div className="chart_container">
        <Line data={data} options={options} plugins={[zoomPlugin]}/>
      </div>
    </div>
  );
};

export default SnapShotNewAndReturnUsers;
