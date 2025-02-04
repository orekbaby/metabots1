import React from 'react';
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import Image from "next/image";

interface MyHoldingsTableProps {
  holdingsData: any; 
}

const MyHoldingsTable: React.FC<MyHoldingsTableProps> = ({ holdingsData }) => {
  return (
    <Table className="w-full overflow-x-hidden">
      <TableHeader>
        <TableRow className="border-none bg-[#0C141F]">
          <TableHead className="font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px] text-left">
            Token
          </TableHead>
          <TableHead className="font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px] text-center">
            Balance
          </TableHead>
          <TableHead className="font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px] text-center">
            P&L
          </TableHead>
          <TableHead className="font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px] text-center">
            Unrealized Gains
          </TableHead>
          <TableHead className="font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px] text-center">
            Total AMT Invested
          </TableHead>
          <TableHead className="font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px] text-center">
            Current Value
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody className="w-full h-[350px] overflow-y-auto scrollbar-hide">
      {holdingsData?.length > 0 ? (
          holdingsData?.map((row: any, index: number) => (
            <TableRow key={index} className="border-b border-[#212E40]">
              <TableCell className="flex items-center text-[9px] md:text-sm lg:text-sm">
                <div className="flex items-center gap-2 w-full">
                  <Image
                    width={42}
                    height={42}
                    alt="img"
                    className="rounded-full object-cover"
                    src="/lion2.png" 
                  />
                  <div className="flex gap-2 items-center text-white font-bold">
                    <p>{row.tokenName}</p>
                    <p>{row.tokenSymbol}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-[9px] md:text-sm lg:text-sm text-center">
                {row.balance}
              </TableCell>
              <TableCell className="text-[9px] md:text-sm lg:text-sm text-center">
                {row.pl}
              </TableCell>
              <TableCell className="text-[9px] md:text-sm lg:text-sm text-center">
                {row.unrealizedGains}
              </TableCell>
              <TableCell className="text-[9px] md:text-sm lg:text-sm text-center">
                {row.totalInvested}
              </TableCell>
              <TableCell className="text-[9px] md:text-sm lg:text-sm text-center">
                {row.currentValue}
              </TableCell>
            </TableRow>
          ))
        ) : (
          <div className="text-center w-full flex justify-center items-center absolute inset-0 font-semibold text-base">
            No Data Found
          </div>
        )}
      </TableBody>
    </Table>
  );
};

export default MyHoldingsTable;
