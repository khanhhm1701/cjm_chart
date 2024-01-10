import React from "react";
import { Line } from "react-chartjs-2";
import { colorData } from "../../data/colorData";
import zoomPlugin from 'chartjs-plugin-zoom';

const UserCharged = ({ userChargedData }) => {

  const data = {
    labels: userChargedData.map((data) => data.time),
    datasets: [
      {
        label: 'A1: Charged, All Users',
        data: userChargedData.map((data) => data.event),
        backgroundColor: colorData.Blue,
        borderColor: colorData.Blue,
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
          <p className="chart_name">User Charged Last Month</p>
          <p className="chart_date">
            {userChargedData[0].time} to {userChargedData[userChargedData.length - 1].time}
          </p>
        </div>
        <div className="">Last updated: Jun 07, 12:38 PM</div>
      </div>

      <div className="chart_container">
        <Line data={data} options={options} plugins={[zoomPlugin]}/>
      </div>
    </div>
  );
};

export default UserCharged;
