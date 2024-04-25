const chartOptions = {
  layout: { textColor: "black", background: { type: "solid", color: "white" } },
};
const chart = createChart(document.getElementById("container"), chartOptions);
const areaSeries = chart.addAreaSeries({
  lineColor: "#2962FF",
  topColor: "#2962FF",
  bottomColor: "rgba(41, 98, 255, 0.28)",
});

const data = [
  { value: 0, time: 1642425322 },
  { value: 8, time: 1642511722 },
  { value: 10, time: 1642598122 },
  { value: 20, time: 1642684522 },
  { value: 3, time: 1642770922 },
  { value: 43, time: 1642857322 },
  { value: 41, time: 1642943722 },
  { value: 43, time: 1643030122 },
  { value: 56, time: 1643116522 },
  { value: 46, time: 1643202922 },
];

areaSeries.setData(data);

chart.timeScale().fitContent();

import React, { useEffect } from "react";
import { createChart, ColorType, DeepPartial } from "lightweight-charts";

const ChartComponent = () => {
  useEffect(() => {
    const container = document.getElementById("container");
    if (!container) {
      console.error("Container element not found.");
      return;
    }

    const chartOptions: DeepPartial<TimeChartOptions> = {
      layout: {
        textColor: "black",
        background: { type: ColorType.Solid, color: "white" },
      },
    };
    const chart = createChart(container, chartOptions);
    const areaSeries = chart.addAreaSeries({
      lineColor: "#2962FF",
      topColor: "#2962FF",
      bottomColor: "rgba(41, 98, 255, 0.28)",
    });

    const data = [
      { value: 10, time: Date.now() - 10 * 24 * 60 * 60 * 1000 }, // Example: 10 days ago
      { value: 20, time: Date.now() - 9 * 24 * 60 * 60 * 1000 },
      { value: 15, time: Date.now() - 8 * 24 * 60 * 60 * 1000 },
      { value: 25, time: Date.now() - 7 * 24 * 60 * 60 * 1000 },
      { value: 30, time: Date.now() - 6 * 24 * 60 * 60 * 1000 },
      { value: 35, time: Date.now() - 5 * 24 * 60 * 60 * 1000 },
      { value: 40, time: Date.now() - 4 * 24 * 60 * 60 * 1000 },
      { value: 45, time: Date.now() - 3 * 24 * 60 * 60 * 1000 },
      { value: 50, time: Date.now() - 2 * 24 * 60 * 60 * 1000 },
      { value: 55, time: Date.now() - 1 * 24 * 60 * 60 * 1000 },
      { value: 60, time: Date.now() }, // Current time
    ];

    const formattedData = data.map((item) => ({
      time: Math.floor(item.time / 1000), // Convert milliseconds to seconds
      value: item.value,
    }));

    areaSeries.setData(formattedData);

    chart.timeScale().fitContent();
  }, []);

  return <div id="container" style={{ width: "100%", height: "400px" }} />;
};

export default ChartComponent;
