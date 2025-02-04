import React, { FC, useMemo, useState } from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { useWalletContext } from "@/context/WalletContext";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { toast } from "@/hooks/use-toast";
import { fetchTradeData } from "@/utils/apiCalls";
import TradeSettings from "@/components/TradeSettings";
import Tradesettings2 from "@/components/Tradesettings2";
import Image from "next/image"
import { FetchDynamicTokenResponse } from "@/utils/types";
import Profitloss from "@/components/Profitloss";
interface BuyProps {
  tokenAddressDynamic: FetchDynamicTokenResponse;
  tradeSettings:any;
handleStopLossChange:any;

}

const Buy:FC<BuyProps> = ({tokenAddressDynamic, tradeSettings, handleStopLossChange}) => {
  const { selectedWallet, balances } = useWalletContext();
  const { user, authToken } = useSelector((state: RootState) => state.auth);
  const [payValue, setPayValue] = useState(0.5); 
  const [fastBuyValue, setFastBuyValue] = useState<string>("");
  const [tokenAddress, setTokenAddress] = useState<string>("");
  const [showProfitLoss, setShowProfitLoss] = useState(false);

  const toggleProfitLoss = () => {
    setShowProfitLoss((prev) => !prev);
  };

  const handleBuyButtonClick = async (tokenAddress: string) => {
    const walletAddress = selectedWallet?.publicAddress; 
    const amount = fastBuyValue; 
    const userToken = user?.token; 
  
    if (!walletAddress) {
      console.error("Invalid walletAddress:", walletAddress);
      toast({
        title: "Trade Failed",
        description: "No wallet is selected or wallet address is invalid.",
        variant: "destructive",
      });
      return;
    }
  
  
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      console.error("Invalid amount:", amount);
      toast({
        title: "Trade Failed",
        description: "Invalid trade amount entered.",
        variant: "destructive",
      });
      return;
    }
    
    try {
      const result = await fetchTradeData(tokenAddress, walletAddress, amount, userToken);
      console.log("Trade completed successfully:", result);
      toast({
        title: "Trade Success",
        description: "Trade executed successfully!",
      });
      // window.localStorage.setItem(
      //   APP_KEYS.NEW_SOCKET_TRADE,
      //   response?.txHash
      // );
    } catch (error: any) {
      // Handle and display error
      let errorMessage = error.message || "An unknown error occurred.";
      try {
        const parsedError = JSON.parse(error.message);
        errorMessage = parsedError.message || errorMessage;
      } catch {
        // Ignore parsing errors
      }
  
      toast({
        title: "Trade Failed",
        description: `Error: ${errorMessage}`,
        variant: "destructive",
      });
      console.error("Failed to execute trade:", errorMessage);
    }
  };

  // Update handlers for both inputs
  const handleFastBuyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setFastBuyValue(inputValue);

    if (!isNaN(Number(inputValue)) && Number(inputValue) > 0) {
      setPayValue(Number(inputValue));
    }
  };

  const handlePresetButtonClick = (num: number) => {
    setPayValue(num);
    setFastBuyValue(num.toString()); // Sync the input with the button value
  };

  const handleTokenAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTokenAddress(event.target.value);
  };

  const selectedWalletBalance = useMemo(() => {
    if (
      selectedWallet?.publicAddress &&
      balances[selectedWallet.publicAddress] !== undefined
    ) {
      const balance = balances[selectedWallet.publicAddress];
      return balance === 0 ? "0.000000" : balance.toFixed(6);
    }
    return "Fetching...";
  }, [selectedWallet, balances]);

  return (
    <div className="w-auto p-3 md:p-4 lg:p-4 bg-[#0C141F] border-none mb-4">
      <div>
        {/* Pay Section */}
        <div className="bg-[#0C141F] flex justify-between">
          <p className="font-bold text-xs">Pay</p>
          <p className="text-[#FFC107] font-normal text-xs">
           <Tradesettings2/>
          </p>
        </div>

        <div className="relative">
          <input
            className="mb-2 mt-2 text-xs md:text-sm lg:text-sm w-full h-[38px] md:h-[43px] lg:h-[43px] py-[8px] px-[16px] pr-[32px] bg-[#0C141F] text-white border-[1px] border-[#212E40] rounded-[6px] md:rounded-[8px] lg:rounded-[8px]"
            type="text"
            placeholder="0.5"
            value={fastBuyValue}
            onChange={handleFastBuyChange} 
          />
         
          <Button className="font-semibold text-xs absolute top-2 right-0 w-[57px] md:w-[65px] lg:w-[65px] h-[38px] md:h-[43px] lg:h-[43px] px-4 py-[11px] bg-[#212E40] text-[#CED4DA] border-[1px] border-[#212E40] rounded-r-[6px] md:rounded-r-[8px] lg:rounded-r-[8px]">
          <div className="w-[20px] rounded-full  h-[20px] flex justify-center items-center bg-black">
            <Image
            width={14}
            height={14}
              src="/solanaLogo.svg"
              className=""
              alt=""
            />
             </div>
          </Button>
         
        </div>

        <div className="flex justify-between items-center gap-3 my-4">
          {[0.5, 1.5, 2].map((num) => (
            <Button
              key={num}
              size="sm"
              className={`bg-[#161F2C] flex gap-2 text-white text-sm font-normal py-2 px-4 rounded-[8px] w-[100px] h-[38px] ${
                payValue === num
                  ? "border-2 border-blue-500"
                  : "border border-transparent"
              }`}
              onClick={() => handlePresetButtonClick(num)}
            >
              {num}
              <Image
                width={10}
                height={10}
                src="/solanaLogo.svg"
                className="rounded-full"
                alt=""
              />
            </Button>
          ))}
        </div>

       

        {/* Receive Section */}
        <div className="bg-[#0C141F] flex justify-between">
          <p className="font-bold text-xs">Receive</p>
          <p className="font-normal text-xs">{`${selectedWalletBalance} SOL`}</p>
        </div>
        <div className="relative">
          <input
            className="mb-5 mt-2 text-xs md:text-sm lg:text-sm w-full h-[38px] md:h-[43px] lg:h-[43px] py-[8px] px-[16px] pr-[32px] bg-[#0C141F] font-normal text-white border-[1px] border-[#212E40] rounded-[6px] md:rounded-[8px] lg:rounded-[8px]"
            type="text"
            placeholder="Enter Amount"
            value={tokenAddress} 
            onChange={handleTokenAddressChange} 
          />
          <Button className="absolute top-2 right-0 w-[67px] md:w-[65px] lg:w-[65px] h-[38px] md:h-[43px] lg:h-[43px] px-4 py-[11px] bg-[#212E40] text-[#CED4DA] border-[1px] border-[#212E40] rounded-r-[6px] md:rounded-r-[8px] lg:rounded-r-[8px] font-semibold text-xs">
         SOL
          </Button>
        </div>

      <div className="py-3 flex justify-between items-center">
      <p className="font-semibold text-sm">Add Take Profit & Stop Loss</p>
      <input
      type="checkbox"
      checked={showProfitLoss}
      onChange={toggleProfitLoss}
      className="w-5 h-5 border-1 border-gray-100 rounded appearance-none cursor-pointer focus:outline-none focus:ring-0
                 checked:border-yellow-500 checked:text-yellow-500 checked:before:content-['✔'] checked:before:text-yellow-500 checked:before:text-xs checked:before:flex checked:before:justify-center checked:before:items-center"
      id="wallet-checkbox"
    />
   
      </div>
      {showProfitLoss && (
        <Profitloss
          handleStopLossChange={handleStopLossChange}
          isOn={handleStopLossChange}
          handlePercentageChange={handleStopLossChange}
          handleTakeProfitChange={handleStopLossChange}
        />
      )}

        {/* Auto Buy Button */}
        <Button
          size="lg"
          className="mt-8 w-full h-[38px] md:h-[44px] lg:h-[44px] rounded-[6px] md:rounded-[8px] lg:rounded-[8px] py-[10px] px-[18px] text-white text-[14px] md:text-base lg:text-base font-semibold leading-[23.8px] ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-secondary bg-[#06C270] transition ease-in-out delay-150 hover:border-2 hover:bg-[#0B0F16] duration-300 dark:hover:bg-[#0B0F16]"
          onClick={() => handleBuyButtonClick(tokenAddress)}
        >
          Auto Buy
        </Button>
      </div>
    </div>
  );
};

export default Buy;
