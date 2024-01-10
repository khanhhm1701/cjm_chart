import { Select } from "antd";
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { colorData } from "../../data/colorData";
import zoomPlugin from 'chartjs-plugin-zoom';

const ActivationAndUninstall = ({ dailyData, weeklyData, monthlyData }) => {
  const [selectedData, setSelectedData] = useState(dailyData);

  const handleSelectTime = (selectTime) => {
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
        label: "New Activations",
        data: selectedData.map((data) => data.active),
        backgroundColor: colorData.Blue,
        borderColor: colorData.Blue,
        borderWidth: 1,
      },
      {
        label: "Uninstalls",
        data: selectedData.map((data) => data.uninstall),
        backgroundColor: colorData.Red,
        borderColor: colorData.Red,
        borderWidth: 1,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        position: "bottom",
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
        display: false, 
      }
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
          <p className="chart_name">Activations vs Uninstalls</p>
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
            onChange={(value) => handleSelectTime(value)}
          />
        </div>
      </div>

      <div className="chart_container">
        <Line data={data} options={options} plugins={[zoomPlugin]} />
      </div>
    </div>
  );
};

export default ActivationAndUninstall;
