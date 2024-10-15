import React from "react";
import SideTabs from "@/components/metabots/copyTrades/SideTabs";

import WalletPerformanceTabs from "./WalletPerformanceTabs";
import CopyWallet from "@/components/CopyWallet";
import EvmTabs from "@/components/EvmTabs";

const CopyTrading = () => {
  return (
    <>
      <div className="w-full md:flex md:justify-center lg:flex lg:justify-center gap-4">
        <div className="hidden md:block lg:block w-full md:w-2/12 lg:w-4/12 h-full">
          <CopyWallet />
        </div>
        <div className="w-full md:w-10/12 lg:w-10/12 h-full">
          <EvmTabs />
        </div>
      </div>
    </>
  );
};

export default CopyTrading;
