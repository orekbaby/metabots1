import React from "react";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { latestTradesMock } from "@/utils/copyMockData2";

export default function Limits() {
  return (
    <>
      <Table className="text-left overflow-x-hidden w-full">
        <TableHeader>
          <TableRow className="border-none">
            <TableHead className="w-1/4 font-semibold md:font-bold lg:font-bold text-[10px] md:text-[12px] lg:text-[12px] pl-4">
              Time
            </TableHead>
            <TableHead className="font-semibold md:font-bold lg:font-bold text-[10px] md:text-[12px] lg:text-[12px] p-2">
              Type
            </TableHead>
            <TableHead className="font-semibold md:font-bold lg:font-bold text-[10px] md:text-[12px] lg:text-[12px] p-2">
              Metacoin
            </TableHead>
            <TableHead className="font-semibold md:font-bold lg:font-bold text-[10px] md:text-[12px] lg:text-[12px] p-2">
              Total ETH
            </TableHead>
            <TableHead className=" font-semibold md:font-bold lg:font-bold text-[10px] md:text-[12px] lg:text-[12px] p-2">
              Total USD
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {latestTradesMock?.map((row, index) => (
            <TableRow key={index} className="border-none">
              <TableCell className="flex items-center font-normal text-[9px] md:text-sm lg:text-sm pl-4">
                {row.Time}
              </TableCell>
              <TableCell className="font-normal text-[9px] md:text-sm lg:text-sm">
                <span
                  style={{
                    color:
                      row.Type.toLowerCase() === "buy" ? "#06C270" : "#FF3B3B",
                  }}
                >
                  {row.Type}
                </span>
              </TableCell>

              <TableCell className="font-normal text-center md:text-left lg:text-left pr-6 md:pr-0 lgpr-0 text-[9px] md:text-sm lg:text-sm">
                {row.Metacoin}
              </TableCell>
              <TableCell className="font-normal text-[9px] md:text-sm lg:text-sm">
                {row.TotalETH}
              </TableCell>
              <TableCell className="font-normal text-[9px] md:text-sm lg:text-sm">
                {row.TotalUSD}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
