import React, { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CompletedTransactions from './CompletedTransactions';
import MyHoldings from './MyHoldings';
import OpenPositions from '@/components/positions/OpenPositions';
import { fetchCompletedTable, fetchHoldingsTable, fetchOpenPositionsTable } from '@/utils/apiCalls';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import PnlCards from './PnlCards';

const PositionTabs = () => {
  const [completedData, setCompletedData] = useState(null);
  const [holdingsData, setHoldingsData] = useState<any>(null);
  const [pnlData, setPnlData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [openPositionsData, setOpenPositionsData] = useState(null);
  const { user, authToken } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const fetchData = async () => {
      if (user?.token && user?.wallet?.length > 0) {
       
        const walletAddress = user.wallet[0]?.publicAddress; 

        try {
          console.log("Wallet Address being used:", walletAddress);
          const data = await fetchHoldingsTable(user?.token, walletAddress);
          setHoldingsData(data);
        } catch (error) {
          console.error('Failed to fetch holdings data:', error);
        }
      }
    };

    // Only fetch data when user data and wallet are available
    if (user?.token && user?.wallet?.length > 0) {
      fetchData();
    }

  }, [user?.token, user?.wallet]); 



  useEffect(() => {
    const fetchPositionsData = async () => {
      if (user?.token && user._id) {
        try {
        
          const positions = await fetchOpenPositionsTable(user._id, user.token);
          setOpenPositionsData(positions);
        } catch (error) {
          console.error('Failed to fetch open positions:', error);
        }
      }
    };

    fetchPositionsData();
  }, [user?.token, user._id]);

  console.log({ openPositionsData });

  useEffect(() => {
    const fetchData = async () => {
      if (user?.token && user._id) {
        try {
          const completed = await fetchCompletedTable(user?.token, user._id);
          setCompletedData(completed);
        } catch (error) {
          console.error('Failed to fetch Pnl Data:', error);
        }
      }
    };

    fetchData();
  }, [user?.token, user._id]);
  console.log({completedData})


  useEffect(() => {
    const fetchPnlData = async () => {
      if (user?.token && user._id) {
        try {
          const pnl = await fetchCompletedTable(user.token, user._id);

          const filteredData = pnl.filter(
            (item: any) => item.type === "sell" && item.status === "confirmed"
          );
          setPnlData(filteredData);
        } catch (error) {
          console.error("Failed to fetch PnL Data:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchPnlData();
  }, [user.token, user._id]);
  
  console.log({pnlData})
  return (
    <>
    <Tabs
  defaultValue="CompletedTransactions"
  className="w-full md:bg-transparent lg:bg-transparent rounded-lg mt-5 md:mt-0 lg:mt-0 px-2"
>
  <TabsList className="flex h-[71px] items-center justify-between
   gap-4 bg-[#0C141F] md:bg-transparent lg:bg-[#0A111B] rounded-lg py-[6px] border-b-transparent md:py-0 lg:py-0 border-[#1A232F] border pr-6">
    
   <div className="flex justify-start items-center gap-4">
    <TabsTrigger
      className="w-[158px] h-[30px] px-2 text-[#B5B6B6] text-[12px] md:text-sm lg:text-[12.76px] font-semibold rounded-l
        data-[state=active]:bg-[#084298]  data-[state=active]:text-[#E7E7E7]
        "
      value="CompletedTransactions"
    >
     Completed Transactions
    </TabsTrigger>
    
   
    <TabsTrigger
        className=" relative w-[158px] h-[30px] px-2 text-[#B5B6B6] text-[12px] md:text-sm lg:text-[12.76px] font-semibold rounded-l
        data-[state=active]:bg-[#084298]  data-[state=active]:text-[#E7E7E7]
        "
      value="OpenPositions"
    >
      Open Positions
      <div className="w-[18px] absolute top-[-10%] right-0 text-[10px] flex justify-center items-center h-[18px] rounded-full bg-[#E53535]">
            0
          </div>
    </TabsTrigger>

    <TabsTrigger
       className="w-[158px] h-[30px] px-2 text-[#B5B6B6] text-[12px] md:text-sm lg:text-[12.76px] font-semibold rounded-l
       data-[state=active]:bg-[#084298]  data-[state=active]:text-[#E7E7E7]
       "
      value="MyHoldings"
    >
     My Holdings
    </TabsTrigger>

    <TabsTrigger
       className="w-[158px] h-[30px] px-2 text-[#B5B6B6] text-[12px] md:text-sm lg:text-[12.76px] font-semibold rounded-l
       data-[state=active]:bg-[#084298] data-[state=active]:text-[#E7E7E7]
       "
      value="PnLCards"
    >
     PnL Cards
    </TabsTrigger>
   
   </div>
    <div className="flex justify-end items-end">
      <div className="flex justify-center gap-4 items-center">
      <div className="flex gap-1 items-center justify-center">
        <p className="font-bold text-[15px] text-[#CACACA]">TP & SL</p>
        </div>
      </div>
      </div>
    
  </TabsList>
   <TabsContent className="w-full h-full" value="CompletedTransactions">
   <CompletedTransactions completedData={completedData}  />
  </TabsContent>

  <TabsContent className="w-full h-full" value="OpenPositions">
    <OpenPositions openPositionsData={openPositionsData}/>
  </TabsContent>

  <TabsContent className="w-full h-full" value="MyHoldings">
    <MyHoldings holdingsData={holdingsData}/>
  </TabsContent>

<TabsContent className="w-full h-full" value="PnLCards">
   < PnlCards pnlData={pnlData} loading={loading}  />
  </TabsContent>
  </Tabs>
    </>
  )
}

export default PositionTabs