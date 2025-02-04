import React from 'react'
import {
    Table,
    TableHeader,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
  } from "@/components/ui/table";
import { copyLossWallet, copyTableWallet, explorer } from '@/utils/mockData';
import { Button } from "@/components/ui/button";
import { useSelector } from 'react-redux';
import { RootState } from '@/store/index';
import { WalletData } from "@/utils/types";

const CopyLossTable = () => {
  const walletData: WalletData | null = useSelector((state: RootState) => state.wallet.walletData);
  const mostLosses = walletData?.walletAnalysis?.[1]?.mostLosses ?? [];
  const trade = mostLosses.length > 0 ? mostLosses[1] : null;
  const analysisData = trade?.trades
  return (
    <>
    <Table className="text-left h-auto w-full overflow-x-hidden">
        <TableHeader>
          <TableRow className="border-none bg-[#0C141F] overflow-x-hidden">
            <TableHead className="w-[150px] font-semibold text-[10px]">
           Time
            </TableHead>
            <TableHead
              className="text-center
             items-center font-semibold text-[10px]"
            >
              <div className="w-[150px] items-center">Type</div>
            </TableHead>
            <TableHead className="text-left font-semibold text-[10px]">
              <div className="w-[150px] pr-2">Amount</div>
            </TableHead>
            <TableHead className="pr-4 md:pr-0 lg:pr-0 pl-0 md:pl-2 lg:pl-4 text-center md:text-left lg:text-left font-semibold text-[10px]">
              <div className="w-[100px]">Price</div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className='w-full h-[350px]'>
        {analysisData?.length === 0 ? (
            <div className="text-center w-full flex justify-center absolute let-[10%] top-0 items-center h-full font-semibold text-base">No Data Found</div>

          ) : (
            <>
          {analysisData?.map((row:any, index:any) => (
            <TableRow key={index} className="border-[#212E40]">
              <TableCell className="w-[150px] flex items-center font-normal text-[10px] pl-4">
                {row?.time}
              </TableCell>

              <TableCell
                className="w-[150px] text-center items-center text-[#05AC32] font-semibold text-[10px]  pt-0 md:pt-4 lg:pt-4 pr-5 md:pr-4 lg:pr-4"
              >
                {row?.type}
              </TableCell>

              <TableCell className="w-[150px] items-start text-left  pl-4 flex flex-col">
                <p className='text-[#05AC32] font-semibold text-[10px]'>{row?.time}</p>
               
              </TableCell>
              <TableCell className="w-[150px] text-left">
                <p
                  className="
                  text text-white font-normal text-[9.41px]"
                >
                  {row?.type}
                </p>
              </TableCell>

              <TableCell className="w-[150px] items-start text-left  pl-4 flex flex-col">
                <p className='text-[#05AC32] font-semibold text-[10px]'>{row?.from?.amount}</p>
                
              </TableCell>
              <TableCell className="w-[150px] text-left">
                <p
                  className="
                  text text-white font-normal text-[9.41px]"
                >
                  ${row?.price?.usd}
                </p>
              </TableCell>

            </TableRow>
          ))}
          </>
        )}
        </TableBody>
      </Table>
    </>
  )
}

export default CopyLossTable