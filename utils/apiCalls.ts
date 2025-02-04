// apiCalls.ts
"use client"
import { toast, useToast } from "@/hooks/use-toast";
const metabotUrl = process.env.NEXT_PUBLIC_METABOT_URL as string;
const key = process.env.NEXT_PUBLIC_METABOT_API_KEY;
const solanaurl =  process.env.NEXT_PUBLIC_NADLES_SOLANA_API
const solanaKey = process.env.NEXT_PUBLIC_SOLANA_TRACKER_API_KEY

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
    // console.log(`Fetching copy trade for userId: ${userId} with token: ${userToken}`);

    const response = await fetch(`${metabotUrl}/copyTrade/${userId}`, {
      method: 'GET',
      headers: {
        Authorization: `${key}:${userToken}`,
        "Content-Type": "application/json",
      },
    });

    const res = await response.json(); // Parse the response JSON

    if (response.ok) {
      return res; // Return the successful response
    } else {
      const errorMessage = res.message || "Failed to fetch CopyTrade";
      return {
        message: "error",
        reason: errorMessage,
      };
    }

  } catch (error) {
    const typedError = error as Error;
    console.error('Error fetching the users copied trade:', typedError.message);
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
    // console.log('Request body:', requestBody);

    const response = await fetch(`${metabotUrl}/copyTrade`, {
      method: 'POST',
      headers: {
        Authorization: `${key}:${userToken}`,
        "Content-Type": "application/json",
      },
      body: requestBody,
    });

    const res = await response.json(); 

    if (response.ok) {
    
      toast({
        description: "CopyTrade is successful",
       
      });
      return res;
    } else {
      // If the response is not OK, handle the error and show the error message
      const errorMessage = res.message || "CopyTrade failed"; // Use the error message from the response
      toast({
        description: `CopyTrade failed: ${errorMessage}`,
        variant: "destructive",
      });
      return {
        message: "error",
        reason: errorMessage,
      };
    }

  } catch (error) {
    console.error('Error during CopyTrade:', error);
    // Catch and display any errors that occur during the request
    toast({
      description: "An error occurred during CopyTrade",
      variant: "destructive",
    });
    throw error;
  }
};


