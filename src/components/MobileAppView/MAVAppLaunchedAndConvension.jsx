import { Select } from "antd";
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { colorData } from "../../data/colorData";
import zoomPlugin from 'chartjs-plugin-zoom';

const MAVAppLaunchedAndConvension = ({ dailyData, weeklyData, monthlyData }) => {
  const [selectedData, setSelectedData] = useState(dailyData);

  const hanleSelectTime = (selectTime) => {
    if (selectTime === "Daily") {
      setSelectedData(dailyData);
    } else if (selectTime === "Weekly") {
      setSelectedData(weeklyData);
    } else {
      setSelectedData(monthlyData);
    }
  };

  const data = {
    labels: selectedData.map((data) => data.time),
    datasets: [
      {
        label: "App Launched",
        data: selectedData.map((data) => data.launched),
        backgroundColor: colorData.Blue,
        borderColor: colorData.Blue,
        borderWidth: 1,
      },
      {
        label: "Convensions",
        data: selectedData.map((data) => data.convensions),
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
          <p className="chart_name">Active User</p>
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

      <div className="chart_container">
        <Line data={data} options={options} plugins={[zoomPlugin]}/>
      </div>
    </div>
  );
};

export default MAVAppLaunchedAndConvension;
