import React from "react";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { newTokensMock } from "@/utils/mockData3";

export default function All() {
  return (
    <>
      <Table className="text-left overflow-x-hidden w-full">
        <TableHeader>
          <TableRow className="border-none bg-[#0C141F]">
            <TableHead className="w-[100px] font-semibold md:font-bold lg:font-bold text-[9px] md:text-xs lg:text-xs ">
              Age
            </TableHead>
            <TableHead className="w-[100px] font-semibold md:font-bold lg:font-bold text-[9px] md:text-xs lg:text-xs">
              Token Name
            </TableHead>

            <TableHead className="font-semibold md:font-bold lg:font-bold text-[9px] md:text-xs lg:text-xs">
              <div className="text-center w-[120px] md:w-[120px] lg:w-[120px]">
                Scam Score
              </div>
            </TableHead>

            <TableHead className="w-[100px] font-semibold md:font-bold lg:font-bold text-[9px] md:text-xs lg:text-xs">
              Price
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {newTokensMock?.map((row, index) => (
            <TableRow key={index} className="border-none">
              <TableCell className="w-[100px] flex items-center font-normal text-[9px] md:text-xs lg:text-xs pl-4">
                {row.Age}
              </TableCell>
              <TableCell className="w-[80px]  text-center md:text-left lg:text-left font-normal text-[9px]md:text-xs lg:text-xs pl-6 md:pl-4 lg:pl-4">
                {row.TokenName}
              </TableCell>
              <TableCell className="text-center w-[120px] font-bold text-[9px] md:text-xs lg:text-xs pr-2">
                <span
                  className="font-normal text-center text-[9px] md:text-xs lg:text-xs"
                  style={{
                    color: [0, 2, 3].includes(index) ? "#1BA97F" : "#E63E3A",
                  }}
                >
                  {row.scamScore}
                </span>
              </TableCell>
              <TableCell className="w-[100px] font-normal text-[9px] md:text-xs lg:text-xs pl-4">
                {row.price}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