export const deleteCopyTrade = async (userToken: string, tradeId: string) => {
  try {
    // console.log(`Deleting copy trade with tradeId: ${tradeId} using token: ${userToken}`);

    const response = await fetch(`${metabotUrl}/copyTrade/id/${tradeId}`, {
      method: 'DELETE',
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
    // console.log('Delete Response:', res); // Log the delete response

    if (res.status === true) {
      toast({
        description: "CopyTrade deleted successfully",
      });
    } else {
      toast({
        description: "Failed to delete CopyTrade",
        variant: "destructive",
      });
    }

    return res;
  } catch (error) {
    const typedError = error as Error;
    console.error('Error deleting copy trade:', typedError.message);
    toast({
      description: "An error occurred during the deletion of the CopyTrade",
      variant: "destructive",
    });
  }
};





// // apiCall.ts
// import { ApiResponse, ChartInformation, CreateWalletResponse, FetchDynamicTokenResponse, JitoTipResponse, LatestTradesResponse, TooltipData, TransactionData } from '@/utils/types';

export const fetchPumpMoon = async () => {
  try {
    const response = await fetch(`${metabotUrl}/solanaMemeTerminal/memeTerminal/pumpfunandmoonshot`, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage = errorData.message || `Error ${response.status}: ${response.statusText}`;
      throw new Error(errorMessage);
    }

    const data = response.json();
return data
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    console.error(`Error fetching data: ${errorMessage}`);
    return null;
  }
};





export const fetchRaydiumScanner = async (): Promise<ApiResponse | null> => {
  try {
    const response = await fetch(`${metabotUrl}/solanaMemeTerminal/memeTerminal/raydium`, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    // console.log("API Response:", response); 

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage = errorData.message || `Error ${response.status}: ${response.statusText}`;
      console.error("Error message from API:", errorMessage);
      throw new Error(errorMessage);
    }

    const data = await response.json();
    // console.log("Data from API after parsing JSON:", data); 
    return data;

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    console.error(`Error fetching data: ${errorMessage}`);
    return null;
  }
};



export const fetchTrendingPumpMoon = async (): Promise<ApiResponse | null> => {
  try {
    const response = await fetch(`${metabotUrl}/solanaMemeTerminal/trending/pumpfunandmoonshot`, {
      headers: {
        "Content-Type": "application/json"
      }
    });

      if (!response.ok) {
      const errorData = await response.json();
      const errorMessage = errorData.message || `Error ${response.status}: ${response.statusText}`;
      console.error("Error message from API:", errorMessage);
      throw new Error(errorMessage);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    console.error(`Error fetching data: ${errorMessage}`);
    return null;
  }
};


export const fetchTrendingRaydium = async (): Promise<ApiResponse | null> => {
  try {
    const response = await fetch(`${metabotUrl}/solanaMemeTerminal/trending/raydium`, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    // console.log("API Response:", response); 

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage = errorData.message || `Error ${response.status}: ${response.statusText}`;
      console.error("Error message from API:", errorMessage);
      throw new Error(errorMessage);
    }

    const data = await response.json();
    // console.log("Data from API after parsing JSON:", data); 
    return data;

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    console.error(`Error fetching data: ${errorMessage}`);
    return null;
  }
};


// apiCalls.ts
export const fetchJitoTipFee = async (): Promise<JitoTipResponse> => {
  const endpoint = `${metabotUrl}/trade/jitoTip`;

  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    // console.log('Response data:', data);
    return data; 
  } catch (error) {
    console.error('Error fetching Jito Tip Fee:', error);
    throw error; 
  }
};





// services/api.js
export const fetchTooltipData = async (
  hoveredTokenAddress: string,
  hoveredDeployerAddress: string
): Promise<TooltipData | null> => {
  if (!hoveredTokenAddress || !hoveredDeployerAddress) {
    console.error("One or both required parameters are undefined.");
    return null;
  }

  const url = `${metabotUrl}/solanaMemeTerminal/holders/${hoveredTokenAddress}/${hoveredDeployerAddress}`;
  
  try {
    // console.log("Request URL:", url);
    
    const response = await fetch(url);
    // console.log("Response status:", response.status);

    if (!response.ok) {
      console.error(`Error fetching data: Status ${response.status} - ${response.statusText}`);
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    
    const data = await response.json();
    // console.log("Response data:", data);
    return data;
  } catch (error) {
    console.error('error from getting hovered data :', error);
    return null;
  }
};


// const headers = new Headers({
//   Authorization: `${key}:${token}`,
//   "Content-Type": "application/json",
// });



// export const fetchCompletedTable = async (userId: string, userToken: string) => {
//   try {
//     const response = await fetch(`${metabotUrl}/trade/user/${userId}`, {
//       headers: {
//         Authorization: `${key}:${userToken}`,
//         "Content-Type": "application/json",
//       },
//     });

//     // Log the status code and status text if the response is not ok
//     if (!response.ok) {
//       console.error(`Request failed with status ${response.status}: ${response.statusText}`);
//       const errorData = await response.json(); // Attempt to get error details from the response
//       throw new Error(`Error ${response.status}: ${JSON.stringify(errorData)}`);
//     }

//     const data = await response.json();
//     return data;

//   } catch (error) {
//     console.error("Failed to fetch Completed Table data:", error);
//     return null;
//   }
// };





export const fetchCompletedTable = async (userToken: string, userId: string) => {
  try {
    const response = await fetch(`${metabotUrl}/trade/user/${userId}`, {
      method: 'GET',
      headers: {
        Authorization: `${key}:${userToken}`,
        "Content-Type": "application/json",
      },
    });

    const res = await response.json();

    if (response.ok) {
      return res.data || []; 
    } else {
      throw new Error(res.message || "Failed to fetch completed transactions");
    }
  } catch (error) {
    console.error("Error fetching completed transactions:", error);
    throw error; 
  }
};

export const fetchOpenPositionsTable = async (userId: string, userToken: string) => {
  try {
    const response = await fetch(`${metabotUrl}/limitTrade/user/${userId}`, {
      method: "GET",
      headers: {
        Authorization: `${key}:${userToken}`,
        'Content-Type': 'application/json',
      },
    });

    
    const data = await response.json();
    // console.log("Open Positions Table Response:", data);

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    return data;
  } catch (error) {
    console.error("Failed to fetch Open Positions Table data:", error);
    return null;
  }
};

// apiCalls.ts
export const fetchHoldingsTable = async (userToken: string, walletAddress: string) => {
  try {
    console.log(`Fetching holdings data for wallet: ${walletAddress}`);
    
    const response = await fetch(`${metabotUrl}/solanaMemeTerminal/holdings/${walletAddress}`, {
      method: "GET",
      headers: {
        Authorization: `${key}:${userToken}`,
        'Content-Type': 'application/json',
      },
    });

    // Check if the response is okay (status 200-299)
    if (!response.ok) {
      const errorData = await response.json();
      console.error("API Error Details:", errorData);
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    // Parse the response body
    const data = await response.json();
    console.log("Holdings Table Response:", data);
    return data;

  } catch (error) {
    console.error("Failed to fetch Holdings Table data:", error);
    return null; // Return null if there was an error
  }
};




export const createWalletAPI = async (userToken: string): Promise<CreateWalletResponse> => {
  const endpoint = `${metabotUrl}/wallet`;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `${key}:${userToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ chain: "SOLANA" }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data; 
  } catch (error) {
    console.error("Error creating wallet:", error);
    throw error;
  }
};


export const editUserSettings = async (
  userToken: string,
  settings: {
    slippage: number;
    solPriorityFee: string;
    jitoTipValue: number;
    jitoCheck: boolean;
  }
) => {
  const endpoint = `${metabotUrl}/user/editSettings`;

  const params = {
    slippage: settings.slippage,
    solPriorityFee: settings.solPriorityFee,
    jitoTip: settings.jitoCheck ? settings.jitoTipValue : 0,
    isPrivate: settings.jitoCheck,
  };

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Authorization: `${key}:${userToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ params }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Error editing user settings: ${errorText}`);
      throw new Error(`Failed to edit user settings: ${response.status}`);
    }

    const updatedSettings = await response.json(); // Parse the updated settings from the response
    console.log('User settings updated successfully:', updatedSettings);

    return updatedSettings; // Return the updated settings
  } catch (error) {
    console.error('Error editing user settings:', error);
    throw error;
  }
};



export const fetchSolanaWalletBalance = async (userToken:string, walletAddress:string) => {
  const endpoint = `${metabotUrl}/trade/balance`;
  try {
   
    const headers = new Headers({
      Authorization: `${key}:${userToken}`,
      "Content-Type": "application/json",
    });

   
    const requestBody = JSON.stringify({
      token: "11111111111111111111111111111111",
      walletAddress: walletAddress,
      protocolIdentifier: "pump.fun:solana",
    });

    
    const response = await fetch(endpoint, {
      method: "POST",
      headers: headers,
      body: requestBody,
    });

   
    if (!response.ok) {
     
      const errorDetails = await response.text(); 
      throw new Error(
        `Error ${response.status}: ${response.statusText}. Details: ${errorDetails}`
      );
    }

    
    const data = await response.json();
    return data;

  } catch (error) {
    
    console.error("Error fetching Solana wallet balance:", error);
    throw error; 
  }


};


const API_URL = 'https://data.solanatracker.io/tokens';

export const fetchTokenData = async (tokenAddress: string) => {
  try {
    const response = await fetch(`${API_URL}/${tokenAddress}`, {
      headers: {
        "x-api-key": `${solanaKey}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data for token address ${tokenAddress}`);
    }

    const data = await response.json();
    console.log(data); // Log the fetched data for inspection
    return data;
  } catch (error) {
    console.error('Error fetching token data:', error);
    return null; // Return null if there is an error
  }
};

// const APIUrl = 'https://data.solanatracker.io/chart';
// export const fetchSolanaData = async (tokenAddress:string) => {
//   const headers = new Headers();
//   headers.append('x-api-key', ${solanaKey);
//   headers.append('Content-Type', 'application/json');

//   const response = await fetch(`${APIUrl}/${tokenAddress}`, {
//     method: 'GET',
//     headers,
//   });

//   if (!response.ok) {
//     throw new Error(`Failed to fetch: ${response.statusText}`);
//   }

//   return response.json(); // Parse the JSON response
// };

// const ApiUrl = "https://data.solanatracker.io/chart/";
// https://data.solanatracker.io/chart/4ytpZgVoNB66bFs6NRCUaAVsLdtYk2fHq4U92Jnjpump?type=1d&marketCap=110


// function buildApiQuery({ resolution, periodParams, tokenId, poolId }) {
//   let resolutionStr = formatResolution(resolution);

//   const baseQuery = `?type=${resolutionStr.toLowerCase()}`;

//   const dayInSeconds = 3600 * 24;
//   const timeQuery = periodParams.to - periodParams.from > dayInSeconds
//     ? `&time_from=${periodParams.from}&time_to=${periodParams.to}`
//     : '';

//   if (periodParams.custom && periodParams.to - periodParams.from > dayInSeconds) {
//     resolutionStr = '30m';
//   }
// return `https://data.solanatracker.io/chart/${tokenId}/${poolId}${baseQuery}${timeQuery}`;
// }

export const fetchSolanaData = async (tokenAddress: string): Promise<ChartInformation | null> => {
  try {
    const response = await fetch(`${ApiUrl}/${tokenAddress}`, {
      method: "GET",
      headers: {
        "x-api-key": `${solanaKey}`,
        "Content-Type": "application/json",
      },
    });

    console.log("API Response Status:", response.status);
    if (!response.ok) {
      console.error("Failed to fetch data for token address:", response.statusText);
      throw new Error("Failed to fetch data for token address");
    }

    const data = await response.json();
    console.log("Fetched API Data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error so it can be handled by the caller
  }
};





export const fetchTradeData = async (
  tokenAddress: string,
  walletAddress: string,
  amount: string,
  userToken: string
) => {
  const metabotApiKey = `${key}:${userToken}`;
  const headers = new Headers({
    Authorization: metabotApiKey,
    "Content-Type": "application/json",
  });

  const takeProfitParams = localStorage.getItem("takeProfit");
  const stopLossParams = localStorage.getItem("stopLoss");

  const requestBody = JSON.stringify({
    token: tokenAddress,
    paymentToken: "11111111111111111111111111111111",
    amount: Number(amount).toFixed(6).toString(),
    action: "buy",
    walletAddress,
    protocolIdentifier: "pump.fun:solana",
    takeProfitParams,
    stopLossParams,
  });

  try {
    const response = await fetch(`${metabotUrl}/trade`, {
      method: "POST",
      headers: headers,
      body: requestBody,
    });

    if (!response.ok) {
      const errorResponse = await response.json(); 
      throw new Error(JSON.stringify(errorResponse)); 
    }

    const data = await response.json();
    console.log("Trade success:", data);
    return data;
  } catch (error: any) {
    console.error("Error in Trade Request", error.message);
    throw new Error(error.message); 
  }
};



 export const sellToken = async (
  walletAddress: string,
  tokenAddress: string,
  amount: string,
  userToken: string
): Promise<any> => {
   
  const metabotApiKey = `${key}:${userToken}`; 

  const headers = new Headers({
    Authorization: metabotApiKey,
    "Content-Type": "application/json",
  });

  const requestBody = JSON.stringify({
    token: tokenAddress,
    amount,
    action: "sell",
    walletAddress,
    paymentToken: "11111111111111111111111111111111",
    protocolIdentifier: "pump.fun:solana",
  });
console.log(requestBody)
  try {
    const response = await fetch(`${metabotUrl}/trade`, {
      method: "POST",
      headers,
      body: requestBody,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to sell token.");
    }

    const data = await response.json
    console.log("Trade success:", data);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message || "An unknown error occurred.");
    } else {
      throw new Error("An unknown error occurred.");
    }
  }
};


// utils/api.ts
// export const fetchDynamicTokenAddress = async (slug: string): Promise<FetchDynamicTokenResponse> => {
//   try {
//     const response = await fetch(`${solanaurl}/tokens/${slug}`, {
//       headers: {
//         "x-api-key": solanaKey as string,
//         "Content-Type": "application/json",
//       },
//     });

//     if (!response.ok) {
//       throw new Error("Failed to fetch token data");
//     }

//     return await response.json(); // Ensure the response matches `FetchDynamicTokenResponse`
//   } catch (error) {
//     console.error("Error fetching token data:", error);
//     throw error;
//   }
// };

export const fetchDynamicTokenAddress = async (slug: string): Promise<FetchDynamicTokenResponse> => {
  const response = await fetch(`${solanaurl}/tokens/${slug}`, {
    headers: {
      "x-api-key": solanaKey as string,
      "Content-Type": "application/json",
    },
  });


  if (!response.ok) {
    throw new Error("Failed to fetch token data");
  }

  return response.json(); 
  console.log({response})
};


// Latest Trades API Call

export const fetchLatestTrades = async (slug: string, pageParam: string): Promise<any> => {
  const url = `${solanaurl}/trades/${slug}?cursor=${pageParam}`;
  console.log("Fetching URL:", url);

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "x-api-key": solanaKey as string,
      "Content-Type": "application/json",
    },
  });

  console.log("API Response Status:", response.status);
  if (!response.ok) {
    console.error("Failed to fetch trades:", response.statusText);
    throw new Error("Failed to fetch trades");
  }

  const data = await response.json();
  console.log("Fetched API Data:", data); 
  return data; 
};







// Top Traders API Call
export async function fetchTopTraders(slug: string): Promise<TransactionData> {
 
    const url = `${solanaurl}/top-traders/${slug}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "x-api-key": solanaKey as string,
        "Content-Type": "application/json",
      },
    });


    console.log("API Response Status:", response.status);
    if (!response.ok) {
      console.error("Failed to holders information:", response.statusText);
      throw new Error("Failed to fetch holders");
    }
  
    const data = await response.json();
    console.log("Fetched API Data:", data); 
    return data; 
  };
  


// Holders API Call
export async function fetchHolders(slug: string): Promise<any> {
  
    const url = `${solanaurl}/tokens/${slug}/holders`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "x-api-key": solanaKey as string,
        "Content-Type": "application/json",
      },
    });
    
  
    console.log("API Response Status:", response.status);
    if (!response.ok) {
      console.error("Failed to holders information:", response.statusText);
      throw new Error("Failed to fetch holders");
    }
  
    const data = await response.json();
    console.log("Fetched API Data:", data); 
    return data; 
  };


// First Buyers API Call
export async function fetchFirstBuyers(slug: string): Promise<TransactionData> {
  
    const url = `${solanaurl}/first-buyers/${slug}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "x-api-key": `${solanaKey}` as string,
        "Content-Type": "application/json",
      },
    });
    console.log("API Response Status:", response.status);
  if (!response.ok) {
    console.error("Failed to fetch Buyers:", response.statusText);
    throw new Error("Failed to fetch first Buyers");
  }

  const data = await response.json();
  console.log("Fetched API Data:", data); 
  return data; 
};


