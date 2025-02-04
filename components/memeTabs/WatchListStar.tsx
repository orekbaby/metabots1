"use client";
import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import WatchListMeme from "./WatchListMeme";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const WatchListStar = () => {
  const watchListData = useSelector((state: RootState) => state.watchlist.tokens);

  return (
    <Dialog>
      <DialogTrigger>
        <div className="relative">
          <div className="w-fit flex items-center gap-1 font-semibold text-[#E1E1E1] text-[12px] md:text-sm lg:text-sm border-white border-b">
            WatchList
          </div>
          <div className="w-[18px] absolute top-[-20%] right-[-30%] text-[10px] flex justify-center items-center h-[18px] rounded-full bg-[#E53535]">
            {watchListData.length}
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="w-full max-w-[842px] py-5 px-5 bg-[#0C1623] h-[522px] border-[#1A232F] border">
        <WatchListMeme watchListData={watchListData} />
      </DialogContent>
    </Dialog>
  );
};



export default WatchListStar;
