import React from "react";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import Image from "next/image";
import { MdDeleteOutline } from "react-icons/md";
import { limitPage } from "@/utils/mockdataLimit";

export default function Limit() {
  return (
    <>
      <Table className="text-left overflow-x-hidden w-full">
        <TableHeader>
          <TableRow className="border-none bg-[#0A1019]">
            <div className="w-[50px]">
              <TableHead className="pl-2 md:pl-2 lg:pl-2">
                <Image
                  src="/payments.png"
                  width={20}
                  height={20}
                  alt="payments"
                />
              </TableHead>
            </div>
            <TableHead className="font-semibold md:font-bold lg:font-bold text-[12px]">
              Type
            </TableHead>
            <TableHead className="font-semibold md:font-bold lg:font-bold text-[12px] text-center md:text-left lg:text-left">
              Token
            </TableHead>
            <TableHead className="text-center font-semibold md:font-bold lg:font-bold text-[12px]">
              Quantity
            </TableHead>
            <TableHead className="text-center md:text-left lg:text-left font-semibold md:font-bold lg:font-bold text-[12px]">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {limitPage?.map((row, index) => (
            <TableRow key={index} className="border-none">
              <TableCell className="flex items-center font-normal text-[9px] md:text-xs lg:text-xs pl-2 md:pl-4 lg:pl-4">
                {row.payment}
              </TableCell>
              <TableCell className="font-normal text-[9px] md:text-xs lg:text-xs pl-4">
                {row.type}
              </TableCell>
              <TableCell className=" pl-2 md:pl-4 lg:pl-4 text-center md:text-left lg:text-left w-[50px] font-normal text-[9px] md:text-xs lg:text-xs">
                {row.token}
              </TableCell>
              <TableCell className=" text-left font-normal text-[9px] md:text-xs lg:text-xs pl-6 md:pl-8 lg:pl-12">
                {row.quantity}
              </TableCell>
              <TableCell className="flex text-right md:text-center lg:text-center items-center gap-1 font-normal text-[9px] md:text-xs lg:text-xs  pl-8 md:pl-4 lg:pl-4">
                {row.status.toLowerCase() === "completed" ? (
                  <span style={{ color: "#06C270" }}>{row.status}</span>
                ) : (
                  <span
                    className="flex items-center gap-1"
                    style={{ color: "#FFC107" }}
                  >
                    {row.status}
                    <MdDeleteOutline className="text-xs text-[#FF3B3B]" />
                  </span>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
