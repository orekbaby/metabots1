import React from "react";
import dynamic from "next/dynamic";
import Multichart from "@/components/metabots/multi-chart/Multichart";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import YourWallet from "@/components/metabots/Dashboard/YourWallet";

const Tabs = dynamic(() => import("@/components/metabots/Dashboard/Tabs"), {
  ssr: false,
});

const Chart = dynamic(() => import("@/components/metabots/charts/Chart"), {
  ssr: false,
});

const TradeTabs = dynamic(
  () => import("@/components/metabots/Dashboard/tradeTabs/TradeTabs"),
  {
    ssr: false,
  }
);

const PriceTabs = dynamic(
  () => import("@/components/metabots/Dashboard/latestTrades/PriceTabs"),
  {
    ssr: false,
  }
);

const TokenDetails = dynamic(
  () => import("@/components/metabots/tokenDetails/TokenDetails"),
  {
    ssr: false,
  }
);

const TokenDetailsMobile = dynamic(
  () => import("@/components/metabots/tokenDetails/TokenDetailsMobile"),
  {
    ssr: false,
  }
);

const Terminal = () => {
  return (
    <>
      <TokenDetailsMobile />
      <div className="hidden md:flex lg:flex items-center">
        <TokenDetails />
      </div>
      <div className="flex w-full gap-2">
        <div className="flex-[72%] flex flex-col gap-2">
          <div className="flex gap-2">
            <div className="hidden md:inline lg:inline flex-[39%] mr-4">
              <Dialog>
                <DialogTrigger>
                  <h2 className="font-semibold text-sm w-fit text-[#FFC107] my-2 border-b-[1px] border-[#FFC107]">
                    Multi-Chart
                  </h2>
                </DialogTrigger>
                <DialogContent className="max-w-[95vw] max-h-[95vh] h-[95vh] w-[95vw] bg-[#0A1019] border border-slate-800 left-1/2 top-1/2 overflow-y-auto">
                  <Multichart />
                </DialogContent>
              </Dialog>

              {/* Pass the props to the Chart component */}
              <div className="h-[270px] border-2 rounded-2xl border-[#212E40]">
                <Chart />
              </div>
            </div>
            <div className="h-[250px] md:h-[300px] lg:h-[300px]  overflow-y-auto scrollbar-hide hidden md:inline lg:inline flex-[59%] border-[1px] border-[#212E40] rounded-[8px] mt-4 md:mt-0 lg:mt-0">
              <Tabs />
            </div>
          </div>
          <div className="hidden md:inline lg:inline h-[250px]  md:h-[340px] lg:h-[340px] overflow-x-hidden overflow-y-auto scrollbar-hide w-full border-[1px] border-[#212E40] rounded-[8px] mt-6">
            <PriceTabs />
          </div>
        </div>
        <div className="hidden md:inline lg:inline flex-[25%] w-full">
          <YourWallet />
          <div className="border-[1px] border-[#212E40] rounded-[8px] p-2 mt-3">
            <TradeTabs />
          </div>
        </div>
      </div>
    </>
  );
};

export default Terminal;
