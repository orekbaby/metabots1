import React from "react";
import { useSelector } from 'react-redux';
import { RootState } from '@/store/index';
import { WalletData} from "@/utils/types";
import { Button } from "@/components/ui/button";
import CopyTradeDetails from "@/components/CopyTradeDetails";
import { FaRegSmile } from "react-icons/fa"; 
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";


const ProfitableTrades = () => {
  const walletData: WalletData | null = useSelector((state: RootState) => state.wallet.walletData);

  
  const mostProfit = walletData?.walletAnalysis?.[0]?.mostProfit ?? [];

  const formatPNLPercentage = (value: number | undefined): string => {
    if (value === undefined || value === null) return '0%';
  
   let roundedValue = value.toFixed(2);
  
   
    if (value > 0) {
      return `+${roundedValue}%`;
    }
  
    
    return `${roundedValue}%`;
  }
  

  return (
    <>
      {mostProfit.length === 0 ? (
        <div className="flex flex-col items-center justify-center pt-20 gap-3">
          <p className="text-sm font-medium">This user hasn’t  made any profitable trades yet, check back soon!</p>
          <FaRegSmile className="w-[60px] h-[60px] text-gray-700" />
        </div>
      ) : (
        <div className="w-full">
  {mostProfit.map((trade, index) => (
    <div
      key={index}
      className="w-full border-none mb-3 md:mb-5 lg:mb-5 bg-[#161F2C] rounded-[8px] h-[52.39px]
        px-2 flex items-center justify-between"
    >
      {/* Container for Image and Symbol */}
      <div className="flex items-center gap-2 w-[20%]">
      <div className="flex items-center justify-center w-8 h-8 border border-white rounded-full bg-[#161F2C]">
    <span className="text-white text-xs font-semibold">
      {trade?.meta?.symbol?.substring(0, 3).toUpperCase()} 
    </span>
  </div>
        
        <p className="font-normal text-[9.38px]">{trade?.meta?.symbol}</p>
      </div>

      {/* PNL Percentage */}
      <div className="w-[25%] text-left">
        <p className="font-bold text-[12.51px] text-[#4CA244]">
          {formatPNLPercentage(trade?.pnlPercentage)}
        </p>
      </div>

      {/* Button */}
      <div className="w-[20%] flex justify-end pr-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              className="border-[#0D6EFD] border text-[10px] px-4 py-2 text-[#E7E7E7] rounded-[4px] font-semibold  w-[46.92px] h-[20.33px]"
            >
              View More
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-[#0C1623] w-full overflow-y-auto scrollbar-hide border-none outline-0 max-w-[750px] h-[479px] rounded-lg">
            <CopyTradeDetails />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  ))}
</div>

      )}
    </>
  );
};

export default ProfitableTrades;
