import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Select } from "antd";
import { colorData } from "../../data/colorData";
import zoomPlugin from 'chartjs-plugin-zoom';

const NPSBucketTrend = ({ dailyData, weeklyData, monthlyData }) => {
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
        label: "Detractors",
        data: selectedData.map((data) => data.detractors),
        backgroundColor: colorData.Orange,
        borderColor: colorData.Orange,
        borderWidth: 1.5,
      },
      {
        label: "Passives",
        data: selectedData.map((data) => data.passives),
        backgroundColor: colorData.Yelow,
        borderColor: colorData.Yelow,
        borderWidth: 1.5,
      },
      {
        label: "Promoters",
        data: selectedData.map((data) => data.promoters),
        backgroundColor: colorData.Teal,
        borderColor: colorData.Teal,
        borderWidth: 1.5,
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
        max: 100,
        ticks: {
          // Include % sign in the ticks
          callback: function (value, index, ticks) {
            return value + "%";
          },
        },
      },
    },
  };

  return (
    <div>
      <div className="chart_header">
        <div className="chart_header_left">
          <p className="chart_name">NPS Bucket Trend</p>
          <p className="chart_date">Sep 08, 2023</p>
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
        <Line data={data} options={options} plugins={[zoomPlugin]}/>
      </div>
    </div>
  );
};

export default NPSBucketTrend;
