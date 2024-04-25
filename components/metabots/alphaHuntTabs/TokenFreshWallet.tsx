import React from "react";
import AccumulatedTokenTable from "@/components/metabots/alphaHuntTabs/AccumulatedTokenTable";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
} from "@/components/ui/table";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const AccumulatedTokens = () => {
  return (
    <>
      <div className="mb-72 overflow-x-hidden overflow-y-auto scrollbar-hide h-[400px]">
        <Table className="overflow-x-hidden w-full">
          <TableHeader>
            <TableRow className="border-none bg-[#0C141F]">
              <TableHead className="w-[100px] font-bold text-[9px] md:text-[16px] lg:text-[16px] text-[#E7E7E7]">
                Token
              </TableHead>
              <TableHead className="w-[150px] font-normal md:font-bold lg:font-bold text-[9px] md:text-[16px] lg:text-[16px] text-center pr-0 md:pr-16 lg:pr-16">
                Number Of Fresh Wallet
              </TableHead>
              <TableHead className="w-[150px] font-normal md:font-bold lg:font-bold text-[9px] md:text-[16px] lg:text-[16px] text-right md:text-center lg:text-center pr-4 md:pr-32 lg:pr-32">
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
