import React, { FC } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Button } from './ui/button';
import { Slider1 } from './custom/slider1';
import { setTradeSettings } from '@/store/slices/tradeSettingsSlice';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

interface ProfitlossProps {
  
  handleStopLossChange:any
  isOn:boolean;
  handlePercentageChange:any
  handleTakeProfitChange:any

}


const Profitloss:FC<ProfitlossProps> = ({ isOn, handlePercentageChange, handleTakeProfitChange, handleStopLossChange}) => {
  const tradeSettings = useSelector((state: RootState) => state.tradeSettings);
  return (
    <>
     <div >
        <div className="border-none">
          <div className="pr-[55%] md:pr-[65%] lg:pr-[5%]">
            <div className="flex p-2 justify-start gap-3 items-center">
              <h3 className="text-base font-bold text-left">
                TP & SL Settings
              </h3>
            </div>
          </div>

          <div>
             <div className="flex flex-wrap justify-between">
  {/* First Row */}
  <div className="flex w-full md:w-1/2 p-2">
    <div className="flex flex-col items-start w-full">
      <h3 className="text-sm md:text-base lg:text-xs font-medium text-white">
      Take Profit
      </h3>
      <div className="flex items-center w-full">
      <input
        className="mb-2 text-xs w-[109px] h-[34px] py-[8px] mt-2 px-[16px]
         bg-[#0C141F] text-[#212E40] border-[#212E40] border rounded-l-[8px]"
        type="number"
        placeholder="100"
        autoComplete="off"
        value={tradeSettings.takeProfit} 
        onChange={handleTakeProfitChange}
        disabled={!isOn} 
      />
      <Button className="w-[54px] text-sm h-[34px] px-2 py-[11px] bg-[#212E40] text-[#CED4DA] border-[#212E40] rounded-r-[8px] rounded-l-none">
        %
      </Button>
       </div>
       </div>
  </div>

  <div className="flex w-full md:w-1/2 p-2">
    <div className="flex flex-col items-start w-full">
    <h3 className="text-sm md:text-base lg:text-xs font-medium mb-6 text-white">
    Percentage of Position To Sell
      </h3>
      <div className="w-full relative">
      <Slider1
        value={[tradeSettings.takeProfitPercentage]}
        onValueChange={(value) => handlePercentageChange(value, 1)} // Pass slider number 1
        min={0}
        max={100}
        step={1}
        disabled={!isOn} 
      />
          <div className="text-white font-semibold text-[10px] absolute top-2 left-1/2 right-1/2">
          {tradeSettings.takeProfitPercentage}%
          </div>
          </div>
          </div>
          </div>

  {/* Second Row */}
  <div className="flex w-full md:w-1/2 p-2">
    <div className="flex flex-col items-start w-full">
    <h3 className="text-sm md:text-base lg:text-xs font-medium text-white">
    Stop Loss
      </h3>
      <div className="flex items-center w-full">
      <input
        className="mb-2 text-xs w-[109px] h-[34px] py-[8px] mt-2 px-[16px] bg-[#0C141F] text-[#212E40] border-[#212E40] border rounded-l-[8px]"
        type="number"
        placeholder="100"
        autoComplete="off"
        value={tradeSettings.stopLoss} 
        onChange={handleStopLossChange}
        disabled={!isOn} 
      />
      <Button className="w-[54px] text-sm h-[34px] px-2 py-[11px] bg-[#212E40] text-[#CED4DA] border-[#212E40] rounded-r-[8px] rounded-l-none">
        %
      </Button>
      </div>
    </div>
  </div>

  <div className="flex w-full md:w-1/2 p-2">
    <div className="flex flex-col items-start w-full">
    <h3 className="text-sm md:text-base lg:text-xs font-medium text-white mb-6">
    Percentage of Position To Sell
      </h3>
      <div className="w-full relative">
      <Slider1
        value={[tradeSettings.stopLossPercentage]}
        onValueChange={(value) => handlePercentageChange(value, 2)} // Pass slider number 1
        min={0}
        max={100}
        step={1}
        disabled={!isOn} 
      />
       <div className="text-white font-semibold text-[10px] absolute top-2 left-1/2 right-1/2">
       {tradeSettings.stopLossPercentage}%
                  </div>
              </div>
             </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Profitloss