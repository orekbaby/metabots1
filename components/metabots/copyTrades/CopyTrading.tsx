import React from "react";
import SideTabs from "@/components/metabots/copyTrades/SideTabs";

import WalletPerformanceTabs from "./WalletPerformanceTabs";

const CopyTrading = () => {
  return (
    <>
      <div className="w-full md:flex md:justify-center lg:flex lg:justify-center gap-1">
        <div className="hidden md:block lg:block w-full md:w-2/12 lg:w-2/12 h-full">
          <SideTabs />
        </div>
        <div className="w-full md:w-10/12 lg:w-10/12 h-full">
          <WalletPerformanceTabs />
        </div>
      </div>
    </>
  );
};

export default CopyTrading;
