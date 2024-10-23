import React from "react";
import Image from "next/image";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSelector } from 'react-redux';
import { RootState } from '@/store/index';
import { WalletData } from "@/utils/types";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";

const TradingHistory = () => {
  const walletData: WalletData | null = useSelector((state: RootState) => state.wallet.walletData);
  const txHistory = walletData?.trades

  return (
    <>
      <Table className="overflow-x-hidden w-full">
        <TableHeader>
          <TableRow className="border-none bg-[#0C141F]">
            <TableHead className="w-[150px]">
              <Select>
                <SelectTrigger className="w-fit bg-transparent gap-2 mb-3">
                  <SelectValue placeholder="1H" />
                </SelectTrigger>
                <SelectContent className="w-[16px] text-white hover:text-black  border-none outline-none">
                  <SelectItem value="1">1M</SelectItem>
                  <SelectItem value="3">3M</SelectItem>
                  <SelectItem value="5">5M</SelectItem>
                  <SelectItem value="15">15M</SelectItem>
                  <SelectItem value="30">30M</SelectItem>
                </SelectContent>
              </Select>
            </TableHead>
            <TableHead className="w-[100px] font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px] text-left pl-10">
              Token
            </TableHead>
            <TableHead className="w-[150px] text-center md:text-left lg:text-left font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px]">
              Type/Price
            </TableHead>
            <TableHead className=" w-[150px] font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px]">
              Amount/USD
            </TableHead>
            {/* <TableHead className="font-normal p-2 md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px]">
              <div className="w-[100px]">Realized Profit</div>
            </TableHead>
            <TableHead className=" w-[100px] font-normal p-2 md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px]">
              Realized Loss
            </TableHead>
            <TableHead className="font-normal text-left md:text-center lg:text-center md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px]">
              <div className="w-[100px]">Action</div>
            </TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
        {txHistory?.map((trade, index) => (
          <TableRow key={index} className="border-[#212E40]">
            {/* Time */}
            <TableCell className="flex items-center font-normal text-[9px] md:text-sm lg:text-sm pl-4 md:pr-4 lg:pr-4">
              <div className="w-[100px]">{new Date(trade.time).toLocaleString()}</div>
            </TableCell>
            
            {/* Volume */}
            <TableCell className="font-normal text-[9px] md:text-sm lg:text-sm text-left">
              <div className="w-[100px] md:w-[150px] lg:w-[150px] text-left pl-2 md:pl-4 lg:pl-4">
                <div className="flex gap-1 text-left pl-3">
                  <Image
                    src={trade.to.token.image}
                    width={18}
                    height={18}
                    alt={trade.to.token.symbol}
                  />
                  <h3 className="font-medium text-[9px] md:text-sm lg:text-sm">{trade.to.token.symbol}</h3>
                </div>
              </div>
            </TableCell>
            
            {/* Type/Price */}
            <TableCell className="text-center md:text-left lg:text-left font-normal text-[9px] md:text-sm lg:text-sm pl-6">
  <div className="w-[150px] md:w-[100px] lg:w-[100px]">
    <span style={{ color: trade.type === "buy" ? "#4CA244" : "#E14A3B" }}>
      {trade.type} {/* Directly from the API, no hardcoded text */}
    </span>
    <span> at ${trade.price.usd.toFixed(6)}</span> {/* Price from API */}
  </div>
</TableCell>

            
            {/* Amount/USD */}
            <TableCell className="font-normal text-[9px] md:text-sm lg:text-sm pl-4">
              <div className="w-[100px]">${trade.volume.usd.toFixed(2)}</div>
            </TableCell>
          </TableRow>
        ))}
        </TableBody>
      </Table>
    </>
  );
}

export default TradingHistory