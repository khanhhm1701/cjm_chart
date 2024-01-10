import React from "react";
import { Doughnut } from "react-chartjs-2";
import { colorData } from "../../data/colorData";

const GaugeChart = () => {
  const data = {
    datasets: [
      {
        label: "Color Vote",
        data: [70, 30],
        backgroundColor: [colorData.Blue, colorData.Gray],
        borderWidth: 1,
        circumference: 180,
        rotation: 270,
        cutout: "80%",
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
      }
    },
  };

  return (
    <div className="w-full">
      <div className="text-left w-full">
        <p className="text-xl font-bold text-slate-700">Gauge Chart</p>
        <p className="text-base font-normal text-slate-500">Sep 08, 2023</p>
      </div>
      <div className="w-full text-center flex justify-center">
        <div className="w-full my-8 flex justify-center">
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1 flex flex-col items-center justify-center">
              <p className="text-3xl font-bold">70%</p>
              <p className="text-base text-slate-500">Charged Pacentages</p>
            </div>

            <Doughnut data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GaugeChart;
