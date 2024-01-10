import React from "react";
import { Bar } from "react-chartjs-2";
import { colorData } from "../../data/colorData";
import zoomPlugin from 'chartjs-plugin-zoom';

const NPSBuckets = ({ npsBucketsData }) => {
  const data = {
    labels: npsBucketsData.map((data) => data.type),
    datasets: [
      {
        data: npsBucketsData.map((data) => data.bucket),
        backgroundColor: [colorData.Orange, colorData.Yelow, colorData.Teal],
        borderColor: false,
        barThickness: 100,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: true,
        color: colorData.Text,
        align: "center",
        anchor: "center",
        font: {
          weight: "bold",
          size: 14,
        },
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
      y: {
        beginAtZero: true,
        suggestedMin: 0,
      },
      x: {
        grid: {
          display: false, // Tắt hiển thị các gạch trên trục x
        },
      },
    },
  };

  return (
    <div>
      <div className="chart_header">
        <div className="chart_header_left">
          <p className="chart_name">NPS Bucket</p>
          <p className="chart_date">Sep 08, 2023</p>
        </div>
      </div>

      <div className="chart_container">
        <Bar data={data} options={options} plugins={[zoomPlugin]}/>
      </div>
    </div>
  );
};

export default NPSBuckets;
