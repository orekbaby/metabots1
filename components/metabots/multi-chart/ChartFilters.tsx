import React, { FC } from "react";
import { GrFormClock } from "react-icons/gr";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  columns: number;
  height: number;
  gaps: number;
  setColumns: (value: number) => void;
  setHeight: (value: number) => void;
  setGaps: (value: number) => void;
}

const ChartFilters: FC<Props> = ({
  columns,
  height,
  gaps,
  setColumns,
  setGaps,
  setHeight,
}) => {
  const handleColumnDecrease = () => {
    setColumns(columns - 1);
  };

  const handleColumnIncrease = () => {
    setColumns(columns + 1);
  };

  const handleHeightDecrease = () => {
    setHeight(height - 1);
  };

  const handleHeightIncrease = () => {
    setHeight(height + 1);
  };

  const handleGapsDecrease = () => {
    setGaps(gaps - 1);
  };

  const handleGapsIncrease = () => {
    setGaps(gaps + 1);
  };

  return (
    <>
      <div className="flex gap-8 mb-5 w-full h-fit items-center">
        <h1 className="font-semibold text-lg">Multi chart</h1>
        <div className="border px-3 border-[#212E40] rounded-md flex gap-1 items-center">
          <GrFormClock className="text-base" />
          <p className="font-normal text-sm">Chart Interval</p>
          <Select>
            <SelectTrigger className="w-fit bg-transparent">
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent className="w-[40px] text-white hover:text-black bg-[#060A0F] border-none outline-none">
              <SelectItem value="1">1M</SelectItem>
              <SelectItem value="3">3M</SelectItem>
              <SelectItem value="5">5M</SelectItem>
              <SelectItem value="15">15M</SelectItem>
              <SelectItem value="30">30M</SelectItem>
              <SelectItem value="60">1H</SelectItem>
              <SelectItem value="120">2H</SelectItem>
              <SelectItem value="240">4H</SelectItem>
              <SelectItem value="360">6H</SelectItem>
              <SelectItem value="480">8H</SelectItem>
              <SelectItem value="720">12H</SelectItem>
              <SelectItem value="1d">1Day</SelectItem>
              <SelectItem value="3d">3Days</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="border p-3 border-[#212E40] rounded-md flex gap-1 items-center">
          <p className="font-normal text-sm">Columns</p>
          <Button
            variant="outline"
            size="sm"
            className="w-[20px] h-[20px] bg-transparent border border-[#212E40] hover:bg-transparent"
            onClick={handleColumnDecrease}
            disabled={columns === 1} // Disable the button when columns === 1
          >
            -
          </Button>
          <p className="text-sm font-normal">{columns}</p>
          <Button
            onClick={handleColumnIncrease}
            disabled={columns === 3} // Disable the button when columns === 3
            variant="outline"
            size="sm"
            className="w-[20px] h-[20px] bg-transparent border border-[#212E40] hover:bg-transparent"
          >
            +
          </Button>
        </div>

        <div className="border p-3 border-[#212E40] rounded-md flex gap-1 items-center">
          <p className="font-normal text-sm">Height</p>
          <Button
            variant="outline"
            size="sm"
            className="w-[20px] h-[20px] bg-transparent border border-[#212E40] hover:bg-transparent"
            onClick={handleHeightDecrease}
          >
            -
          </Button>
          <p className="text-sm font-normal">{height}</p>
          <Button
            onClick={handleHeightIncrease}
            variant="outline"
            size="sm"
            className="w-[20px] h-[20px] bg-transparent border border-[#212E40] hover:bg-transparent"
          >
            +
          </Button>
        </div>

        <div className="border p-3 border-[#212E40] rounded-md flex gap-1 items-center">
          <p className="font-normal text-sm">Gaps</p>
          <Button
            variant="outline"
            size="sm"
            className="w-[20px] h-[20px] bg-transparent border border-[#212E40] hover:bg-transparent"
            onClick={handleGapsDecrease}
          >
            -
          </Button>
          <p className="text-sm font-normal">{gaps}</p>
          <Button
            onClick={handleGapsIncrease}
            variant="outline"
            size="sm"
            className="w-[20px] h-[20px] bg-transparent border border-[#212E40] hover:bg-transparent"
          >
            +
          </Button>
        </div>
      </div>
    </>
  );
};

export default ChartFilters;
