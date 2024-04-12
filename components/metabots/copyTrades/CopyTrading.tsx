import React from "react";
import SideTabs from "@/components/metabots/copyTrades/SideTabs";

import WalletPerformanceTabs from "./WalletPerformanceTabs";

const CopyTrading = () => {
  return (
    <>
      <div className="w-full flex justify-center gap-1">
        <div className="w-3/12 h-full">
          <SideTabs />
        </div>
        <div className="w-full h-full flex-1">
          <WalletPerformanceTabs />
        </div>
      </div>
    </>
  );
};

export default CopyTrading;
