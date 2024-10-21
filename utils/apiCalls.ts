// apiCalls.ts
"use client"
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



export const copyUserTrade = async (
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
  // Prepare the request body for the POST request
  const requestBody = JSON.stringify({
    watchedAddr: watchedAddress,
    label: solanaWalletName,
    protocolIdentifier: "pump.fun:solana",
    amount: Number(amount).toFixed(6).toString(),
    action: "buy", // You can adjust this if needed
    isgreaterThan: isGreaterThan,
    tradeAmount: inputTrade,
    takeProfitParams: {
      pricePercentage: takeProfit,
      amountPercentage: 100, // Adjust this percentage if needed
    },
    walletAddress: walletAddress,
    chain: "solana",
    maxTradesAllowed: maxTradeTab,
    expiration: expirationTimestamp,
  });

  try {
    // Make the POST request to the /copyTrade endpoint
    const response = await fetch(`${metabotUrl}/copyTrade`, {
      method: 'POST',
      headers: {
        Authorization: `${key}:${userToken}`,
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
      },
      body: requestBody,
    });

    // Check for response status
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Error ${response.status}: ${errorMessage}`);
    }

    // Parse the JSON response
    const res = await response.json();
    return res;
  } catch (error) {
    console.error('Error copying user trade:', error);
    throw error;
  }
};