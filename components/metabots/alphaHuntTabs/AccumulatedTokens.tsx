import React from "react";
import AccumulatedTokenTable from "@/components/metabots/alphaHuntTabs/AccumulatedTokenTable";

import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
} from "@/components/ui/table";

const AccumulatedTokens = () => {
  return (
    <>
      <div className="mb-72 overflow-x-hidden overflow-y-auto scrollbar-hide h-[400px]">
        <Table className="w-full">
          <TableHeader>
            <TableRow className="border-none bg-[#0C141F]">
              <TableHead className="w-[100px] font-bold text-[9px] md:text-[16px] lg:text-[16px] text-[#E7E7E7]">
                Token
              </TableHead>
              <TableHead className="w-[150px] font-normal md:font-bold lg:font-bold text-[9px] md:text-[16px] lg:text-[16px] text-center">
                Number Of Smart Wallets Token
              </TableHead>
              <TableHead className="w-[150px] font-normal md:font-bold lg:font-bold text-[9px] md:text-[16px] lg:text-[16px] text-right md:text-left lg:text-left pr-4 md:pr-4 lg:pr-4">
                1D Net Inflow
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <AccumulatedTokenTable />
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default AccumulatedTokens;
