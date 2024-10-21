// EvmDetails.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { GoCopy } from "react-icons/go";
import { useSelector } from 'react-redux';
import { RootState } from '@/store/index';
import { WalletData } from "@/utils/types"; // Keep the import

const EvmDetails = () => {
  // Explicitly type the walletData variable
  const walletData: WalletData | null = useSelector((state: RootState) => state.wallet.walletData);

  console.log("received data", walletData);

  return (
    <div className="w-full pl-8 bg-[#0A1019] border-b-2 border-[#101720] mb-2 py-4">
      <div className="flex justify-between items-center">  
        <div className="text-sm font-medium">{walletData?.label || 'Loading...'}</div>
        <div className="items-center flex mb-0 justify-end gap-3">
          <Button className="flex items-center justify-center bg-transparent outline-0 border-none text-[#B5B6B6] text-[9px] md:text-sm lg:text-xs font-normal">
            {walletData?.noOfQueriesLeft}/5 Queries Left
          </Button>
          <Dialog>
            <DialogTrigger>
              <Button className="text-[#B5B6B6] outline-0 border-none bg-transparent font-normal text-[9px] md:text-xs lg:text-[10px] w-[67px] h-[24px] bg-[#17212F] rounded-[4.7px] px-1">
                Last 30 days
              </Button>
            </DialogTrigger>
            <DialogContent className="w-1/2 p-5 bg-[#0C141F] border-none">
              No content yet
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="justify-start flex-col md:flex-row lg:flex-row items-start md:items-center lg:items-center pr-8 flex gap-4 md:gap-0 lg:gap-4">
        <div className="flex justify-start items-center gap-2">
          <div className="text-sm font-medium">
            {`${walletData?.walletAddress?.slice(0, 8)}...${walletData?.walletAddress?.slice(-8)}`}
          </div>
          <GoCopy />
        </div>
        <div className="flex justify-center gap-4">
          <h2 className="font-normal text-xs md:text-[20px] leading-[27.2px] lg:text-[16px]">
            Wallet Balance:
          </h2>
          <div className="flex justify-center items-center gap-3">
            <h3 className="font-bold text-[9px] md:text-base lg:text-[20px] text-[#4CA244]">
              {walletData?.usdBalance !== null ? walletData?.usdBalance.toFixed(2) : 'Loading...'}
            </h3>
            <span className="font-bold text-base md:text-[24px] lg:text-xs text-white">
              {walletData?.solBalance !== null ? walletData?.solBalance.toFixed(8) : 'Loading...'} SOL
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvmDetails;
