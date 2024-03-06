import React from "react";
import Chart from "@/components/metabots/charts/Chart";
import TokenEthDetails from "@/components/metabots/tokenDetails/TokenEthDetails";
import ChartFilters from "./ChartFilters";
import AddChartCard from "./AddChartCard";

const Multichart = () => {
  return (
    <div className="mx-auto p-4 flex flex-col w-full">
      <ChartFilters />
      <AddChartCard />
    </div>
  );
};

export default Multichart;
