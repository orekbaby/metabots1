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
      <div className="mb-24 md:mb-32 lg:mb-2 border-b-transparent outline-0 overflow-x-hidden">
        <Table className="w-full overflow-x-hidden ">
          <TableHeader>
            <TableRow className="border-none bg-[#0C141F] border-b-transparent outline-0 overflow-x-hidden">
              <TableHead className="w-[100px] font-normal text-[9px] md:text-[16px] lg:text-[16px] text-[#E7E7E7]">
                Token
              </TableHead>
              <TableHead className="w-[100px] md:w-[150px] lg:w-[150px] font-normal  text-[9px] md:text-[16px] lg:text-[16px] text-center">
                Number Of Wallets
              </TableHead>
              <TableHead className="w-[100px] md:w-[150px] lg:w-[150px] font-normal  text-[9px] md:text-[16px] lg:text-[16px] text-left md:text-center lg:text-center pr-4 md:pr-32 lg:pr-32">
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
