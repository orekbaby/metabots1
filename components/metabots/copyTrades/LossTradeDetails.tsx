import { copyTradingDetails, tokenDetails } from '@/utils/mockData'
import React from 'react'

import CopyLossTable from '@/components/CopyLossTable'

const LossTradeDetails = () => {
  return (
    <>
    <div className="">
  <div className="grid grid-cols-4 w-full mb-2">
  {copyTradingDetails?.map((row, index) => (
    <div
      key={index}
      className="flex flex-col items-start p-2 rounded-lg"
    >
      <h2 className="font-normal text-[8px] text-[#E7E7E7]">{row.name}</h2>
      <div className="">
        <div className="flex items-center">
          <p className={`text-[10px] font-semibold} ${
  index === 0 
? 'text-[#4CA244]' 
:index ===1 
?'text-[#E63E3A]'
  : index === 2 || index === 3 || index === 7
  ? 'text-[#0D6EFD]' 
  : index === 4 || index === 5 || index === 6
  ? 'text-white'
  : ''
          }`}
          >
          {row.token}</p>
        </div>
      </div>
    </div>
  ))}
</div>

<CopyLossTable/>
</div>
 </>
  )
}

export default LossTradeDetails