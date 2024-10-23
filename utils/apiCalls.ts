// apiCalls.ts
"use client"
import { toast, useToast } from "@/hooks/use-toast";
const metabotUrl = process.env.NEXT_PUBLIC_METABOT_URL as string;
const key = process.env.NEXT_PUBLIC_METABOT_API_KEY;



export const fetchWalletAnalysis = async (userToken: string, watchedAddress: string, solanaWalletName: string) => {
  try {
    const response = await fetch(`${metabotUrl}/solAnalysis/totalAnalysis/${watchedAddress}/${solanaWalletName}`, {
      method: 'GET',
      headers: {
        Authorization: `${key}:${userToken}`,
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
      },
    });

    if (!response.ok) {
      const errorMessage = await response.text(); 
      throw new Error(`Error ${response.status}: ${errorMessage}`);
    }

    const res = await response.json();
    // console.log('API Response:', res);
    return res;
  } catch (error) {
    console.error('Error fetching wallet analysis:', error);
    throw error;
  }
};

export const fetchCopyTrade = async (userToken: string, userId: string) => {
  try {
    const response = await fetch(`${metabotUrl}copyTrade/${userId}`, {
      method: 'GET',
      headers: {
        Authorization: `${key}:${userToken}`,
        "Content-Type": "application/json",
       
      },
    });

    if (!response.ok) {
      const errorMessage = await response.text(); 
      throw new Error(`Error ${response.status}: ${errorMessage}`);
    }

    const res = await response.json();
    console.log('User Data:', res);
    return res;
  } catch (error) {
    console.error('Error fetching the users copied trade:', error);
    throw error;
  }
};




export const copyTradeStatus = async (
  userToken: string,
  watchedAddress: string,
  solanaWalletName: string,
  amount: number,
  isGreaterThan: boolean,
  inputTrade: number,
  takeProfit: number,
  walletAddress: string,
  maxTradeTab: number,
  expirationTimestamp: number
) => {
  const requestBody = JSON.stringify({
    watchedAddr: walletAddress,
    label: solanaWalletName,
    protocolIdentifier: "pump.fun:solana",
    amount: Number(amount).toFixed(6).toString(),
    action: "buy",
    isgreaterThan: isGreaterThan,
    tradeAmount: inputTrade,
    takeProfitParams: {
      pricePercentage: takeProfit,
      amountPercentage: 100,
    },
    walletAddress: walletAddress,
    chain: "solana",
    maxTradesAllowed: maxTradeTab,
    expiration: expirationTimestamp,
  });

  try {
    const response = await fetch(`${metabotUrl}/copyTrade`, {
      method: 'POST',
      headers: {
        Authorization: `${key}:${userToken}`,
        "Content-Type": "application/json",
      },
      body: requestBody,
    });

    const res = await response.json();

    // Check if the status is true
    if (res.status === true) {
    toast({
        description: ("CopyTrade is successful"),
       
      });

     } else {
      toast({
        description: ("CopyTrade failed"),
        variant: "destructive",
      });
    }

    return res;
  } catch (error) {
    console.error('Error executing CopyTrade:', error);
    toast({
      description: ("An error occurred during CopyTrade"),
      variant: "destructive",
    });
    throw error;
  }
};



