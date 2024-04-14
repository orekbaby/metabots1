import React from "react";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { explorer } from "@/utils/mockData";
import { Button } from "@/components/ui/button";
const ExplorerTable = () => {
  return (
    <>
      {" "}
      <Table className="text-left h-auto w-full">
        <TableHeader>
          <TableRow className="border-none bg-[#0C141F]">
            <TableHead className="w-[100px] font-bold md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-xs">
              Address
            </TableHead>
            <TableHead className="font-bold md:font-bold text-center items-center lg:font-bold  text-[9px] md:text-[12px] lg:text-xs">
              <div className="w-[100px] items-center">Total Profit</div>
            </TableHead>
            <TableHead className="text-center items-center font-bold md:font-bold lg:font-bold  text-[9px] md:text-[12px] lg:text-xs">
              <div className="w-[150px]">Realized Profit</div>
            </TableHead>
            <TableHead className=" pr-2 md:pr-0 lg:pr-0 pl-0 md:pl-2 lg:pl-2 text-center font-bold md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-xs">
              <div className="w-[100px]">Action</div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {explorer?.map((row, index) => (
            <TableRow key={index} className="border-[#212E40]">
              <TableCell className="w-[120px] md:w-[160px] lg:w-[160px] flex items-center font-normal text-[9px] md:text-sm lg:text-sm">
                {row.address}
              </TableCell>

              <TableCell
                className="w-[200px] md:w-[100px] lg:w-[100px] text-center items-center text-[#05AC32] font-normal text-[9px]
               md:text-sm lg:text-sm pt-2"
              >
                {row.totalProfit}
              </TableCell>

              <TableCell className="w-[200px] md:w-[100px] lg:w-[100px] text-center items-center  text-[#05AC32] font-normal text-[9px] md:text-sm lg:text-sm">
                {row.profit}
              </TableCell>
              <TableCell className="w-[100px] text-right">
                <Button
                  className="w-[63px] md:w-[81px] lg:w-[81px]  h-[24px] md:h-[27px] lg:h-[27px]
                 bg-[#084298] text text-white rounded-[4px] text-[9px] md:text-xs lg:text-xs font-semibold"
                >
                  {row.button}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default ExplorerTable;
