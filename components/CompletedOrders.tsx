"use client"; // This must be the first line of your component file

import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/index';
import { CopyTradeData, WalletData } from "@/utils/types";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { GoCopy } from 'react-icons/go';

interface completeOrdersProps {
  copyTradeData: CopyTradeData[] | null;
  }

const CompletedOrders:FC<completeOrdersProps> = ({copyTradeData}) => {
  
  
  return (
    <>
      <Table className="overflow-x-hidden w-full">
        <TableHeader>
          <TableRow className="border-none bg-gray-900">
            <TableHead className="font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px] text-left">
              Elapsed Time
            </TableHead>
            <TableHead className="text-center md:text-left lg:text-left font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px]">
              Copied Address
            </TableHead>
            <TableHead className="font-normal text-left md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px]">
              Status
            </TableHead>
           
          </TableRow>
        </TableHeader>
        <TableBody>
        {copyTradeData?.map((trade) => (
        <TableRow key={trade._id} className="border-transparent">
          <TableCell className="flex items-center font-normal text-[9px] md:text-sm lg:text-sm">
            {/* <div className="pl-2">N/A</div> */}
          </TableCell>
          <TableCell className="font-normal text-[9px] md:text-sm lg:text-sm text-left">
            <div className="text-left pl-2">
              <div className="flex flex-col gap-1 text-left">
                {/* <div className="text-sm font-medium">{trade.label || 'Loading...'}</div> */}
                <div className="flex justify-start items-center gap-2">
                  <div className="text-sm font-medium">
                    {/* {`${trade.walletAddress?.slice(0, 8)}...${trade.walletAddress?.slice(-8)}`} */}
                  </div>
                  {/* <GoCopy /> */}
                </div>
              </div>
            </div>
          </TableCell>
          <TableCell className="font-normal text-[9px] md:text-sm lg:text-sm">
            {/* Placeholder for status */}
          </TableCell>
          <TableCell className="font-normal pl-2 text-[9px] md:text-sm lg:text-sm">
            {/* <div className="text-center">{trade.action}</div> */}
          </TableCell>
        </TableRow>
      ))}
   
        </TableBody>
      </Table>
    </>
  );
};

export default CompletedOrders;
