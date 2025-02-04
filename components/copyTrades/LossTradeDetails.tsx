import { copyTradingDetails, tokenDetails } from '@/utils/mockData'
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '@/store/index';
import { WalletData } from "@/utils/types";

import CopyLossTable from '@/components/CopyLossTable'

const LossTradeDetails = () => {
  const walletData: WalletData | null = useSelector((state: RootState) => state.wallet.walletData);
  const mostLosses = walletData?.walletAnalysis?.[1]?.mostLosses ?? [];
  const trade = mostLosses.length > 0 ? mostLosses[1] : null;

  const formatNumber = (num: number | string): string => {
    const parsedNum = parseFloat(num.toString());
    
    if (isNaN(parsedNum)) return '$0'; 
    
    const absValue = Math.abs(parsedNum); 
    const sign = parsedNum < 0 ? '-' : ''; 
    
    if (absValue >= 1000000) {
      return `${sign}$${(absValue / 1000000)}M`; 
    } else if (absValue >= 1000) {
      return `${sign}$${(absValue / 1000).toFixed(2)}k`; 
    } else {
      return `${sign}$${absValue % 1 === 0 ? absValue : absValue.toFixed(2)}`; 
    }
  };

  const formatLargeNumber = (num: number | string) => {
    const parsedNum = parseFloat(num.toString());
  
    if (parsedNum >= 1_000_000) {
      return `$${(parsedNum / 1_000_000).toFixed(1)}M`;
    } else if (parsedNum >= 1_000) {
      return `$${(parsedNum / 1_000).toFixed(1)}K`;
    } else {
      return parsedNum.toString();
    }
  };

  return (
    <>
    <div className="">
        <div className="grid w-full mb-2 grid-cols-8 gap-2">
         
          <div className="flex flex-col items-start p-2 rounded-lg">
            <h2 className="font-normal text-[10px] text-[#E7E7E7]">Total Invested</h2>
          </div>

          <div className="flex flex-col items-start p-2 rounded-lg">
            <h2 className="font-normal text-[10px] text-[#E7E7E7]">Realized</h2>
          </div>
          <div className="flex flex-col items-start p-2 rounded-lg">
            <h2 className="font-normal text-[10px] text-[#E7E7E7]">Unrealized</h2>
          </div>
          <div className="flex flex-col items-start p-2 rounded-lg">
            <h2 className="font-normal text-[10px] text-[#E7E7E7]">Avg.Buy Price</h2>
          </div>
          <div className="flex flex-col items-start p-2 rounded-lg">
            <h2 className="font-normal text-[10px] text-[#E7E7E7]">Avg.Sell Price</h2>
          </div>

          <div className="flex flex-col items-start p-2 rounded-lg">
            <h2 className="font-normal text-[10px] text-[#E7E7E7]">Holding</h2>
          </div>

          <div className="flex flex-col items-start p-2 rounded-lg">
            <h2 className="font-normal text-[10px] text-[#E7E7E7]">Held</h2>
          </div>

          <div className="flex flex-col items-start p-2 rounded-lg">
            <h2 className="font-normal text-[10px] text-[#E7E7E7]">Sold</h2>
          </div>

          {/* Second Row: Data */}
          <div className="flex flex-col items-start p-2 rounded-lg">
            <h2 className="font-semibold text-xs text-[#0D6EFD]">
              {trade ? formatNumber(trade.total_invested) : "N/A"}
            </h2>
          </div>
          <div className="flex flex-col items-start p-2 rounded-lg">
            <h2 className="font-semibold text-xs text-[#4CA244]">
              {trade ? formatNumber(trade.realized) : "N/A"}
            </h2>
          </div>
          <div className="flex flex-col items-start p-2 rounded-lg">
            <h2 className="font-semibold text-xs text-[#E63E3A]">
              {trade ? formatNumber(trade.unrealized) : "N/A"}
            </h2>
          </div>
          <div className="flex flex-col items-start p-2 rounded-lg">
            <h2 className="font-semibold text-xs text-[#0D6EFD]">
              {trade ? formatNumber(trade.avgBuyPrice) : "N/A"}
            </h2>
          </div>
          <div className="flex flex-col items-start p-2 rounded-lg">
            <h2 className="font-semibold text-xs text-[#0D6EFD]">
              {trade ? formatNumber(trade.avgSellPrice) : "N/A"}
            </h2>
          </div>

          <div className="flex flex-col items-start p-2 rounded-lg">
            <h2 className="font-semibold text-xs text-[#E7E7E7]">
              {trade ? formatLargeNumber(trade.holding) : "N/A"}
            </h2>
          </div>
          <div className="flex flex-col items-start p-2 rounded-lg">
            <h2 className="font-semibold text-xs text-[#E7E7E7]">
              {trade ? formatLargeNumber(trade.held) : "N/A"}
            </h2>
          </div>
          <div className="flex flex-col items-start p-2 rounded-lg">
            <h2 className="font-semibold text-xs text-[#E7E7E7]">
              {trade ? formatLargeNumber(trade.sold) : "N/A"}
            </h2>
          </div>
        </div>

        <CopyLossTable />
      </div>
 </>
  )
}

export default LossTradeDetails