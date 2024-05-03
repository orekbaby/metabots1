"use client";
import { useEffect } from "react";
import { createChart } from "lightweight-charts";

const Chart = () => {
  useEffect(() => {
    const chartWidth = window.innerWidth < 768 ? 300 : 550; // Adjust width based on device width
    const chartHeight = window.innerWidth < 768 ? 200 : 300; // Adjust height based on device width

    const chart = createChart("chart-container", {
      width: chartWidth,
      height: chartHeight,
      layout: {
        textColor: "white",
        background: { color: "transparent" },
      },
      grid: {
        vertLines: {
          color: "transparent",
        },
        horzLines: {
          color: "transparent",
        },
      },
    });

    const areaSeries = chart.addAreaSeries({
      lineColor: "#2962FF",
      topColor: "#2962FF",
      bottomColor: "rgba(41, 98, 255, 0.28)",
    });

    const data = [
      { time: "2024-04-01", value: 100 },
      { time: "2024-04-02", value: 110 },
      { time: "2024-04-03", value: 105 },
      { time: "2024-04-04", value: 120 },
      { time: "2024-04-05", value: 115 },
      { time: "2024-04-06", value: 125 },
      { time: "2024-04-07", value: 130 },
      { time: "2024-04-08", value: 100 },
      { time: "2024-04-09", value: 110 },
      { time: "2024-04-10", value: 105 },
      { time: "2024-04-11", value: 100 },
      { time: "2024-04-12", value: 110 },
      { time: "2024-04-13", value: 115 },
      { time: "2024-04-14", value: 100 },
      { time: "2024-04-15", value: 100 },
      { time: "2024-04-16", value: 110 },
      { time: "2024-04-17", value: 105 },
      { time: "2024-04-18", value: 120 },
      { time: "2024-04-19", value: 115 },
      { time: "2024-04-20", value: 125 },
      { time: "2024-04-21", value: 130 },
      { time: "2024-04-22", value: 110 },
      { time: "2024-04-23", value: 105 },
      { time: "2024-04-24", value: 90 },
      { time: "2024-04-25", value: 100 },
      { time: "2024-04-26", value: 105 },
      { time: "2024-04-27", value: 100 },
      { time: "2024-04-28", value: 110 },
      { time: "2024-04-29", value: 120 },
      { time: "2024-04-30", value: 100 },
      { time: "2024-05-01", value: 130 },
      { time: "2024-05-02", value: 140 },
      { time: "2024-05-03", value: 135 },
      { time: "2024-05-04", value: 140 },
      { time: "2024-05-05", value: 145 },
      { time: "2024-05-06", value: 150 },
      { time: "2024-05-07", value: 130 },
      { time: "2024-05-08", value: 120 },
      { time: "2024-05-09", value: 110 },
      { time: "2024-05-10", value: 155 },
      { time: "2024-05-11", value: 100 },
      { time: "2024-05-12", value: 110 },
      { time: "2024-05-13", value: 115 },
      { time: "2024-05-14", value: 130 },
      { time: "2024-05-15", value: 140 },
      { time: "2024-05-16", value: 120 },
      { time: "2024-05-17", value: 135 },
      { time: "2024-05-18", value: 120 },
      { time: "2024-05-19", value: 135 },
      { time: "2024-05-20", value: 145 },
      { time: "2024-05-21", value: 155 },
      { time: "2024-05-22", value: 145 },
      { time: "2024-05-23", value: 150 },
      { time: "2024-05-24", value: 130 },
      { time: "2024-05-25", value: 120 },
      { time: "2024-05-26", value: 155 },
      { time: "2024-05-27", value: 100 },
      { time: "2024-05-28", value: 110 },
      { time: "2024-05-29", value: 115 },
      { time: "2024-05-30", value: 130 },
      { time: "2024-05-31", value: 140 },
      { time: "2024-06-01", value: 120 },
      { time: "2024-06-02", value: 135 },
      { time: "2024-06-03", value: 120 },
      { time: "2024-06-04", value: 135 },
      { time: "2024-06-05", value: 145 },
      { time: "2024-06-06", value: 155 },
      { time: "2024-06-07", value: 145 },
      { time: "2024-06-08", value: 150 },
      { time: "2024-06-09", value: 130 },
      { time: "2024-06-10", value: 120 },
      { time: "2024-06-11", value: 155 },
      { time: "2024-06-12", value: 130 },
      { time: "2024-06-13", value: 140 },
      { time: "2024-06-14", value: 120 },
      { time: "2024-06-15", value: 135 },
      { time: "2024-06-16", value: 150 },
      { time: "2024-06-17", value: 135 },
      { time: "2024-06-18", value: 145 },
      { time: "2024-06-19", value: 155 },
      { time: "2024-06-20", value: 145 },
      { time: "2024-06-21", value: 150 },
      { time: "2024-06-22", value: 140 },
      { time: "2024-06-23", value: 150 },
      { time: "2024-06-24", value: 155 },
      // Ensure the data is sorted by time
    ];

    // Sort the data array by time
    data.sort(
      (a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()
    );

    areaSeries.setData(data);

    return () => {
      chart.remove();
    };
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div id="chart-container" className="w-3/4 h-3/4"></div>
    </div>
  );
};

export default Chart;
