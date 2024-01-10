import { Select } from "antd";
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { colorData } from "../../data/colorData";
import zoomPlugin from 'chartjs-plugin-zoom';

const UsageAndRevenueTrendData = ({ usageAndRevenueTrendData }) => {
  const [type, setType] = useState("DailyRevenue");

  const data = {
    labels: usageAndRevenueTrendData.map((data) => data.time),
    datasets: [
      {
        label: type,
        data: usageAndRevenueTrendData.map((data) => {
          switch (type) {
            case "DailyRevenue":
              return data.revenue;
            case "DPU/DAU(%)":
              return data.dpu_dau;
            case "DPU/MAU(%)":
              return data.dpu_mau;
            case "ARPDAU":
              return data.arpdau;
            case "ARPDPU":
              return data.arpdpu;
            default:
              return data.dau_mau;
          }
        }),
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
          <p className="chart_name">Usage And Revenue Trends</p>
          <p className="chart_date">
            {usageAndRevenueTrendData[0].time} to {usageAndRevenueTrendData[usageAndRevenueTrendData.length - 1].time}
          </p>
        </div>
        <div className="chart_header_right">
          <Select
            className="chart_select_type"
            defaultValue="DailyRevenue"
            options={[
              { value: "Daily Revenue", label: "Daily Revenue" },
              { value: "DPU/DAU(%)", label: "DPU/DAU(%)" },
              { value: "DPU/MAU(%)", label: "DPU/MAU(%)" },
              { value: "ARPDAU", label: "ARPDAU" },
              { value: "ARPDPU", label: "ARPDPU" },
              { value: "Sticky quotient - DAU/MAU(%)", label: "Sticky quotient - DAU/MAU(%)" },
            ]}
            onChange={(value) => setType(value)}
          />
        </div>
      </div>

      <div className="chart_container">
        <Line data={data} options={options} plugins={[zoomPlugin]}/>
      </div>
    </div>
  );
};

export default UsageAndRevenueTrendData;
