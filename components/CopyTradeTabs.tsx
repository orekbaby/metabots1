import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ActiveOrders from './ActiveOrders';
import CompletedOrders from './CompletedOrders';
const CopyTradeTabs = () => {
  return (
    <>
     <Tabs
        defaultValue="ActiveOrders"
        className="w-full md:bg-transparent
         lg:bg-transparent rounded-lg mt-5 md:mt-0 lg:mt-0 px-2"
      >
        <TabsList className="flex w-fit gap-8  mt-0 mb-0 items-center justify-start bg-transparent  rounded-lg py-[6px] md:py-0 lg:py-0 ">
        <TabsTrigger
            className="w-fit md:w-fit lg:w-fit font-medium focus-visible:border-b-[2px] data-[state=active]:border-b-[2px] text-[#DADBDD] text-[12px] 
            md:text-sm
             lg:text-sm border-[#0D6EFD]"
            value="ActiveOrders"
          >
          ActiveOrders
          </TabsTrigger>

          <TabsTrigger
            className="w-fit md:w-fit lg:w-fit font-medium focus-visible:border-b-[2px] data-[state=active]:border-b-[2px] text-[#DADBDD] text-[12px] 
            md:text-sm
             lg:text-sm border-[#0D6EFD]"
            value="CompletedOrders"
          >
           CompletedOrders
          </TabsTrigger>


          {/* <Dialog>
          <div className="flex justify-end ml-auto items-center cursor-pointer text-sm font-normal border-b border-[#1A232F] text-[#E7E7E7] px-8">
        <DialogTrigger>
          Copied Trades
         </DialogTrigger>
          </div>
              <DialogContent className="w-full p-5 bg-[#0C141F] h-[500px] border-none">
                <div className="w-[900px]">
                
                </div> 
              </DialogContent>
            </Dialog> */}

        </TabsList>
        <TabsContent className="w-full h-full" value="ActiveOrders">
          <ActiveOrders />
        </TabsContent>

        <TabsContent className="w-full h-full" value="CompletedOrders">
          <CompletedOrders />
        </TabsContent>
      
      </Tabs>
    </>
  )
}

export default CopyTradeTabs