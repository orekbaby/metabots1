import React from "react";
import ProfitableTrades from "./ProfitableTrades";
import BiggestLosses from "./BiggestLosses";

import EvmDetails from "./EvmDetails";
import { useSelector } from 'react-redux';
import { RootState } from '@/store/index';
import { WalletData } from "@/utils/types"; // Keep the import
import { WalletAnalysisSummary } from "@/utils/types";
import { FaRegSmile } from "react-icons/fa";
import { ImSpinner8 } from "react-icons/im";
import WalletPerformanceMobileTabs from "./WalletPerformanceMobileTabs";

const WalletPerformance = () => {
  const walletData: WalletData | null = useSelector((state: RootState) => state.wallet.walletData);
  const { loading } = useSelector((state: RootState) => state.wallet);

  const formatNumber = (value: number | null): string => {
    if (value === null) return '0';

    const absValue = Math.abs(value);
    const sign = value < 0 ? '-' : ''; 

    if (absValue >= 1000000) {
        return `${sign}$${(absValue / 1000000).toFixed(2)}M`; 
    } else if (absValue >= 1000) {
        return `${sign}$${(absValue / 1000).toFixed(2)}k`; 
    } else {
        return `${sign}$${absValue.toFixed(2)}`; 
    }
};



  
  return (
    <>

      <div className=" bg-transparent md:bg-[#0C141F] lg:bg-[#0C141F] h-auto md:h-[650px] lg:h-full w-full border-transparent  md:border md:border-[#212E40]  lg:border lg:border-[#212E40] mb-5 md:mb-0 lg:mb-0 mt-0 md:mt-2 lg:mt-2  pt-0 md:pt-2 lg:pt-2 pr-0 md:pr-4 rounded-md">
      {!walletData && !loading ? (


<div className="flex flex-col items-center justify-center pt-40 gap-3">
<FaRegSmile className="w-[60px] h-[60px] text-gray-700"/>
<h4>Add wallet address & click on the &quot;Analyse Wallet&quot; button to get started.</h4>
<p>More transactions you perform, more queries you have to analyse wallets.</p>
</div>
    ) : loading ? (
      // Show loading state when wallet analysis starts
      <div className="flex flex-col items-center justify-center pt-40 gap-3">
        <ImSpinner8 className="w-[60px] h-[60px] animate-spin text-[#707070]" />
        <h4>Please wait, analysing your wallet...</h4>
      </div>
    ) : (
      
<>
<EvmDetails />
       
        <div className="ml-0 md:ml-2 lg:ml-3 w-full h-auto md:h-[560px] lg:h-[560px] border-transparent md:border md:border-[#212E40] lg:border lg:border-[#212E40] pt-4 pb-0 md:pb-2 lg:pb-2 px-0 md:px-3 lg:px-3">
        <div className="bg-[#17212F] flex items-center py-2 px-2 md:px-3 lg:px-3 rounded-[8px] w-full mb-5 md:mb-1 lg:mb-1">
      {/* First Column: Win Rate */}
      <div className="flex flex-row justify-start items-center">
        <p className="font-normal text-[9px] md:text-sm lg:text-xs mb-[2px] pt-3">Win Rate:</p>
        <p className="text-[#FFC107] text-[10px] md:text-[20px] lg:text-[18px] font-bold pt-5">
        {walletData?.walletAnalysis?.[2]?.summary?.winPercentage == null 
  ? '0%' 
  : `${Math.floor(walletData?.walletAnalysis?.[2]?.summary?.winPercentage ?? 0)}%`}

        </p>
      </div>

      {/* Second Column: Other Flex Content */}
      <div className="flex justify-between items-center gap-2 md:gap-10 pt-5 lg:gap-2 w-full pl-4">
        {/* Wins and Loses */}
        <div className="flex justify-center items-center gap-3">
          <p className="font-medium text-[8px] md:text-[12.5px] lg:text-[12px]">
            Wins:{" "}
            <span className="text-[8px] md:text-[12.5px] lg:text-[12px] font-medium text-[#4CA244]">
              {walletData?.walletAnalysis?.[2]?.summary?.totalWins ?? 0}
            </span>
          </p>
          <p className="font-medium text-[8px] md:text-[12.5px] lg:text-[12px]">
            Loses:{" "}
            <span className="text-[8px] md:text-[12.5px] lg:text-[12px] font-medium text-[#E63E3A]">
              {walletData?.walletAnalysis?.[2]?.summary?.totalLosses ?? 0}
            </span>
          </p>
        </div>

        {/* Total Realized Gains */}
        <div className="flex items-center gap-1">
          <p className="font-normal text-[9px] md:text-sm lg:text-[13px] text-[#E7E7E7]">Total Realized Gains:</p>
          <span className="text-[#4CA244] text-[10px] md:text-sm lg:text-[13px] font-semibold">
            {formatNumber(walletData?.walletAnalysis?.[2]?.summary?.realized ?? 0)}
          </span>
        </div>

        {/* Total Unrealized Gains */}
        <div className="flex items-center gap-1">
          <p className="font-normal text-[9px] md:text-sm lg:text-[13px] text-[#E7E7E7]">Total Unrealized Gains:</p>
          <span className="text-[#E63E3A] text-[10px] md:text-sm lg:text-[13px] font-semibold">
            {formatNumber(walletData?.walletAnalysis?.[2]?.summary?.unrealized ?? 0)}
          </span>
        </div>

        {/* Total Invested */}
        <div className="hidden md:flex lg:flex items-center gap-1">
          <p className="font-normal text-[9px] md:text-sm lg:text-[13px] text-[#E7E7E7]">Total Invested:</p>
          <span className="text-[#DBE9FF] text-[9px] md:text-[14px] lg:text-[13px] font-semibold">
            {formatNumber(walletData?.walletAnalysis?.[2]?.summary?.totalInvested ?? 0)}
          </span>
        </div>
      </div>
    </div>


          {/* wallet performance tabs mobile */}
          <div className="block md:hidden lg:hidden">
            <WalletPerformanceMobileTabs />
          </div>
          <div
  className="hidden md:grid lg:grid w-full grid-cols-1 text-center
             md:grid-cols-2 lg:grid-cols-2 md:gap-x-32 lg:gap-x-4 md:gap-y-8 lg:gap-y-4 overflow-x-hidden"
>
  {/* Positive Trades */}
  <div className="w-full hidden md:block lg:block">
    <div className="w-full flex justify-start items-center mb-3">
      <h4 className="mt-8 font-medium text-[9px] md:text-sm lg:text-sm">
        Most Profitable Trades
      </h4>
    </div>
    <ProfitableTrades />
  </div>

  {/* Negative Trades */}
  <div className="w-full hidden md:block lg:block">
    <div className="flex justify-start items-center pl-2 mb-3">
      <h4 className="mt-8 font-medium  text-[9px] md:text-sm lg:text-sm">
        Biggest Losses
      </h4>
    </div>
    <BiggestLosses />
  </div>
</div>
</div>
        </>
        
 ) }
      </div>
     
    </>
  );
};
export default WalletPerformance;
