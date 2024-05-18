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
      <div className="border-b-transparent overflow-hidden">
        <Table className="overflow-x-hidden w-full">
          <TableHeader>
            <TableRow className="border-none bg-[#0C141F] border-b-transparent outline-0">
              <TableHead className="w-[100px] font-normal text-[9px] md:text-[16px] lg:text-[16px] text-[#E7E7E7]">
                Token
              </TableHead>
              <TableHead className="w-[100px] md:w-[150px] lg:w-[150px]  font-normal  text-[9px] md:text-[16px] lg:text-[16px] text-center pr-0 md:pr-16 lg:pr-16">
                Number Of Fresh Wallet
              </TableHead>
              <TableHead className="w-[100px] md:w-[150px] lg:w-[150px] font-normal text-[9px] md:text-[16px] lg:text-[16px] text-left md:text-center lg:text-center pr-4 md:pr-24 lg:pr-24">
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
