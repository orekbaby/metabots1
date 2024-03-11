import React, { FC } from "react";
import Chart from "@/components/metabots/charts/Chart";
interface Props {
  height: number;
}

const StaticChartCard: FC<Props> = ({ height }) => {
  return (
    <div
      className="flex flex-col w-full bg-[#212E40] justify-center items-center gap-3 cursor-pointer rounded-lg"
      style={{ height: `${height}px` }} // Dynamic height based on the prop
    >
      <Chart />
    </div>
  );
};

export default StaticChartCard;
