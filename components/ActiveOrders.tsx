"use client"; 

import React, { FC, useEffect, useState } from 'react';
import { CopyTradeData } from "@/utils/types";
import { Dialog, DialogContent, DialogClose,DialogTrigger } 
from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GoCopy } from 'react-icons/go';
import { MdOutlineDelete } from 'react-icons/md';
import { deleteCopyTrade } from '@/utils/apiCalls';
import {fetchCopyTrade} from "@/utils/apiCalls"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { Button } from './ui/button';
import AllTrades from './AllTrades';
import OpenPositions from '@/components/positions/OpenPositions';
import SettingsInUse from './SettingsInUse';
import { fetchCopyTradesAsync } from '@/store/slices/copyTradeSlice';

interface ActiveOrdersProps {
  copyTradeData: CopyTradeData[] | null;
  handleCopy: any;
  
 settingsData: any; 
  
  
}

const ActiveOrders: React.FC<ActiveOrdersProps> = ({ copyTradeData, handleCopy, settingsData }) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const [isOpen, setIsOpen] = useState(false); 
  const [CopyTradeData, setCopyTradeData] = useState(copyTradeData || []); 
  const [remainingTimes, setRemainingTimes] = useState<{ [key: string]: number }>({});
  const dispatch: AppDispatch = useDispatch();
  const handleDelete = async (tradeId: string) => {
    try {
      console.log(`Attempting to delete trade with ID: ${tradeId}`);
      await deleteCopyTrade(user?.token, tradeId); 
    setCopyTradeData(prevData => prevData.filter(trade => trade._id !== tradeId));
    await dispatch(fetchCopyTradesAsync({ token: user.token, userId: user._id }));
     
      setIsOpen(false);
    } catch (error) {
      console.error('Error deleting trade:', error);
    }
  };

 

  

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // Update CopyTradeData when copyTradeData prop changes
    setCopyTradeData(copyTradeData || []);
  }, [copyTradeData]);

  useEffect(() => {
    // Set initial remaining times for each trade
    const initializeRemainingTimes = () => {
      const initialTimes: { [key: string]: number } = {};
      CopyTradeData.forEach(trade => {
        const expirationDate = new Date(trade.expiration);
        const now = new Date();
        const timeLeftInSeconds = Math.max(0, Math.floor((expirationDate.getTime() - now.getTime()) / 1000));
        initialTimes[trade._id] = timeLeftInSeconds;
      });
      setRemainingTimes(initialTimes);
    };

    initializeRemainingTimes();

    const timer = setInterval(() => {
      setRemainingTimes(prevTimes => {
        const updatedTimes = { ...prevTimes };
        let allExpired = true;
        
        for (const key in updatedTimes) {
          if (updatedTimes[key] > 0) {
            updatedTimes[key] -= 1; // Decrement each trade's remaining time
            allExpired = false;
          }
        }

        if (allExpired) {
          clearInterval(timer); // Clear the interval if all trades have expired
        }

        return updatedTimes;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [CopyTradeData]);

  const formatDuration = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const parts: string[] = [];

    if (hours) parts.push(`${hours} hr${hours > 1 ? 's' : ''}`);
    if (minutes) parts.push(`${minutes} min${minutes > 1 ? 's' : ''}`);
    if (remainingSeconds) parts.push(`${remainingSeconds} sec${remainingSeconds > 1 ? 's' : ''}`);

    return parts.join(' '); // Join parts with a space
  };

  if (CopyTradeData.length === 0) {
    return <div className="flex justify-center items-center pt-20 mx-auto">No data available.</div>;
  }
  console.log({copyTradeData})
  return (
    <>
     <div className="w-full overflow-x-hidden">
  <div className="bg-[#101720] flex justify-between gap-28 border-none px-4 py-2 ">
    <div className="font-semibold text-[9px] w-[100px] md:text-[12px] lg:text-sm flex-1 text-left">
      Time Left
    </div>
    <div className="font-semibold text-[9px] w-[100px] md:text-[12px] lg:text-sm flex-1 text-center md:text-left pl-2">
      Copied Address
    </div>
    <div className="font-semibold text-[9px] w-[100px] md:text-[12px] lg:text-sm flex-1 text-center pr-0">
      Status
    </div>
    <div className="font-semibold text-[9px] w-[100px] md:text-[12px] lg:text-sm flex-1 text-left md:text-center lg:text-center pr-24">
      Action
    </div>
  </div>
  

  <div className="pt-3 w-full">
    <Accordion className="w-full border-none outline-none" type="single" collapsible>
      {CopyTradeData.map((trade) => (
        <AccordionItem
          className="border-none mb-3 md:mb-5 lg:mb-5 bg-[#161F2C] rounded-[8px] px-4 w-full"
          key={trade._id}
          value={trade._id}
        >
          <AccordionTrigger>
            <div className="flex justify-between gap-28 items-center border-[#212E40] cursor-pointer">
              {/* Time Left */}
              <div className="font-semibold text-[9px] w-[100px] text-[#E0E0E0] md:text-sm lg:text-sm flex-1 text-left">
              {remainingTimes[trade._id] !== undefined ? formatDuration(remainingTimes[trade._id]) : 'N/A'}
              </div>
              

              {/* Copied Address */}
              <div className="font-normal text-[9px] w-[100px] md:text-sm lg:text-sm flex-1 text-left pl-2">
              <div className="text-sm font-medium">
  {trade?.label ? trade.label.charAt(0).toUpperCase() + trade.label.slice(1).toLowerCase() : 'Loading...'}
</div>

                <div className="flex items-center gap-2">
                  <div className="text-xs font-normal">
                    {`${trade.walletAddress?.slice(0, 8)}...${trade?.walletAddress?.slice(-8)}`}
                  </div>
                  <GoCopy className='cursor-pointer' onClick={handleCopy}  />
                </div>
              </div>

              {/* Status */}
              <div className="font-normal w-[200px]  text-[9px] md:text-sm lg:text-sm flex-1 text-right pl-24">
                <div className="bg-[#E63E3A] w-[28px] h-[28px] rounded-full flex justify-center items-center">
                <p className='text-xs font-semibold'>{trade.__v}</p>
                </div>
              </div>

              {/* Action */}
              <div className="font-normal text-[9px] md:text-sm w-[100px] lg:text-sm flex-1 text-left cursor-pointer">
              <Dialog>
                  <DialogTrigger onClick={() => setIsOpen(true)}>
                    <MdOutlineDelete className='w-[24px] h-[24px]' />
                  </DialogTrigger>
                  {isOpen && (
                    <DialogContent className="w-full max-w-[300px] p-5 bg-[#0C141F] h-[200px] border-none rounded-lg">
                      <div className="flex flex-col justify-center items-center">
                        <h4>Are you sure you want to delete this copyTrade?</h4>
                        <div className="flex justify-between pt-5 items-center gap-10">
                          <Button
                            className="bg-gray-500 text-sm font-medium px-6 py-1"
                            onClick={() => handleDelete(trade._id)}
                          >
                            Yes
                          </Button>
                          <DialogClose asChild>
                            <Button
                              className="bg-blue-500 text-sm font-medium px-6 py-1"
                              onClick={closeModal}
                            >
                              No
                            </Button>
                          </DialogClose>
                        </div>
                      </div>
                    </DialogContent>
                  )}
                </Dialog>
              </div>
            </div>
</AccordionTrigger>
         <AccordionContent>
        <div className="flex justify-end items-end">
    <div className="flex justify-between gap-[363px] items-center">
      <p className='font-medium text-sm'>Transactions Triggered from this wallet</p>

      <SettingsInUse settingsData={trade} />
     </div>
  </div>
      <Tabs
        defaultValue="ActiveOrders"
        className="w-full md:bg-transparent lg:bg-transparent rounded-lg mt-5 md:mt-0 lg:mt-0 px-2"
      >
        <TabsList className="flex w-fit gap-8 mt-0 mb-0 items-center justify-start bg-transparent rounded-lg py-[6px] md:py-0 lg:py-0 lg:bg-[#0d0d0d] lg:bg-opacity-[60%] ">
          <TabsTrigger
            className="w-fit md:w-fit lg:w-fit font-medium focus-visible:border-b-[2px] data-[state=active]:border-b-[2px] text-[#DADBDD] text-[12px] md:text-sm lg:text-sm border-[#0D6EFD]"
            value="ActiveOrders"
          >
          AllTrades     
          </TabsTrigger>

          <TabsTrigger
            className="w-fit md:w-fit lg:w-fit font-medium focus-visible:border-b-[2px] data-[state=active]:border-b-[2px] text-[#DADBDD] text-[12px] md:text-sm lg:text-sm border-[#0D6EFD]"
            value="CompletedOrders"
          >
            OpenPositions
          </TabsTrigger>
        </TabsList>
        
        <TabsContent className="w-full h-full" value="ActiveOrders">
          <AllTrades copyTradeData={copyTradeData}/>
        
        </TabsContent>

        <TabsContent className="w-full h-full" value="CompletedOrders">
          <OpenPositions openPositionsData={OpenPositions} />
        </TabsContent>
      </Tabs>
  
 </AccordionContent>
        </AccordionItem>
      ))}
      
    </Accordion>

  </div>
</div>

    </>
  );
};

export default ActiveOrders;
