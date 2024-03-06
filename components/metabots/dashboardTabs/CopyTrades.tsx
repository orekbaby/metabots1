import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { BiPencil } from "react-icons/bi";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";

import { copyMock } from "@/utils/mockData";

export default function CopyTrades() {
  return (
    <>
      <Table className="text-left overflow-x-hidden w-full">
        <TableHeader>
          <TableRow className="border-none bg-[#0C141F]">
            <TableHead className="w-[150px] font-semibold md:font-bold lg:font-bold text-[12px]">
              Time
            </TableHead>
            <TableHead className="font-semibold md:font-bold lg:font-bold text-[12px]">
              Address
            </TableHead>
            <TableHead className="text-center w-[200px] font-semibold md:font-bold lg:font-bold text-[12px]">
              Status
            </TableHead>
            <TableHead className="text-left font-semibold md:font-bold lg:font-bold text-[12px]">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {copyMock?.map((row, index) => (
            <TableRow key={index} className="border-none">
              <TableCell className="flex items-center font-normal text-[9px] md:text-xs lg:text-xs">
                {row.time}
              </TableCell>
              <TableCell className="font-normal text-[9px] md:text-xs lg:text-xs">
                {row.address}
              </TableCell>
              <TableCell className="text-center font-normal text-[9px] md:text-xs lg:text-xs">
                {row.status.toLowerCase() === "completed" ? (
                  <span style={{ color: "#06C270" }}> {row.status} </span>
                ) : (
                  <span style={{ color: "#FFC107" }}>{row.status}</span>
                )}
              </TableCell>

              <TableCell className="text-center flex items-center gap-1 font-normal text-[9px] md:text-xs lg:text-xs">
                <BiPencil className="text-white" />
                <MdDeleteOutline className="text-xs text-white" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export { CopyTrades };