export async function executeLimitTrade({
  userToken,
 token,
  amount,
  action,
  walletIndex,
  isGreaterThan,
  tradePrice,
  walletAddress,
  type,
  
}: {
  userToken:string,
  token: any;
  amount: string;
  action: "buy";
  walletIndex: number;
  isGreaterThan: boolean;
  tradePrice: string;
  walletAddress: string;
  type: string;
 
}): Promise<any> {
  const endpoint = `${metabotUrl}/limitTrade`;

  const formData = new FormData();
  formData.append("price", tradePrice);
  formData.append("type", type);

  const requestBody = JSON.stringify({
    token,
    amount:Number(amount).toFixed(6).toString(),
    action,
    walletIndex,
    isgreaterThan:isGreaterThan, 
    protocolIdentifier: "pump.fun:solana",
    tradePrice: formData.get("price"), 
    walletAddress,
    type: formData.get("type"), 
  });

  console.log("Request Body:", requestBody);

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${key}:${userToken}`,
      },
      body: requestBody,
    });

    
    console.log("Response Status:", response.status);

    if (!response.ok) {
      let errorData: any;
      try {
        errorData = await response.json();
        console.error("API Error Data:", errorData);
      } catch (parseError) {
        console.error("Failed to parse error response:", parseError);
      }

      throw new Error(
        errorData?.message || `Trade failed with status ${response.status}`
      );
    }

    const responseData = await response.json();
    console.log("Trade successful:", responseData);
    return responseData;
  } catch (error) {
    console.error("Error executing trade:", error);
    throw error; 
  }
}








export async function executeSellLimitTrade({
  userToken,
 token,
  amount,
  action,
  walletIndex,
  isGreaterThan,
  tradePrice,
  walletAddress,
  type,
  
}: {
  userToken:string,
  token: any;
  amount: string;
  action: "sell";
  walletIndex: number;
  isGreaterThan: boolean;
  tradePrice: string;
  walletAddress: string;
  type: string;
 
}): Promise<any> {
  const endpoint = `${metabotUrl}/limitTrade`;

  const formData = new FormData();
  formData.append("price", tradePrice);
  formData.append("type", type);

  const requestBody = JSON.stringify({
    token,
    amount:Number(amount).toFixed(6).toString(),
    action,
    walletIndex,
    isgreaterThan:isGreaterThan, 
    protocolIdentifier: "pump.fun:solana",
    tradePrice: formData.get("price"), 
    walletAddress,
    type: formData.get("type"), 
  });

  console.log("Request Body:", requestBody);

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${key}:${userToken}`,
      },
      body: requestBody,
    });

    
    console.log("Response Status:", response.status);

    if (!response.ok) {
      let errorData: any;
      try {
        errorData = await response.json();
        console.error("API Error Data:", errorData);
      } catch (parseError) {
        console.error("Failed to parse error response:", parseError);
      }

      throw new Error(
        errorData?.message || `Trade failed with status ${response.status}`
      );
    }

    const responseData = await response.json();
    console.log("Trade successful:", responseData);
    return responseData;
  } catch (error) {
    console.error("Error executing trade:", error);
    throw error; 
  }
}







