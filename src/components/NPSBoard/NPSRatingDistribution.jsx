import React from "react";
import { Bar } from "react-chartjs-2";
import { colorData } from "../../data/colorData";
import zoomPlugin from 'chartjs-plugin-zoom';

const NPSRatingDistribution = ({ ratingData }) => {
  const data = {
    labels: ratingData.map((data) => data.rate),
    datasets: [
      {
        // label: ratingData.map((item) => {
        //   if (item.rate < 7) return 'Detractors';
        //   if (item.rate >= 7 && item.rate <= 8) return 'Passives';
        //   if (item.rate >= 9) return 'Promoters';
        // }),
        data: ratingData.map((data) => data.numbers),
        backgroundColor: ratingData.map((item) => {
          if (item.rate < 7) return colorData.Orange;
          if (item.rate >= 7 && item.rate <= 8) return colorData.Yelow;
          if (item.rate >= 9) return colorData.Teal;
        }),
        barThickness: 25,
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
          <p className="chart_name">Rating Distributions</p>
          <p className="chart_date">Sep 08, 2023</p>
        </div>
      </div>

      <div className="chart_container">
        <Bar data={data} options={options} plugins={[zoomPlugin]}/>
      </div>
    </div>
  );
};

export default NPSRatingDistribution;
