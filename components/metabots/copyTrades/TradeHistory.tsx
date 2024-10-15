import React from "react";
import TradingHistory from "@/components/metabots/copyTrades/TradingHistory";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const TradeHistory = () => {
  return (
    <>
      {" "}
      <div className="w-full flex justify-between px-3 md:px-10 lg:px-4  ">
        <h4 className="font-bold text-base text-[#E7E7E7]">Trade History</h4>
        <Select>
          <SelectTrigger className="w-fit bg-transparent gap-2 mb-3">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent className="w-[24px] text-white hover:text-black bg-[#060A0F] border-none outline-none">
            <SelectItem value="1">1M</SelectItem>
            <SelectItem value="3">3M</SelectItem>
            <SelectItem value="5">5M</SelectItem>
            <SelectItem value="15">15M</SelectItem>
            <SelectItem value="30">30M</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <TradingHistory />
    </>
  );
};

export default TradeHistory;
