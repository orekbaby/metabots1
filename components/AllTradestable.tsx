import React, { FC } from 'react';
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { GoCopy } from 'react-icons/go';
import { CopyTradeData } from '@/utils/types';

interface AllTradesProps {
  copyTradeData: CopyTradeData[] | null;
}

const AllTradestable: FC<AllTradesProps> = ({ copyTradeData }) => {
  // Flatten all trades into a single array for easier mapping
  const trades = copyTradeData?.flatMap(data => data.trades) || [];

  return (
    <>
      <Table className="overflow-x-hidden w-full">
        <TableHeader>
          <TableRow className="border-none bg-[#0C141F]">
            <TableHead className="font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px] text-left">
              Time
            </TableHead>
            <TableHead className="text-center md:text-left lg:text-left font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px]">
              Type
            </TableHead>
            <TableHead className="font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px]">
              Token
            </TableHead>
            <TableHead className="font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px]">
              Amount
            </TableHead>
            <TableHead className="font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px]">
              Price
            </TableHead>
            <TableHead className="font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px]">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className='w-full h-[350px] overflow-y-auto scrollbar-hide '>
          {trades.length > 0 ? (
            trades.map((trade) => (
              <TableRow key={trade?.wallet} className="border-[#212E40]">
                <TableCell className="flex items-center font-normal text-[9px] md:text-sm lg:text-sm">
                  <div className="pl-2">{trade.time || 'N/A'}</div>
                </TableCell>
                <TableCell className="font-normal text-[9px] md:text-sm lg:text-sm text-left">
                  <div className="text-left pl-2">
                    <div className="flex flex-col gap-1 text-left">
                      <div className="text-sm font-medium">{trade.program || 'Loading...'}</div>
                      <div className="flex justify-start items-center gap-2">
                        <div className="text-sm font-medium">
                         {trade?.time}
                        </div>
                        <GoCopy />
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="font-normal text-center text-[9px] md:text-sm lg:text-sm">
                  {trade?.type || 'No Token'}
                </TableCell>
                <TableCell className="font-normal pl-2 text-[9px] md:text-sm lg:text-sm">
                  <div className="text-center">{trade?.time || 'N/A'}</div>
                </TableCell>
                <TableCell className="font-normal pl-2 text-[9px] md:text-sm lg:text-sm">
                  <div className="text-center">{trade?.volume.usd || 'N/A'}</div>
                </TableCell>
                <TableCell className="font-normal pl-2 text-[9px] md:text-sm lg:text-sm">
                  <div className="text-center">{trade?.volume.sol || 'N/A'}</div>
                </TableCell>
              </TableRow>
            ))
          ) : (
           <div className="text-center w-full flex justify-center absolute let-[10%] top-0 items-center h-full font-semibold text-base">No Data Found</div>
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default AllTradestable;
