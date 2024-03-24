"use client";
import React, { useState, useEffect } from "react";
import ChartFilters from "@/components/metabots/multi-chart/ChartFilters";
import AddChartCard from "@/components/metabots/multi-chart/AddChartCard";
import StaticChartCard from "@/components/metabots/multi-chart/StaticChartCard";

const Multichart = () => {
  const [columns, setColumns] = useState<number>(() => {
    const storedValue = localStorage.getItem("chart-col");
    return storedValue ? parseInt(storedValue) : 3;
  });

  const [height, setHeight] = useState<number>(() => {
    const storedValue = localStorage.getItem("height");
    return storedValue ? parseInt(storedValue) : 350;
  });

  const [gaps, setGaps] = useState<number>(() => {
    const storedValue = localStorage.getItem("gaps");
    return storedValue ? parseInt(storedValue) : 3;
  });

  useEffect(() => {
    if (columns) {
      localStorage.setItem("chart-col", JSON.stringify(columns));
    }

    if (height) {
      localStorage.setItem("height", JSON.stringify(height));
    }

    if (gaps) {
      localStorage.setItem("gaps", JSON.stringify(gaps));
    }
  }, [columns, height, gaps]); // Include columns, height, and gaps in the dependency array

  useEffect(() => {
    if (columns) {
      setColumns(JSON.parse(localStorage.getItem("chart-col") ?? "3"));
    }

    if (height) {
      setHeight(JSON.parse(localStorage.getItem("height") ?? "350"));
    }

    if (gaps) {
      setGaps(JSON.parse(localStorage.getItem("gaps") ?? "3"));
    }
  }, []); // No dependencies here as it should run only once on component mount

  return (
    <div className="mx-auto p-4 flex flex-col w-full">
      <ChartFilters
        columns={columns}
        height={height}
        gaps={gaps}
        setColumns={setColumns}
        setHeight={setHeight}
        setGaps={setGaps}
      />
      <div
        className={`grid grid-cols-${columns} gap-${gaps} w-full`}
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridGap: `${gaps}px`, // Set gap for both rows and columns
        }}
      >
        <StaticChartCard height={height} />
        <StaticChartCard height={height} />
        <StaticChartCard height={height} />
        <AddChartCard height={height} />
      </div>
    </div>
  );
};

export default Multichart;
