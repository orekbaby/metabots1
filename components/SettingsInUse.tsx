import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogClose, DialogTrigger } from "@/components/ui/dialog";
import Image from 'next/image';

interface SettingsInUseProps {
  settingsData: any; 
}

const SettingsInUse: React.FC<SettingsInUseProps> = ({ settingsData }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [expirationHours, setExpirationHours] = useState<number | null>(null);

  // Handle dialog open/close
  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  // Convert expiration time to hours remaining
  useEffect(() => {
    if (settingsData && settingsData.expiration) {
      const expirationDate = new Date(settingsData.expiration);
      const now = new Date();
      const hoursDifference = Math.max(0, (expirationDate.getTime() - now.getTime()) / (1000 * 60 * 60));
      setExpirationHours(Math.round(hoursDifference));
    }
  }, [settingsData]);

  return (
    <>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button
            className='border-white border bg-[#0C141F] rounded-md w-[80px] px-3 py-1 h-6 text-[10px] font-normal'
            variant="outline"
            onClick={handleOpenDialog}
          >
            Settings in use
          </Button>
        </DialogTrigger>
        {isDialogOpen && (
          <DialogContent className="bg-[#0C1623] border-transparent outline-none p-0 max-w-[350px] mx-auto">
            <div className="bg-[#17212F] py-2 flex justify-start items-center">
              <h4 className="text-sm font-medium pl-3">Settings in Use</h4>
            </div>

            {/* Amount of ETH */}
            <div className="px-6">
            <label className="font-normal text-[10px] mb-5 text-[#B5B6B6]">Amount Of ETH To Spend From My Wallet</label>
            <div className="relative pt-2">
            <input
  className="text-xs w-full h-[38px] py-[8px] px-[24px] bg-[#0C141F] text-[#E7E7E7] border-[#68676D] rounded-[6px] border-[0.4px] select-none"
  type="number"
  value={settingsData.amount}
  readOnly
  onFocus={(e) => e.target.blur()} // Prevents focusing the input, which causes text selection
/>

              <Image
              width={9.63}
              height={9.9}
              src="/solanaLogo.svg"
              className="absolute left-[4%] top-[49%]"
              alt=""

              />

            </div>


            {/* Expiration Time */}
            <div className="flex justify-start gap-5 items-center">
              <h5 className='text-[10px] font-normal text-[#B5B6B6]'>Expiration Time</h5>
              <div className="flex justify-center md:justify-between gap-6 items-center mb-3 pt-3">
                <Button
                  size="sm"
                  className="bg-[#161F2C] text-white text-[10px]font-semibold py-2 px-4 rounded-[8px] w-[100px] h-[30px]"
                >
                  {expirationHours !== null ? `${expirationHours} Hours` : 'N/A'}
                </Button>
              </div>
            </div>

            {/* Copy condition: Greater/Less than */}
            <label className="font-normal text-[10px] text-[#B5B6B6]">Copy only when this user makes a trade</label>
            <div className="flex items-center mt-2 justify-center relative">
  <Button
    className="w-[85px] text-[11.39px] font-medium h-[30px] px-2 py-[11px] bg-[#212E40] text-white border-[#212E40] rounded-l-[6px] rounded-r-none"
  >
    {settingsData.isgreaterThan ? 'Greater than' : 'Less than'}
  </Button>

  {/* Input with extra padding to prevent overlap */}
  <input
    className="w-full font-normal text-xs h-[30px] pl-10 py-[8px] bg-[#0C141F] text-gray-500 border-[#212E40] border rounded-r-[6px] rounded-l-none"
    type="number"
    value={settingsData.tradeAmount}
    readOnly
  />

  {/* Image positioned inside the input */}
  <Image
    width={9.63}
    height={9.9}
    src="/solanaLogo.svg"
    alt="Solana Logo"
    className="absolute left-[90px] top-1/2 transform -translate-y-1/2"
  />
</div>


            {/* Copy action */}
            <div className="flex items-center mt-2 gap-3">
              <label className="font-normal text-[10px] text-[#B5B6B6]">Copy only when this user</label>
              <Button className="w-[80px] text-[10px] h-[30px] font-semibold px-2 py-[11px] bg-[#161F2C] text-white border-[#212E40] rounded-l-[6px]">
              {settingsData?.action ? settingsData.action.charAt(0).toUpperCase() + settingsData.action.slice(1).toLowerCase() : 'Loading...'}

              </Button>
            </div>

            {/* Take Profit */}
            <div className="flex items-center mt-2 gap-3">
              <label className="font-normal text-sm text-[#707070]">Sell at profit</label>
              <Button className="w-[80px] text-[10px] h-[38px] font-semibold px-2 py-[11px] bg-[#161F2C] text-[#CED4DA] border-[#212E40] rounded-l-[6px]">
                {settingsData.takeProfitParams?.pricePercentage}%
              </Button>
            </div>

            {/* Max Trades Allowed */}
            <div className="flex justify-center md:justify-between  items-center mb-3 pt-3">
            <label className="font-normal text-xs">Maximum Number of Trades Allowed</label>
           
              <input
                className="mb-5 text-[10px] w-1/4 h-[30px] font-semibold py-[8px] mt-5 px-[16px] bg-[#0C141F] text-white border-[#212E40] border rounded-r-[6px]"
                type="number"
                value={settingsData.maxTradesAllowed}
                readOnly
              />
            </div>

            </div>
           
          </DialogContent>
        )}
      </Dialog>
    </>
  );
};

export default SettingsInUse;
