import React, { FC } from 'react'
import AllTradestable from './AllTradestable'
import { CopyTradeData } from '@/utils/types';
interface AllTradesDataProps {
  copyTradeData: CopyTradeData[] | null;
}

const AllTrades:FC<AllTradesDataProps> = ({copyTradeData}) => {
  return (
    <>
    <AllTradestable copyTradeData={copyTradeData}/>
    </>
  )
}

export default AllTrades