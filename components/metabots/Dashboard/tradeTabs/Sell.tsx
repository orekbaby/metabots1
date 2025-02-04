import React, { FC, useMemo, useState } from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { FetchDynamicTokenResponse } from "@/utils/types";
import { useWalletContext } from "@/context/WalletContext";
import Tradesettings2 from "@/components/Tradesettings2";
import Image from "next/image"
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { toast } from "@/hooks/use-toast";
import { fetchTradeData } from "@/utils/apiCalls";
interface sellProps {
 tokenAddressDynamic: FetchDynamicTokenResponse;
 
}

const Sell:FC<sellProps> = ({tokenAddressDynamic}) => {
  const [sellValue, setSellValue] = useState<string>("");
  const [percentageSell, setPercentageSell] = useState(50); 
  const { selectedWallet, balances } = useWalletContext();
  const { user, authToken } = useSelector((state: RootState) => state.auth);
  const [solValue, setSolValue] = useState<number | string>("");
  const [calculatedValue, setCalculatedValue] = useState<number | string>(""); 
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

  const handleSellChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isNaN(Number(value))) {
      setSellValue(value);

      // Update calculatedValue based on percentage
      if (percentageSell) {
        const calculated = (Number(value) * percentageSell) / 100;
        setCalculatedValue(calculated.toFixed(2));
      }

      // Calculate SOL value based on token price
      const tokenPriceInSol = tokenAddressDynamic?.pools?.[0]?.price?.usd|| 0; // Replace with actual key for price
      const solEquivalent = Number(value) * tokenPriceInSol;
      setSolValue(solEquivalent.toFixed(6));
    }
  };

  const handlePercentageClick = (percentage: number) => {
    setPercentageSell(percentage);
    if (sellValue) {
      const calculated = (Number(sellValue) * percentage) / 100;
      setCalculatedValue(calculated.toFixed(2));

      // Update SOL value dynamically
      const tokenPriceInSol = tokenAddressDynamic?.pools?.[0]?.price?.usd || 0;
      const solEquivalent = calculated * tokenPriceInSol;
      setSolValue(solEquivalent.toFixed(6));
    }
  };

  const percentages = [25, 50, 75, 100];

 
  const handleSellClick = async (tokenAddressDynamic: string) => {
    const walletAddress = selectedWallet?.publicAddress; 
    const amount = sellValue; 
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
      const result = await fetchTradeData(tokenAddressDynamic, walletAddress, amount, userToken);
      console.log("Trade completed successfully:", result);
      toast({
        title: "Trade Success",
        description: "Trade executed successfully!",
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
  
  console.log({tokenAddressDynamic})

  return (
    <div className="w-[400px] px-3 bg-[#0C141F] border-none">
      <div>
        <div className="bg-[#0C141F] flex justify-between">
          <h3 className="font-semi-bold text-sm mb-3">Bal:{`${selectedWalletBalance} SOL`}</h3>
         <Tradesettings2/>
        </div>
        <div className="bg-[#0C141F] flex justify-between mb-1">
          <p className="font-bold text-xs">Sell Amount</p>
          {/* <p className="font-normal text-xs">Bal:{`${selectedWalletBalance} SOL`}</p> */}
        </div>
        <div className="relative">
          <input
            className="mb-5 mt-2 text-xs md:text-sm lg:text-sm w-full h-[38px] md:h-[43px] lg:h-[43px] py-[8px] px-[16px] pr-[32px] bg-[#0C141F] text-white border-[1px] border-[#212E40] rounded-[6px] md:rounded-[8px] lg:rounded-[8px] font-normal"
            type="text"
            placeholder="0"
            value={sellValue}
            onChange={handleSellChange}
          />
          <Button className="absolute top-2 right-0 w-[67px] md:w-[65px] lg:[65px] h-[38px] md:h-[43px] lg:h-[43px] px-4 py-[11px] bg-[#212E40] text-[#CED4DA] border-[1px] border-[#212E40] rounded-l-[6px] md:rounded-l-[8px] lg:rounded-l-[8px] text-sm">
         {tokenAddressDynamic?.token?.symbol?.slice(0, 3).toUpperCase()}
</Button>

        </div>
        
        <div className="flex justify-center md:justify-between lg:justify-between gap-6 items-center mb-3">
        {percentages.map((percentage) => (
          <Button
            key={percentage}
            size="sm"
            onClick={() => handlePercentageClick(percentage)}
            className={`bg-[#161F2C] text-white text-xs md:text-sm lg:text-sm font-normal leading-[14.64px] md:leading-[20.8px] lg:leading-[20.8px] py-1 md:py-2 lg:py-2 px-2 md:px-2 lg:px-2 rounded-[8px] w-[80px] h-[35px] ${
              percentageSell === percentage ? "hover:bg-[#0D6EFD]" : ""
            }`}
          >
            {percentage}%
          </Button>
        ))}
      </div>

        <div className="flex items-center justify-center">
          <FaArrowDownLong className=" h-[30px] text-center" />
        </div>
        <div className="bg-[#0C141F] flex justify-between mt-0">
          <p className="font-bold text-xs">Receive</p>
        
        </div>

        <div className="relative">
          <input
            className="mb-5 mt-2 text-xs md:text-sm lg:text-sm w-full h-[38px] md:h-[43px] lg:h-[43px] py-[8px] px-[16px] pr-[32px] bg-[#0C141F] text-white border-[1px] border-[#212E40] rounded-[6px] md:rounded-[8px] lg:rounded-[8px]"
            type="text"
            placeholder="0.0"
            value={solValue} 
            readOnly 
          />
          <Button className="absolute top-2 right-0 w-[57px] md:w-[65px] lg:[65px] h-[38px] md:h-[43px] lg:h-[43px] px-4 py-[11px] bg-[#212E40] text-[#CED4DA] border-[1px] border-[#212E40] rounded-l-[6px] md:rounded-l-[8px] lg:rounded-l-[8px] text-sm">
         <Image
          src="/solanaLogo.svg"
         width={20}
         height={20}
         alt="sol-img"

         />

          </Button>
        </div>

        <Button
          size="lg"
          className="mt-8 w-full h-[38px] md:h-[44px] lg:h-[44px] rounded-[6px] md:rounded-[8px] lg:rounded-[8px] py-[10px] px-[18px] bg-[#FF3B3B]
             text-white text-[14px] md:text-base lg:text-base font-semibold leading-[23.8px]"
        
      onClick={ () => {
        handleSellClick(tokenAddressDynamic?.token?.mint);
      }}
        >
          Auto Sell
        </Button>
      </div>
    </div>
  );
}

export default Sell