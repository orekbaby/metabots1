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
          <TableRow className="border-none bg-[#0C141F]">
            <div className="w-[50px]">
              <TableHead className="">
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
            <TableHead className="font-semibold md:font-bold lg:font-bold text-[12px]">
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
              <TableCell className="flex items-center font-normal text-[9px] md:text-xs lg:text-xs p-2">
                {row.payment}
              </TableCell>
              <TableCell className="font-normal text-[9px] md:text-xs lg:text-xs p-2">
                {row.type}
              </TableCell>
              <TableCell className="text-center w-[50px] font-normal text-[9px] md:text-xs lg:text-xs pr-4">
                {row.token}
              </TableCell>
              <TableCell className=" text-center font-normal text-[9px] md:text-xs lg:text-xs p-2">
                {row.quantity}
              </TableCell>
              <TableCell className="flex text-right md:text-center lg:text-center items-center gap-1 font-normal text-[9px] md:text-xs lg:text-xs p-2">
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
