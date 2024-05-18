import React from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { watchList } from "@/utils/mockData";
const Watchlist = () => {
  return (
    <>
      <div className="flex justify-between bg-[#0A1019] p-2 mb-3">
        <h3 className="text-[10px] md:text-xs lg:text-xs semi-bold md:font-bold lg:font-bold">
          Watched Token
        </h3>
        <p className="text-[10px] md:text-xs lg:text-xs semi-bold md:font-bold lg:font-bold">
          price/%
        </p>
      </div>
      {watchList?.map((row, index) => (
        <>
          <div key={index} className="flex justify-between px-4">
            <div className="flex justify-start gap-2 items-center">
              <FaStar className="text-[#FFC107] text-xs md:text-base lg:text-base" />
              <Image
                className=""
                src="/club.png"
                width={24}
                height={24}
                alt="avatar"
              />
              <div className="flex gap-2 items-center">
                <h3 className="font-semibold text-xs md:text-sm lg:text-sm">
                  {row.watchedToken}
                </h3>
                <Image
                  src="/account-balance.png"
                  width={20}
                  height={20}
                  alt="account-bal"
                />
                <span className="font-normal text-[9px] md:text-xs lg:text-xs">
                  {row.value}
                </span>
              </div>
            </div>

            <div className="">
              <p className="font-bold text-[9px] md:text-xs lg:text-xs">
                {row.price}
              </p>
            </div>
          </div>
          <div className="flex justify-end px-4">
            <p className="font-normal text-[10px] text-[#A52A27]">
              {row.subvalue}
            </p>
          </div>
        </>
      ))}
    </>
  );
};

export default Watchlist;
