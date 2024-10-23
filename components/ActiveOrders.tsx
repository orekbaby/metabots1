"use client"; // This must be the first line of your component file

import React from 'react';
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
import { GoCopy } from 'react-icons/go';

const ActiveOrders = () => {
  const walletData: WalletData | null = useSelector((state: RootState) => state.wallet.walletData);
  
  return (
    <>
      <Table className="overflow-x-hidden w-full">
        <TableHeader>
          <TableRow className="border-none bg-[#0C141F]">
            <TableHead className="font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px] text-left">
              Time Left
            </TableHead>
            <TableHead className="text-center md:text-left lg:text-left font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px]">
              Copied Address
            </TableHead>
            <TableHead className="font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px]">
              Status
            </TableHead>
            <TableHead className="font-normal text-left md:text-center lg:text-center md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px]">
              <div className="">Action</div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {walletData && (
            <TableRow className="border-[#212E40]">
              {/* Time Left - Placeholder value since it's not in API */}
              <TableCell className="flex items-center font-normal text-[9px] md:text-sm lg:text-sm">
                <div className="pl-2">N/A</div>
              </TableCell>

              {/* Copied Address */}
              <TableCell className="font-normal text-[9px] md:text-sm lg:text-sm text-left">
                <div className="text-left pl-2">
                  <div className="flex flex-col gap-1 text-left">
                    <div className="text-sm font-medium">{walletData?.label || 'Loading...'}</div>
                    <div className="flex justify-start items-center gap-2">
                      <div className="text-sm font-medium">
                        {`${walletData?.walletAddress?.slice(0, 8)}...${walletData?.walletAddress?.slice(-8)}`}
                      </div>
                      <GoCopy />
                    </div>
                  </div>
                </div>
              </TableCell>

              {/* Status */}
              <TableCell className="font-normal text-[9px] md:text-sm lg:text-sm">
                <div className="pl-2">{walletData.status ? "Active" : "Inactive"}</div>
              </TableCell>

              {/* Action */}
              <TableCell className="font-normal pl-2 text-[9px] md:text-sm lg:text-sm">
                <div className="text-center">{walletData.action}</div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default ActiveOrders;
