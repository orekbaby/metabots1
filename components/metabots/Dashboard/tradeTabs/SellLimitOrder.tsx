import React, { FC, useMemo, useState } from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import Tradesettings2 from "@/components/Tradesettings2";
import { FetchDynamicTokenResponse } from "@/utils/types";
import { useWalletContext } from "@/context/WalletContext";
import { toast } from "@/hooks/use-toast";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { executeLimitTrade, executeSellLimitTrade } from "@/utils/apiCalls";


interface SellLimitOrder {
  tokenAddressDynamic: FetchDynamicTokenResponse;
   }

const SellLimitOrder:FC<SellLimitOrder> = ({tokenAddressDynamic}) => {
  enum LimitOption {
    PriceLimit = "priceLimit",
    MarketCapLimit = "marketCapLimit",
  }
  
  const [showDropdown, setShowDropdown] = useState(false);
  const { selectedWallet, balances } = useWalletContext();
  const [activeButton, setActiveButton] = useState<string | null>(null);
  
  const [selectedOption, setSelectedOption] = useState<LimitOption>(
    LimitOption.PriceLimit
  );

  const [amount, setAmount] = useState<string>(""); 
  const [price, setPrice] = useState<string>(""); 
  const [isGreaterThan, setIsGreaterThan] = useState<boolean>(true); 

  const { user } = useSelector((state: RootState) => state.auth);
  
  const getCurrentValue = () => {
    if (selectedOption === LimitOption.PriceLimit) {
      return tokenAddressDynamic?.pools?.[0]?.price?.usd || ""; 
    }
    if (selectedOption === LimitOption.MarketCapLimit) {
      return tokenAddressDynamic?.pools?.[0]?.marketCap?.usd || ""; 
    }
    return "";
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

  const handleCreateLimitSell = async (tokenAddressDynamic: any) => {
    const walletAddress = selectedWallet?.publicAddress;
    const walletIndex = selectedWallet?.index ?? +1;
    const userToken = user?.token;
    const action = "sell"; 
    const type = selectedOption; 
      const tradePrice = price || getCurrentValue();
  
   
    console.log("Selected Option:", selectedOption);
    console.log("Dynamic Price Fallback:", tradePrice);
  
   
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
  
    if (!tradePrice || isNaN(Number(tradePrice)) || Number(tradePrice) <= 0) {
      console.error("Invalid trade price:", tradePrice);
      toast({
        title: "Trade Failed",
        description: "Invalid trade price entered.",
        variant: "destructive",
      });
      return;
    }
  
    try {
     
      const result = await executeSellLimitTrade({
        userToken,
        token: tokenAddressDynamic,
        amount: amount.toString(),
        action,
        walletIndex,
        isGreaterThan,
        tradePrice: tradePrice.toString(),
        walletAddress,
        type,
      });
  
      console.log("Trade completed successfully:", result);
      toast({
        title: "Trade Success",
        description: "Limit sell executed successfully!",
      });
    } catch (error: any) {
     
      let errorMessage = error.message || "An unknown error occurred.";
      try {
        const parsedError = JSON.parse(error.message);
        errorMessage = parsedError.message || errorMessage;
      } catch {
        
      }
  
      toast({
        title: "Trade Failed",
        description: `Error: ${errorMessage}`,
        variant: "destructive",
      });
  
      console.error("Failed to execute trade:", errorMessage);
    }
  };

  return (
    <>
      <div className="w-auto px-3 bg-[#0C141F] border-none">
        <div>
          <div className="bg-[#0C141F] flex justify-between">
            <h3 className="font-semi-bold text-sm mb-3">Name:{tokenAddressDynamic?.token?.symbol}</h3>
            <Tradesettings2/>
          </div>
          <div className="bg-[#0C141F] flex justify-start flex-col gap-3 mb-1">
          <p className="font-normal text-xs">Bal:{selectedWalletBalance}</p>
          <p className="font-semibold text-[#212E40] text-sm">Type</p>
            </div>
           
       
          <div className="relative w-full">
      {/* Input Box */}
      <div className="relative">
      <input
      className="mb-5 mt-2 text-xs md:text-sm lg:text-sm w-full h-[38px] md:h-[43px] lg:h-[43px] py-[8px] px-[16px] pr-[32px] bg-[#0C141F] font-normal text-[#fff] border-[1px] border-[#212E40] rounded-[6px] md:rounded-[8px] lg:rounded-[8px] cursor-pointer"
      type="text"
      placeholder=""
      value={selectedOption} // Display the selected option
      onFocus={() => setShowDropdown(true)}
      onBlur={() => setTimeout(() => setShowDropdown(false), 200)} // Delay to allow selection
      readOnly
    />
        
        {/* Dropdown Icon */}
         <div className="absolute top-[45%] right-4 transform -translate-y-1/2 pointer-events-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
      </div>

      {/* Dropdown Menu */}
      {showDropdown && (
      <ul className="absolute left-0 bottom-0 transform translate-y-full w-full bg-[#212E40] text-white border border-[#212E40] rounded-[6px] z-10">
       {Object.values(LimitOption).map((option) => (
          <li
            key={option}
            className="py-2 px-4 text-sm cursor-pointer hover:bg-[#333]"
            onMouseDown={() => {
              setSelectedOption(option); // Update selected option
            }}
          >
            {option}
          </li>
        ))}
      </ul>
    )}
    </div>


          <div className="py-3">
      <div className="flex justify-between w-full gap-4">
        {/* Left Section (SOL) */}
        <div className="flex flex-col w-1/2">
          <label
            className="text-sm text-white font-medium mb-2"
            htmlFor="sol-input"
          >
            Pay
          </label>
          <div className="flex items-center">
            {/* Input */}
            <input
              id="sol-input"
              type="text"
              placeholder="Enter Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-[80px] h-[38px] px-4 py-2 bg-[#0C141F] text-white border text-xs border-[#212E40] rounded-l-md focus:outline-none"
            />
            {/* Button */}
            <button className="h-[38px] px-6 bg-[#212E40] text-white font-medium rounded-r-md hover:bg-[#333]">
              SOL
            </button>
          </div>
        </div>

        {/* Right Section (USD) */}
        <div className="flex flex-col w-1/2">
          <label
            className="text-sm text-white font-medium mb-2"
            htmlFor="usd-input"
          >
            {selectedOption} {/* Dynamic Label */}
          </label>
          <div className="flex items-center">
            {/* Dynamic Value Input */}
            <input
              id="usd-input"
              type="text"
              placeholder="Enter amount"
              className="w-[80px] h-[38px] px-4 py-2 bg-[#0C141F] text-[12px] text-white border border-[#212E40] rounded-l-md focus:outline-none"
             readOnly
             value={price || getCurrentValue()} 
             onChange={(e) => setPrice(e.target.value)} 
            />
            {/* Button */}
            <button className="h-[38px] px-6 bg-[#212E40] text-white font-medium rounded-r-md hover:bg-[#333]">
              USD
            </button>
          </div>
        </div>
      </div>
    </div>
 <div className="py-3">
    <div className="flex w-full gap-3">
    <Button
  onClick={() => {
    setIsGreaterThan(false);
    setActiveButton("below");
  }}
  className={`flex-1 w-[80px] h-[38px] p-4 bg-[#212E40] text-white hover:bg-blue-600 ${
    activeButton === "below"
      ? "border-2 border-blue-600"
      : "border-0 rounded-lg"
  }`}
>
  Below Price
</Button>

<Button
  onClick={() => {
    setIsGreaterThan(true);
    setActiveButton("above");
  }}
  className={`flex-1 w-[80px] h-[38px] p-4 bg-[#212E40] text-white hover:bg-blue-600 ${
    activeButton === "above"
      ? "border-2 border-blue-600"
      : "border-0 rounded-lg"
  }`}
>
  Above Price
</Button>

 </div>
         </div>
          <Button
            size="lg"
            className="mt-8 w-full h-[38px] md:h-[44px] lg:h-[44px] rounded-[6px] md:rounded-[8px] lg:rounded-[8px] py-[10px] px-[18px] bg-[#FF3B3B]
             text-white text-[14px] md:text-base lg:text-base font-semibold leading-[23.8px]"
             onClick={ () => {
              handleCreateLimitSell(tokenAddressDynamic?.token?.mint);
            }}
         >
            Create Limit Sell
          </Button>
        </div>
      </div>
    </>
  );
};

export default SellLimitOrder;
