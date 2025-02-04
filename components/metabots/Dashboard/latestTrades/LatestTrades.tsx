import React, { FC, useMemo } from "react";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { LatestTradesResponse, TradeToken } from "@/utils/types";
import { toast } from "@/hooks/use-toast";
import { IoCopyOutline } from "react-icons/io5";

interface LatestTradesProps {
  latestTradesData: any;
  loading: boolean;
  dayjs:any;
}

const LatestTrades: FC<LatestTradesProps> = ({ latestTradesData, loading, dayjs }) => {
 



const trades = useMemo(() => {
  if (!latestTradesData) return [];
  if (latestTradesData?.trades?.length) {
    return latestTradesData.trades;
  }
  return [];
}, [latestTradesData]);

console.log('latestTradesData:', latestTradesData);
console.log('Flattened trades:', trades);
console.log("hello world")
  
  

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!trades.length) {
    return <p>No data available.</p>;
  }

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
    <Table className="text-left overflow-x-hidden w-full">
      <TableHeader>
        <TableRow className="border-none">
          <TableHead className="w-1/4 font-semibold md:font-bold lg:font-bold text-[10px] md:text-[12px] lg:text-[12px] pl-4">
            Time
          </TableHead>
          <TableHead className="font-semibold md:font-bold lg:font-bold text-[10px] md:text-[12px] lg:text-[12px] p-2">
            Type
          </TableHead>
          <TableHead className="font-semibold md:font-bold lg:font-bold text-[10px] md:text-[12px] lg:text-[12px] p-2">
          Price USD
          </TableHead>
          <TableHead className="font-semibold md:font-bold lg:font-bold text-[10px] md:text-[12px] lg:text-[12px] p-2">
          Amount
          </TableHead>
          <TableHead className="font-semibold md:font-bold lg:font-bold text-[10px] md:text-[12px] lg:text-[12px] p-2">
           Volume
          </TableHead>
          <TableHead className="font-semibold md:font-bold lg:font-bold text-[10px] md:text-[12px] lg:text-[12px] p-2">
          Wallet
          </TableHead>
          <TableHead className="font-semibold md:font-bold lg:font-bold text-[10px] md:text-[12px] lg:text-[12px] p-2">
           Hash
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {trades?.map((trade: TradeToken, index: number) => (
          <TableRow key={index} className="border-none">
            <TableCell className="flex items-center font-normal text-[9px] md:text-sm lg:text-sm pl-4">
            {dayjs(trade?.time).fromNow()}
            </TableCell>
            <TableCell className="font-normal text-[9px] md:text-sm lg:text-sm pl-2">
              <span
                style={{
                  color: trade?.type.toLowerCase() === "buy" ? "#06C270" : "#FF3B3B",
                }}
              >
                {trade?.type || "N/A"}
              </span>
            </TableCell>
            <TableCell className="font-normal text-center md:text-left lg:text-left pr-6 md:pr-0 lg:pr-0 text-[9px] md:text-sm lg:text-sm">
              ${trade?.priceUsd?.toFixed(3) || "0.000000"}
            </TableCell>
            <TableCell className="font-normal text-[9px] md:text-sm lg:text-sm">
              {formatNumber(trade?.amount)}
            </TableCell>
            <TableCell className="font-normal text-[9px] md:text-sm lg:text-sm">
              ${trade?.volume?.toFixed(1) || "N/A"}
            </TableCell>
            <TableCell className="flex justify-start items-center gap-1 font-normal text-left md:text-left lg:text-left pr-6 md:pr-0 lg:pr-0 text-[9px] md:text-sm lg:text-sm">
            <span
    className="cursor-pointer truncate "
    onClick={() => {
      navigator.clipboard.writeText(trade?.wallet);
      toast({
        title: "Copied to Clipboard",
        description: `${trade?.wallet.slice(0, 6)}...${trade?.wallet.slice(-4)} copied!`,
        duration: 3000,
      });
    }}
  >
    {`${trade?.wallet.slice(0, 6)}...${trade?.wallet.slice(-4)}`}
  </span>
  <IoCopyOutline
    className="w-4 h-4 cursor-pointer"
    onClick={() => {
      navigator.clipboard.writeText(trade?.wallet);
      toast({
        title: "Copied to Clipboard",
        description: `${trade?.wallet.slice(0, 6)}...${trade?.wallet.slice(-4)} copied!`,
        duration: 3000,
      });
    }}
  />
            </TableCell>
            <TableCell className="font-normal text-[9px] md:text-sm lg:text-sm">
              #
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default LatestTrades;
