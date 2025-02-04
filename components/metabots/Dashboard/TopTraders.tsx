import React, { FC, useMemo } from "react";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";


import { priceAlertsMock } from "@/utils/copyMockData3";
import { FetchDynamicTokenResponse, TransactionData } from "@/utils/types";
import { IoCopyOutline } from "react-icons/io5";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { useWalletContext } from "@/context/WalletContext";
import Link from "next/link";


interface TopTradersProps {
  topTradersData: TransactionData[] | null;
  tokenAddressDynamic: FetchDynamicTokenResponse;
  loading: boolean;
}


const TopTraders:FC<TopTradersProps> = ({topTradersData, loading, tokenAddressDynamic}) => {
 
  if (loading) {
    return <p>Loading...</p>;
  }

  if (!topTradersData || topTradersData.length === 0) {
    return <p>No data available.</p>;
  }
  console.log({topTradersData})


  // const { selectedWallet, balances } = useWalletContext();
  // const selectedWalletBalance = useMemo(() => {
  //   if (
  //     selectedWallet?.publicAddress &&
  //     balances[selectedWallet.publicAddress] !== undefined
  //   ) {
  //     const balance = balances[selectedWallet.publicAddress];
  //     return balance === 0 ? "0.000000" : balance.toFixed(6);
  //   }
  //   return "Fetching...";
  // }, [selectedWallet, balances]);
  
  function formatTimestamp(timestamp: number): string {
    const date = new Date(timestamp); 
    const time = date.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }); 
    const formattedDate = date.toLocaleDateString("en-GB"); 
    return `${time} ${formattedDate}`;
  }
  
  const formatToDollars = (amount: number): string => {
    if (!amount) return "$0"; 
    const roundedAmount = Math.round(amount); 
    return `$${roundedAmount.toLocaleString()}`; 
  };
  
  const formatNumber = (num: number | null | undefined): string => {
    if (num == null || isNaN(num) || typeof num !== 'number') return 'N/A'; 
  
    let formattedNum = num.toFixed(1);
  
    if (num >= 1_000_000) {
      formattedNum = (num / 1_000_000).toFixed(1) + 'M'; 
    } else if (num >= 1_000) {
      formattedNum = (num / 1_000).toFixed(1) + 'K'; 
    }
  
    return formattedNum;
  };
  
  
  
  return (
    <>
      <Table className="text-left w-full table-auto mx-auto border-none outline-0">
  <TableHeader className="">
    <TableRow className="border-none outline-0">
      <TableHead className="text-center w-[120px] md:w-[150px] lg:w-[150px] font-medium text-[9px] md:text-[12px] lg:text-[14px]">
      Address
      </TableHead>
      <TableHead className="text-center w-[50px] md:w-[80px] lg:w-[200px] font-medium text-[#E0E0E0] text-[9px] md:text-[12px] lg:text-[14px]">
      Total Amt Invested
      </TableHead>
      <TableHead className="text-left w-[120px] md:w-[150px] lg:w-[150px] font-medium text-[9px] md:text-[12px] lg:text-[14px]">
       Profit
      </TableHead>
      <TableHead className="text-center w-[120px] md:w-[150px] lg:w-[150px] font-medium text-[9px] md:text-[12px] lg:text-[14px]">
     Balance
      </TableHead>
     
      <TableHead className="text-center w-[120px] md:w-[150px] lg:w-[150px] font-medium text-[9px] md:text-[12px] lg:text-[14px]">
       Action
      </TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {topTradersData?.map((item, index) => (
      <TableRow key={index} className="border-none outline-0">
      <TableCell className="text-center w-[120px] md:w-[150px] lg:w-[150px] font-normal text-[9px] md:text-xs lg:text-[10px] text-[#E7E7E7] flex justify-center items-center gap-1">
      <span
    className="cursor-pointer truncate "
    onClick={() => {
      navigator.clipboard.writeText(item.wallet);
      toast({
        title: "Copied to Clipboard",
        description: `${item.wallet.slice(0, 6)}...${item.wallet.slice(-4)} copied!`,
        duration: 3000,
      });
    }}
  >
    {`${item.wallet.slice(0, 6)}...${item.wallet.slice(-4)}`}
  </span>
  <IoCopyOutline
    className="w-4 h-4 cursor-pointer"
    onClick={() => {
      navigator.clipboard.writeText(item.wallet);
      toast({
        title: "Copied to Clipboard",
        description: `${item.wallet.slice(0, 6)}...${item.wallet.slice(-4)} copied!`,
        duration: 3000,
      });
    }}
  />
</TableCell>

      
<TableCell className="text-left pl-12 w-[120px] md:w-[150px] lg:w-[150px] font-normal text-[9px] md:text-sm lg:text-sm">
  {formatToDollars(item?.total_invested)}
</TableCell>

        <TableCell className="text-left pl-4 w-[120px] md:w-[150px] lg:w-[150px] font-normal text-[9px] md:text-xs lg:text-xs  text-xs text-[#4CA244]">
        {formatToDollars(item?.realized)}
        </TableCell>
        <TableCell className="text-left w-[120px] md:w-[150px] lg:w-[150px] font-normal text-[9px] md:text-xs lg:text-xs">
  <div className="flex flex-col gap-1">
    {/* First Row */}
    <div className="text-left">
      <span className="font-normal text-xs">0</span>
    </div>
    {/* Second Row */}
    <div className="flex justify-between items-center">
      {/* Left: Held */}
      <div className="flex items-center gap-1">
        <span className="font-normal text-[9px] text-[#4CA244]">{formatNumber(item?.held)}</span>
        <p className="font-normal text-xs">held</p>
      </div>
      {/* Right: Sold */}
      <div className="flex items-center gap-1">
        <span className="font-normal text-xs text-red-500">{formatNumber(item?.sold)}</span>
        <p className="font-normal text-[9px]">sold</p>
      </div>
    </div>
  </div>
</TableCell>
<Link
  href={`/sol/copyTrade?label=${encodeURIComponent(tokenAddressDynamic?.token?.name)}&address=${encodeURIComponent(item.wallet)}`}
  prefetch={false}
>
  <TableCell className="text-center w-[120px] md:w-[150px] lg:w-[150px] font-normal text-[9px] md:text-xs lg:text-xs py-2">
    <Button className="bg-[#0D6EFD] py-1 px-2 w-[70px] h-[28px] font-medium text-[10px]">
      Copy Trade
    </Button>
  </TableCell>
</Link>
       
      </TableRow>
    ))}
  </TableBody>
</Table>

    </>
  );
}
export default TopTraders