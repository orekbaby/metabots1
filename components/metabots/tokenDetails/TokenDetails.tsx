import React from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaTelegram, FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import { FetchDynamicTokenResponse, LatestData, TokenInfo } from "@/utils/types";
import { IoCopyOutline } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";

interface TokenDetailsProps {
  tokenAddressDynamic: FetchDynamicTokenResponse;
  handleCopy?: (address: string) => void;
  formatTimeDifference?: (timestamp: number) => string;
 
}


const TokenDetails: React.FC<TokenDetailsProps> = ({ tokenAddressDynamic, handleCopy, formatTimeDifference,  }) => {
  const { token } = tokenAddressDynamic;

  const formatNumber = (num: number | null | undefined): string => {
    if (num == null || isNaN(num) || typeof num !== 'number') return 'N/A'; 
  
    let formattedNum = num.toFixed(1);
  
    if (num >= 1_000_000) {
      formattedNum = (num / 1_000_000).toFixed(1) + 'M'; 
    } else if (num >= 1_000) {
      formattedNum = (num / 1_000).toFixed(1) + 'K'; 
    }
  
    return formattedNum;
  };
  
  return (
    <div className="hidden md:flex lg:flex justify-between gap-[24px] flex-row mb-4 border-1 border-[#212E40] p-2 rounded-lg">
  {/* First Column */}
  <div className="flex flex-col gap-4">
    <div className="flex gap-2 flex-row">
      <div className='w-[50px] h-[50px] rounded-full flex tokenAddressDynamics-center justify-center'>
        {tokenAddressDynamic?.token?.image ? (
          <Image
            width={50}
            height={50}
            alt={tokenAddressDynamic?.token?.name || 'Token'}
            className='rounded-full object-cover aspect-square object-fit'
            src={tokenAddressDynamic?.token?.image}
          />
        ) : (
          <div className='w-[50px] h-[50px] rounded-full bg-[#0A1019] border-white flex tokenAddressDynamics-center justify-center text-white font-bold'>
            {tokenAddressDynamic?.token?.name?.substring(0, 3).toUpperCase()}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-[8px] p-1">
        <div className="flex tokenAddressDynamics-center gap-1">
          <h2 className="font-medium text-sm md:text-base lg:text-base">
            {tokenAddressDynamic?.token?.name ? tokenAddressDynamic.token.name.substring(0, 4) : 'N/A'}
          </h2>
          <IoCopyOutline className="text-base" onClick={() => handleCopy?.(tokenAddressDynamic?.token?.mint)} />
          <span className="text-sm md:text-sm lg:text-sm text-[#B5B6B6]">
            {formatTimeDifference?.(Number(tokenAddressDynamic?.pools?.[0]?.createdAt))}
          </span>
          <div className="bg-[#17212F] w-[28px] h-[28px] flex justify-center tokenAddressDynamics-center">
            <CiStar />
          </div>
        </div>

        <div className="flex gap-2 tokenAddressDynamics-center">
          {tokenAddressDynamic?.token?.telegram || tokenAddressDynamic?.token?.twitter || tokenAddressDynamic?.token?.website ? (
            <div className="flex gap-2">
              {tokenAddressDynamic?.token?.telegram && (
                <a href={tokenAddressDynamic.token.telegram} target="_blank" rel="noopener noreferrer" className="w-[18px] h-[18px] rounded-full bg-[#37ADF3] flex justify-center tokenAddressDynamics-center">
                  <FaTelegramPlane className="w-[13px] h-[13px] text-white" />
                </a>
              )}
              {tokenAddressDynamic?.token?.twitter && (
                <a href={tokenAddressDynamic.token.twitter} target="_blank" rel="noopener noreferrer" className="w-[18px] h-[18px] rounded-full bg-black flex justify-center tokenAddressDynamics-center">
                  <FaXTwitter className="w-[13px] h-[13px] text-[#8D8D8D]" />
                </a>
              )}
              {tokenAddressDynamic?.token?.website && (
                <a href={tokenAddressDynamic.token.website} target="_blank" rel="noopener noreferrer" className="w-[18px] h-[18px] flex justify-center tokenAddressDynamics-center">
                  <AiOutlineGlobal className="w-[18px] h-[18px] text-white" />
                </a>
              )}
            </div>
          ) : (
            <div className="flex gap-2 tokenAddressDynamics-center justify-center w-[100px]">
              <IoIosWarning className="text-[11px] text-[#FFCC00] w-[26px] h-[26px]" />
              <p className="font-medium text-[11px]">No Socials</p>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>

  {/* Second Column */}
  <div className="flex flex-col gap-2 p-1">
    <h2 className="font-normal text-[10px] md:text-sm lg:text-xs text-[#6C757D]">
      Price (USD)
    </h2>
    <div className="flex tokenAddressDynamics-center gap-1">
      <p className="font-medium text-[13px]">${formatNumber(tokenAddressDynamic?.pools?.[0]?.price?.usd)}</p>
      <span className="font-semibold text-[10px] text-[#06C270]">
        {/* Insert span logic here */}
      </span>
    </div>
  </div>

  <div className="flex flex-col gap-2 p-1">
    <h2 className="font-normal text-[10px] md:text-sm lg:text-xs text-[#6C757D]">
    24H Volume (USD)"
    </h2>
    <div className="flex tokenAddressDynamics-center gap-1">
    <p className="font-medium text-[13px]">${formatNumber(tokenAddressDynamic?.pools?.[0]?.volume?.usd)}</p>
      <span className="font-semibold text-[10px] text-[#06C270]">
        {/* Insert span logic here */}
      </span>
    </div>
  </div>

  <div className="flex flex-col gap-2 p-1">
    <h2 className="font-normal text-[10px] md:text-sm lg:text-xs text-[#6C757D]">
    Buy (24H)
    </h2>
    <div className="flex tokenAddressDynamics-center gap-1">
    <p className="font-medium text-[13px] text-green-500">
  {`${formatNumber(tokenAddressDynamic?.pools?.[0]?.txns?.buys)}`}
</p>

      <span className="font-semibold text-[10px] text-[#06C270]">
        {/* Insert span logic here */}
      </span>
    </div>
  </div>

  <div className="flex flex-col gap-2 p-1">
    <h2 className="font-normal text-[10px] md:text-sm lg:text-xs text-[#6C757D]">
    Sell (24H)
    </h2>
    <div className="flex tokenAddressDynamics-center gap-1">
    <p className="font-medium text-[13px] text-red-500">
  {`${formatNumber(tokenAddressDynamic?.pools?.[0]?.txns?.sells)}`}
</p>

      <span className="font-semibold text-[10px] text-[#06C270]">
        {/* Insert span logic here */}
      </span>
    </div>
  </div>


  <div className="flex flex-col gap-2 p-1">
    <h2 className="font-normal text-[10px] md:text-sm lg:text-xs text-[#6C757D]">
    Total Liquidity
    </h2>
    <div className="flex items-center justify-center gap-1">
    {/* <p className="font-medium text-[13px]">
    ${formatNumber(tokenAddressDynamic?.pools[0]?.liquidity?.usd)}
</p> */}

      <span className="font-semibold text-[10px] text-[#06C270]">
        {/* Insert span logic here */}
      </span>
    </div>
  </div>


  <div className="flex flex-col gap-2 p-1">
    <h2 className="font-normal text-[10px] md:text-sm lg:text-xs text-[#6C757D]">
   Market cap
    </h2>
    <div className="flex tokenAddressDynamics-center gap-1">
    <p className="font-medium text-[13px]">
    ${formatNumber(tokenAddressDynamic?.pools[0]?.marketCap?.usd)}
</p>

      <span className="font-semibold text-[10px] text-[#06C270]">
        {/* Insert span logic here */}
      </span>
    </div>
  </div>
  {/* Image (Fraud) */}
 
  <Image
    src="/Tag.png"
    alt="scam-score"
    width={150}
    height={50}
    className=""
  />

  {/* Progress Section */}
  <div className="flex tokenAddressDynamics-center gap-2">
  <div className="relative w-[180px] h-[12px] bg-[#1B2B3C] rounded-[24px] overflow-hidden">
  
    <div
      className="absolute left-0 top-0 h-full bg-[#0D6EFD] rounded-[24px]"
      style={{
        width: `${
          tokenAddressDynamic?.token?.createdOn === "https://pump.fun"
            ? Math.min((tokenAddressDynamic?.pools[0]?.marketCap?.usd / 69000) * 100, 100)
            : Math.min((tokenAddressDynamic?.pools[0]?.marketCap?.quote / 500) * 100, 100)
        }%`
      }}
    ></div>
    
   
    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[7px] font-medium text-white">
      {
        tokenAddressDynamic?.token?.createdOn === "https://pump.fun"
          ? `${Math.round(
              (tokenAddressDynamic?.pools[0]?.marketCap?.usd / 69000) * 100 > 100
                ? 100
                : (tokenAddressDynamic?.pools[0]?.marketCap?.usd / 69000) * 100
            )}%`
          : `${Math.round(
              (tokenAddressDynamic?.pools[0]?.marketCap?.quote / 500) * 100 > 100
                ? 100
                : (tokenAddressDynamic?.pools[0]?.marketCap?.quote / 500) * 100
            )}%`
      }
    </span>
  </div>
</div>
</div>

  );
};

export default TokenDetails;
