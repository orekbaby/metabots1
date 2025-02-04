import React, { useEffect, useState } from 'react';
import TradeTabs from '../metabots/Dashboard/tradeTabs/TradeTabs';
import CompletedTransTable from './CompletedTransTable';
import { fetchCompletedTable, fetchOpenPositionsTable } from '@/utils/apiCalls';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import OpenPositionsTable from './OpenPositionsTable';

interface OpenTransactionsProps {
  openPositionsData: any; 
}

const OpenPositions: React.FC<OpenTransactionsProps> = ({ openPositionsData }) => {
  

  

  return (
    <div className="flex w-full gap-2">
      <div className="flex-[70%] flex flex-col gap-2">
        <div className="flex gap-2">
          <OpenPositionsTable openPositionsData={openPositionsData} />
        </div>
      </div>
      <div className="hidden md:inline lg:inline flex-[30%] w-full ml-2 pt-2">
        {/* <TradeTabs /> */}
      </div>
    </div>
  );
};

export default OpenPositions;
