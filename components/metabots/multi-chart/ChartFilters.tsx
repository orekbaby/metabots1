"use client";
import React from "react";
import { useState } from "react";
import { GrFormClock } from "react-icons/gr";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const ChartFilters = () => {
  const [columns, setColumns] = useState(1);
  const [height, setHeight] = useState(5);
  const [gaps, setGaps] = useState(5);

  const handleColumnDecrease = () => {
    if (columns > 1) {
      setColumns(columns - 1);
    }
  };

  const handleColumnIncrease = () => {
    setColumns(columns + 1);
  };

  const handleHeightDecrease = () => {
    if (height > 5) {
      setHeight(height - 5);
    }
  };

  const handleHeightIncrease = () => {
    setHeight(height + 5);
  };

  const handleGapDecrease = () => {
    if (gaps > 5) {
      setGaps(gaps - 5);
    }
  };

  const handleGapIncrease = () => {
    setGaps(gaps + 5);
  };

  return (
    <>
      {" "}
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
          >
            -
          </Button>
          <p className="text-sm font-normal">{columns}</p>
          <Button
            onClick={handleColumnIncrease}
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
            onClick={handleColumnDecrease}
          >
            -
          </Button>
          <p className="text-sm font-normal">{columns}</p>
          <Button
            onClick={handleColumnIncrease}
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
            onClick={handleColumnDecrease}
          >
            -
          </Button>
          <p className="text-sm font-normal">{columns}</p>
          <Button
            onClick={handleColumnIncrease}
            variant="outline"
            size="sm"
            className="w-[20px] h-[20px] border bg-transparent border-[#212E40] hover:bg-transparent"
          >
            +
          </Button>
        </div>
      </div>
    </>
  );
};

export default ChartFilters;
