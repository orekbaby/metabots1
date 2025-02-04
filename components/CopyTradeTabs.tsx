// CopyTradeTabs.tsx
import React, { FC } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ActiveOrders from './ActiveOrders';
import CompletedOrders from './CompletedOrders';
import { CopyTradeData } from '@/utils/types';

interface CopyTradesProps {
  copyTradeData: CopyTradeData[] | null;
  handleCopy:any
  settingsData:any
  
}


const CopyTradeTabs: FC<CopyTradesProps> = ({ copyTradeData, handleCopy, settingsData }) => {
  return (
    <>
      <Tabs
        defaultValue="ActiveOrders"
        className="w-full md:bg-transparent lg:bg-transparent rounded-lg mt-5 md:mt-0 lg:mt-0 px-2"
      >
        <TabsList className="flex w-fit gap-8 mt-0 mb-0 items-center justify-start bg-transparent rounded-lg py-[6px] md:py-0 lg:py-0 ">
          <TabsTrigger
            className="w-fit md:w-fit lg:w-fit font-medium focus-visible:border-b-[2px] data-[state=active]:border-b-[2px] text-[#DADBDD] text-[12px] md:text-sm lg:text-sm border-[#0D6EFD]"
            value="ActiveOrders"
          >
            ActiveOrders
          </TabsTrigger>

          <TabsTrigger
            className="w-fit md:w-fit lg:w-fit font-medium focus-visible:border-b-[2px] data-[state=active]:border-b-[2px] text-[#DADBDD] text-[12px] md:text-sm lg:text-sm border-[#0D6EFD]"
            value="CompletedOrders"
          >
            CompletedOrders
          </TabsTrigger>
        </TabsList>
        
        <TabsContent className="w-full h-full" value="ActiveOrders">
          <ActiveOrders copyTradeData={copyTradeData}
          settingsData={settingsData}
          handleCopy={handleCopy}
          />
        </TabsContent>

        <TabsContent className="w-full h-full" value="CompletedOrders">
          <CompletedOrders copyTradeData={copyTradeData} />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default CopyTradeTabs;
