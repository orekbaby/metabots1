// MyHoldings.tsx
import React, { FC, useEffect, useState } from 'react';
import MyHoldingsTable from './MyHoldingsTable';
import TradeTabs from '../metabots/Dashboard/tradeTabs/TradeTabs';


interface MyHoldingsProps {
  holdingsData: any; 
}

const MyHoldings:FC<MyHoldingsProps> = ({holdingsData}) => {
 

  // console.log("Holdings Data:", holdingsData);

  return (
    <div className="flex w-full gap-2">
      <div className="flex-[70%] flex flex-col gap-2">
        <div className="flex gap-2">
          <MyHoldingsTable holdingsData={holdingsData} />
        </div>
      </div>
      <div className="hidden md:inline lg:inline flex-[30%] w-full ml-2 pt-2">
        {/* <TradeTabs /> */}
      </div>
    </div>
  );
};

export default MyHoldings;
