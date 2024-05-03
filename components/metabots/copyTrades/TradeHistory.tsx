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
      <h3 className="text-xs md:text-[18px] lg:text-[18px] font-bold">
        Trade History
      </h3>
      <div className="w-full flex justify-end px-3 md:px-20 lg:px-20  ">
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
