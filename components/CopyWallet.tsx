import React from 'react'
import { Button } from "@/components/ui/button";
import { RiArrowDropDownLine } from "react-icons/ri";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CopyWallet = () => {
  return (
    <>
    <div className="w-auto h-[499px] py-4 mt-5 bg-[#0C1623] border-[#1A232F] border px-4 rounded-[16px] overflow-y-auto scrollbar-hide pb-20">
    <div className="flex flex-col items-start">
    <label className="font-normal text-sm" htmlFor="">
    Enter Wallet Address To Copy
      </label>
      <input
        className="mb-7 mt-2 text-xs w-[369px] h-[38px] md:h-[54px] lg:h-[54px] py-[8px] px-[16px] bg-[#0C141F] text-[#696A6C] border border-[#212E40] font-normal rounded-[6px] md:rounded-[8px] lg:rounded-[8px]"
        type="text"
        placeholder="871kxZi2PU4HoDB1iA1L9dyMbdJP6z4m3KUob...."
      />

<label className="font-normal text-sm" htmlFor="">
        Add Wallet Label
      </label>
      <input
        className="mb-7 mt-2 text-xs w-[369px] h-[38px] md:h-[43px] lg:h-[54px] py-[8px] px-[16px] bg-[#0C141F] text-[#696A6C] border border-[#212E40] rounded-[6px] md:rounded-[8px] lg:rounded-[8px] font-normal"
        type="text"
        placeholder="Enter wallet name"
      />
    </div>
   
    <Accordion
        className="w-full border-none outline-0" type="single"   collapsible >
      <AccordionItem className="w-full border-none"
         value="1"
          >
            <AccordionTrigger className="flex items-center gap-10 pr-[10%]">
            <h3 className='font-semibold text-base'>
        Custom Parameters
          </h3>
          
            </AccordionTrigger>
            <AccordionContent>
          <div className="">
            <h5 className='text-sm font-medium text-[#707070]'>Expiration Time</h5>
            <div className="flex justify-center md:justify-between lg:justify-between gap-6 items-center mb-3 active:#0D6EFD pt-3">
          <Button
            size="sm"
            className="bg-[#161F2C] text-white text-xs md:text-sm lg:text-xs
               font-normal md:font-normal lg:font-normal leading-[14.64px] md:leading-[20.8px] lg:leading-[20.8px] py-2 md:py-2 lg:py-2 px-2 md:px-2 lg:px-4 rounded-[8px] w-[100px] h-[30px]"
          >
            24Hours
          </Button>
          <Button
            size="sm"
            className="bg-[#161F2C] text-white text-xs md:text-sm lg:text-xs
               font-normal leading-[14.64px] md:leading-[20.8px] lg:leading-[20.8px] py-1 md:py-2 lg:py-2 px-2 md:px-2 lg:px-4 rounded-[8px]  w-[100px] h-[30px]"
          >
           48Hours
          </Button>
          <Button
            size="sm"
            className="bg-[#161F2C] text-white text-xs md:text-sm lg:text-xs
               font-normal leading-[14.64px] md:leading-[20.8px] lg:leading-[20.8px] py-2 md:py-2 lg:py-2 px-2 md:px-2 lg:px-4 rounded-[8px]  w-[100px] h-[30px]"
          >
           72Hours
          </Button>
         
        </div>
        <label className="font-normal text-sm text-[#707070]" htmlFor="">
       Copy only when this user makes a trade
      </label>
      
       <div className="relative">
          <input
            className="mb-5 mt-2 text-xs md:text-base lg:text-base w-full h-[38px] md:h-[43px] lg:h-[43px] py-[8px] px-[16px] pr-[32px] bg-[#0C141F] text-[#212E40] border-[1px] border-[#212E40] rounded-[6px] md:rounded-[8px] lg:rounded-[8px]"
            type="text"
            placeholder="1"
          />
          <Button className="absolute top-2 left-0 w-[57px] md:w-[65px] lg:[100px] text-xs  h-[38px] md:h-[43px] lg:h-[43px] px-4 py-[11px] bg-[#212E40] text-[#CED4DA] border-[1px] border-[#212E40] rounded-r-[6px] md:rounded-r-[8px] lg:rounded-r-[8px]">
            Less than
          </Button>
        </div>

        <div className="relative">
          <input
            className="mb-5 mt-2 text-xs md:text-base lg:text-base w-full h-[38px] md:h-[43px] lg:h-[43px] py-[8px] px-[16px] pr-[32px] bg-[#0C141F] text-[#212E40] border-[1px] border-[#212E40] rounded-[6px] md:rounded-[8px] lg:rounded-[8px]"
            type="text"
            placeholder="1"
          />
          <Button className="absolute top-2 left-0 w-[57px] md:w-[65px] lg:[100px]  h-[38px] md:h-[43px] lg:h-[43px] px-4 py-[11px] text-xs bg-[#212E40] text-[#CED4DA] border-[1px] border-[#212E40] rounded-r-[6px] md:rounded-r-[8px] lg:rounded-r-[8px]">
          Sell at % profit
          </Button>
        </div>
          </div>
            </AccordionContent>
          </AccordionItem>
    
      </Accordion>
      <label className="font-normal text-sm" htmlFor="">
            Amount Of ETH To Spend From My Wallet
      </label>
      <input
        className="mb-5 mt-2 text-xs w-[369px] h-[38px] md:h-[54px] lg:h-[54px] py-[8px] px-[16px] bg-[#0C141F] text-[#696A6C] border border-[#17212F] font-normal rounded-[6px] md:rounded-[8px] lg:rounded-[8px]"
        type="text"
        placeholder="0.0"
      />
      <div className="flex justify-center md:justify-between lg:justify-between gap-6 items-center mb-3 active:#0D6EFD">
          <Button
            size="sm"
            className="bg-[#161F2C] text-white text-xs md:text-sm lg:text-xs
               font-normal md:font-normal lg:font-normal leading-[14.64px] md:leading-[20.8px] lg:leading-[20.8px] py-1 md:py-2 lg:py-2 px-2 md:px-2 lg:px-2 rounded-[8px] w-[80px] h-[24px]"
          >
            0.2ETH
          </Button>
          <Button
            size="sm"
            className="bg-[#161F2C] text-white text-xs md:text-sm lg:text-xs
               font-normal leading-[14.64px] md:leading-[20.8px] lg:leading-[20.8px] py-1 md:py-2 lg:py-2 px-2 md:px-2 lg:px-2 rounded-[8px]  w-[80px] h-[24px]"
          >
           0.5ETH
          </Button>
          <Button
            size="sm"
            className="bg-[#161F2C] text-white text-xs md:text-sm lg:text-xs
               font-normal leading-[14.64px] md:leading-[20.8px] lg:leading-[20.8px] py-1 md:py-2 lg:py-2 px-2 md:px-2 lg:px-2 rounded-[8px]  w-[80px] h-[24px]"
          >
           0.10ETH
          </Button>
          <Button
            size="sm"
            className="bg-[#161F2C] text-white text-xs md:text-sm lg:text-xs
               font-normal leading-[14.64px] md:leading-[20.8px] lg:leading-[20.8px] py-1 md:py-2 lg:py-2 px-2 md:px-2 lg:px-2 rounded-[8px]  w-[80px] h-[24px]"
          >
           0.25ETH
          </Button>
        </div>
      <div className="flex justify-center items-center pt-5 gap-8">
        <Button
                  variant="outline"
                  className=" w-[59px] h-[22px] md:w-[112px] lg:w-[150px] md:h-[38px] lg:h-[35px] bg-[#0D6EFD] border-none text-[white] font-normal text-[9px] md:text-sm lg:text-base rounded-[4px] md:rounded-lg lg:rounded-lg"
                >
                  Copy Trade
                </Button>

                <Button
                    variant="outline"
                    className="flex items-center justify-center w-[150px] h-[38px] bg-[#0B0F16] border-[#B5B6B6] border-[0.8px] rounded-[8px] text-sm font-normal text-[#B3B5B8]"
                  >
                   <span className="">Analyze Wallet</span>
                  </Button>
                  </div>
                  <div className="items-end flex justify-end pt-3">
                    <span className='font-normal text-[8px] text-[#B5B6B6]'>100/100 Left</span>
                  </div>
   
   
                  </div>
    </>
  )
}

export default CopyWallet