import React, { FC } from "react";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { IoCopyOutline } from "react-icons/io5";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { FetchDynamicTokenResponse, HoldersProps } from "@/utils/types";


const Holders: FC<HoldersProps> = ({ holdersData, loading,  tokenAddressDynamic }) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (!holdersData || holdersData.accounts.length === 0) {
    return <p>No data available.</p>;
  }

  const formatTimestamp = (timestamp: number): string => {
    const date = new Date(timestamp);
    const time = date.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    const formattedDate = date.toLocaleDateString("en-GB");
    return `${time} ${formattedDate}`;
  };

  const formatToDollars = (amount: number): string => {
    if (!amount) return "$0";
    const roundedAmount = Math.round(amount);
    return `$${roundedAmount.toLocaleString()}`;
  };

  const formatNumber = (num: number | null | undefined): string => {
    if (num == null || isNaN(num) || typeof num !== "number") return "N/A";

    let formattedNum = num.toFixed(1);

    if (num >= 1_000_000) {
      formattedNum = (num / 1_000_000).toFixed(1) + "M";
    } else if (num >= 1_000) {
      formattedNum = (num / 1_000).toFixed(1) + "K";
    }

    return formattedNum;
  };

  return (
    <>
      <Table className="text-left w-full table-auto mx-auto border-none outline-0">
        <TableHeader>
          <TableRow className="border-none outline-0">
            <TableHead className="text-left pl-10 font-medium text-[14px]">
            Address
            </TableHead>
            <TableHead className="text-center font-medium text-[14px]">
             %owned
            </TableHead>
            <TableHead className="text-center font-medium text-[14px]">
            Amount
            </TableHead>
            <TableHead className="text-center font-medium text-[14px]">
          Value
            </TableHead>
           
            <TableHead className="text-center font-medium text-[14px]">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {holdersData.accounts.map((item, index) => (
            <TableRow key={index} className="border-none outline-0">
            <TableCell className="text-center w-[120px] md:w-[150px] lg:w-[150px] font-normal text-[9px] md:text-xs lg:text-[10px] text-[#E7E7E7] flex justify-center items-center gap-1">
      <span
    className="cursor-pointer truncate "
    onClick={() => {
      navigator.clipboard.writeText(item.wallet);
      toast({
        title: "Copied to Clipboard",
        description: `${item.wallet.slice(0, 6)}...${item.wallet.slice(-4)} copied!`,
        duration: 3000,
      });
    }}
  >
    {`${item.wallet.slice(0, 6)}...${item.wallet.slice(-4)}`}
  </span>
  <IoCopyOutline
    className="w-4 h-4 cursor-pointer"
    onClick={() => {
      navigator.clipboard.writeText(item.wallet);
      toast({
        title: "Copied to Clipboard",
        description: `${item.wallet.slice(0, 6)}...${item.wallet.slice(-4)} copied!`,
        duration: 3000,
      });
    }}
  />
</TableCell>
<TableCell className="text-center w-[120px] md:w-[150px] lg:w-[150px] font-normal text-[9px] md:text-sm lg:text-sm">
  {formatToDollars(item?.percentage)}
</TableCell>

        <TableCell className="text-center w-[120px] md:w-[150px] lg:w-[150px] font-normal text-[9px] md:text-xs lg:text-xs  text-xs text-[#4CA244]">
        {formatToDollars(item?.amount)}
        </TableCell>
        <TableCell className="text-center w-[120px] md:w-[150px] lg:w-[150px] font-normal text-[9px] md:text-xs lg:text-xs  text-xs text-[#4CA244]">
        {formatToDollars(item?.value?.usd)}
        </TableCell>

        <TableCell className="text-center w-[120px] md:w-[150px] lg:w-[150px] font-normal text-[9px] md:text-xs lg:text-xs py-2">
         <Button className="bg-[#0D6EFD] py-1 px-2 w-[70px] h-[28px] font-medium text-[10px]">
            Copy Trade
         </Button>
        </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Holders;
