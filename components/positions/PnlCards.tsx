import React, { useEffect, useState } from 'react';
import TradeTabs from '../metabots/Dashboard/tradeTabs/TradeTabs';
import PnlTable from './PnlTable';

interface PnlCardsProps {
  pnlData: any; 
  loading:boolean;
}

const CompletedTransactions: React.FC<PnlCardsProps> = ({ pnlData, loading }) => {
  

  return (
    <div className="flex w-full gap-2">
      <div className="flex-[70%] flex flex-col gap-2">
        <div className="flex gap-2">
          <PnlTable pnlData={pnlData} loading={loading} />
        </div>
      </div>
      <div className="hidden md:inline lg:inline flex-[30%] w-full ml-2 pt-2">
        {/* <TradeTabs /> */}
      </div>
    </div>
  );
};

export default CompletedTransactions;
