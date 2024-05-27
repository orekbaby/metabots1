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
import { mainPage } from "@/utils/mockData2";

export default function All() {
  return (
    <>
      <Table className="text-left overflow-x-hidden w-full">
        <TableHeader>
          <TableRow className="border-none bg-[#0A1019]">
            <TableHead className="w-[75px] pl-2 md:pl-2 lg:pl-2 ">
              <Image
                src="/payments.png"
                width={20}
                height={20}
                alt="payments"
              />
            </TableHead>
            <TableHead className="font-semibold md:font-bold lg:font-bold text-[12px] pl-2">
              Type
            </TableHead>
            <TableHead
              className="font-semibold text-center md:text-left lg:text-left md:font-bold 
            lg:font-bold text-[12px] pl-6 md:pl-2 lg:pl-2"
            >
              Token
            </TableHead>
            <TableHead className="font-semibold md:font-bold lg:font-bold text-center md:text-left lg:text-left text-[12px] pl-2">
              Quantity
            </TableHead>
            <TableHead className="font-semibold md:font-bold lg:font-bold text-[12px] pl-2">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mainPage?.map((row, index) => (
            <TableRow key={index} className="border-none">
              <TableCell className="flex items-center font-normal text-[9px] md:text-xs lg:text-xs pl-4 md:pl-2 lg:pl-2">
                {row.payment}
              </TableCell>
              <TableCell className="font-normal text-[9px] md:text-xs lg:text-xs">
                {row.type}
              </TableCell>
              <TableCell className="font-normal text-center md:text-left lg:text-left text-[9px] md:text-xs lg:text-xs">
                {row.token}
              </TableCell>
              <TableCell className="font-normal text-[9px] md:text-xs lg:text-xs text-left md:text-left lg:text-left pl-3 md:pl-0 lg:pl-0">
                {row.quantity}
              </TableCell>
              <TableCell className="flex mt-2 items-center gap-1 font-normal text-[9px] md:text-xs lg:text-xs">
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
