import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { colorData } from "../../data/colorData";
import { Select } from "antd";
import zoomPlugin from 'chartjs-plugin-zoom';

const MAVConvensions = ({ dailyData, weeklyData, monthlyData }) => {
  const [selectedData, setSelectedData] = useState(dailyData);
  const [time, setTime] = useState("Daily");

  const hanleSelectTime = (selectTime) => {
    if (selectTime === "Daily") {
      setSelectedData(dailyData);
    } else if (selectTime === "Weekly") {
      setSelectedData(weeklyData);
    } else {
      setSelectedData(monthlyData);
    }
    setTime(selectTime);
  };

  const totalUsers = selectedData.reduce((total, data) => total + data.user, 0);
  const avgUsers = Math.round(totalUsers / selectedData.length);

  const data = {
    labels: selectedData.map((data) => data.time),
    datasets: [
      {
        label: "Convensions",
        data: selectedData.map((data) => data.user),
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
          <p className="chart_name">Convensions</p>
          <p className="chart_date">
            {selectedData[0].time} to {selectedData[selectedData.length - 1].time}
          </p>
        </div>
        <div className="chart_header_right">
          <Select
            className="chart_select_date"
            defaultValue="Daily"
            options={[
              { value: "Daily", label: "Daily" },
              { value: "Weekly", label: "Weekly" },
              { value: "Monthly", label: "Monthly" },
            ]}
            onChange={(value) => hanleSelectTime(value)}
          />
        </div>
      </div>

      <div className="chart_statistics">
        <div className="chart_statistics_item">
          <p className="chart_statistics_item_number">{totalUsers}</p>
          <p className="chart_statistics_item_des">Total Users</p>
        </div>
        <div className="chart_statistics_item">
          <p className="chart_statistics_item_number">{avgUsers}</p>
          <p className="chart_statistics_item_des">{time} Avg Users</p>
        </div>
      </div>

      <div className="chart_container">
        <Line data={data} options={options} plugins={[zoomPlugin]}/>
      </div>
    </div>
  );
};

export default MAVConvensions;
