import React from "react";
import { Bar } from "react-chartjs-2";
import { colorData } from "../../data/colorData";
import zoomPlugin from 'chartjs-plugin-zoom';

const MAVDistributionByAppVersion = ({ distributionByAppVersionData }) => {
  const data = {
    labels: distributionByAppVersionData.map((data) => data.version),
    datasets: [
      {
        label: "Number of Users",
        data: distributionByAppVersionData.map((data) => data.user),
        backgroundColor: colorData.Blue,
        borderColor: colorData.Blue,
        borderWidth: 1,
        barThickness: 15,
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
        display: true,
        align: "end",
        anchor: "end",
        color: colorData.Text,
        font: {
          size: 9,
        },
        formatter: (value, context) => {
          const dataset = context.dataset.data;
          const total = dataset.reduce((acc, data) => acc + data, 0);
          const percentage = ((value / total) * 100).toFixed(1);
          return `${value} (${percentage}%)`;
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        suggestedMin: 0,
      },
    },
    indexAxis: "y",
  };

  return (
    <div>
      <div className="chart_header">
        <div className="chart_header_left">
          <p className="chart_name">Distribution By App Version</p>
          <p className="chart_date">Sep 01, 2023 to Sep 07, 2023</p>
        </div>
      </div>

      <div className="chart_container">
        <Bar data={data} options={options} plugins={[zoomPlugin]}/>
      </div>
    </div>
  );
};

export default MAVDistributionByAppVersion;
