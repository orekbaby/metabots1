"use client";
import React, { FC, useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { IoFilterSharp } from "react-icons/io5";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  filterMemeTokens,
} from "@/utils/filterHook";
import {  LatestData } from '@/utils/types';
import { FaCircleCheck } from "react-icons/fa6";
import { BiLoaderAlt } from "react-icons/bi";
import { useToast } from "@/hooks/use-toast";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { updateFreshMinted, } from "@/store/slices/filtersSlice";

interface Props {
  freshMintedData:any[];
  setFreshMinted: (data: LatestData[]) => void;
}
const FreshMintedFilter: FC<Props> = ({
  freshMintedData,
  setFreshMinted,
  
}) => {
  // const { fresh_minted, set_fresh_minted } = useFilter();
  const { toast } = useToast();
  const dispatch: AppDispatch = useDispatch();
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  let typingTimeout: NodeJS.Timeout | null = null;
  const fresh_minted = useSelector((state: RootState) => state.filters.fresh_minted);
  const [burned, setBurned] = useState<boolean>(false);
  const [top10, setTop10] = useState<boolean>(false);
  const [social, setSocial] = useState<boolean>(false);
  const handleMinLiquidityInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    dispatch(updateFreshMinted({ minLiquidity: value }));

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
  };

  const handleMaxLiquidityInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    // setMaxLiquidity(value);

    dispatch(updateFreshMinted({ maxLiquidity: value }));
     
   

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
  };

  const handleMinVolumeInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    // setMinVolume(value);

    dispatch(updateFreshMinted({ minVolume: value }));

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
  };

  const handleMaxVolumeInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    // setMaxVolume(value);

    dispatch(updateFreshMinted({ maxVolume: value }));

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
  };

  const handleMinMCapInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    // setMinMCap(value);

    dispatch(updateFreshMinted({ minMCap: value }));

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
  };

  const handleMaxMCapInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    // setMaxMCap(value);
    dispatch(updateFreshMinted({ maxMCap: value }));

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
  };

  const handleMinTransactionsInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    // setMinTransactions(value);

    dispatch(updateFreshMinted({ minTransactions: value }));

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
  };

  const handleMaxTransactionsInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    // setMaxTransactions(value);

    dispatch(updateFreshMinted({ maxTransactions: value }));

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
  };

  const handleMinBuysInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    // setMinBuys(value);

    dispatch(updateFreshMinted({ minBuys: value }));

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
  };

  const handleMaxBuysInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    // setMaxBuys(value);

    dispatch(updateFreshMinted({ maxBuys: value }));

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
  };

  const handleMinSellsInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    // setMinSells(value);
    dispatch(updateFreshMinted({ minSells: value }));

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
  };

  const handleMaxSellsInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    // setMaxSells(value);

    dispatch(updateFreshMinted({ maxSells: value }));

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
  };

  const handleFilter = async (event: React.FormEvent) => {
    event.preventDefault();

    const market = "pumpfunandmoonshot";
    const section = "Fresh Minted";

    const filterParams = {
      liquidityProviderBurned: fresh_minted.burned,
      withSocialMediaAccount: fresh_minted.social,
      top10holdersPercentage: fresh_minted.top10,
      liquidity: { min: fresh_minted.minLiquidity, max: fresh_minted.maxLiquidity },
      volume: { min: fresh_minted.minVolume, max: fresh_minted.maxVolume },
      marketCap: { min: fresh_minted.minMCap, max: fresh_minted.maxMCap },
      transactions: { min: fresh_minted.minTransactions, max: fresh_minted.maxTransactions },
      buys: { min: fresh_minted.minBuys, max: fresh_minted.maxBuys },
      sells: { min: fresh_minted.minSells, max: fresh_minted.maxSells },
    };
    console.log({ filterParams });

    const requestData = {
      market,
      section,
      filterParams,
    };
    if (loading) return;
    setIsDialogOpen(false);
    setLoading(true);
    try {
      // const response = await getFilterData(requestData);
      // console.log("Filter data sent successfully:", response);
      const newTokens = filterMemeTokens(
        freshMintedData,
        filterParams
      ) as Array<LatestData>;
      // console.log("new--tokens", newTokens);
     setFreshMinted(newTokens);
      setLoading(false);
      toast({
        variant: "copied",
        description: (
          <div className="flex items-center gap-2 justify-center">
            <FaCircleCheck className="text-[#00B466] text-base" />
            <p className="text-base font-normal">
             Fresh Minted Filter Updated
            </p>
          </div>
        ),
      });
    } catch (error) {
      console.error("Failed to send filter data:", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loading) {
      toast({
        variant: "copied",
        description: (
          <div className="flex justify-center items-center gap-2 w-full">
            <BiLoaderAlt className="animate-spin text-[#00B466] text-base" />
            <p className="font-normal text-base">Applying Changes...</p>
          </div>
        ),
      });
    }
  }, [loading]); 

  return (
    <Dialog
      open={isDialogOpen}
      onOpenChange={() => setIsDialogOpen(!isDialogOpen)}
    >
      <DialogTrigger asChild>
        <Button
          variant="default"
          size="sm"
          className="bg-[#17212F] p-2 flex items-center justify-center gap-2 rounded-lg"
        >
          <IoFilterSharp className="text-white text-lg" />
          <p
          className="text-sm lg:hidden xl:hidden 2xl:hidden font-semibold"
          >
            Filter
          </p>
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[#0C1623] p-0 border-none max-w-[90%] lg:max-w-[500px] xl:max-w-[500px] 2xl:max-w-[500px] max-h-[85%] lg:h-auto xl: 2xl:h-auto overflow-y-auto scrollbar-hide rounded-xl">
        <form className="w-full" onSubmit={handleFilter}>
          <div className="px-5 py-2 mb-2 border-b border-[#1A232F]">
            <p className="text-base font-bold">
              {" "}
              Newly Graduated To fresh_minted
            </p>
          </div>
          <div
           className="w-full flex flex-col gap-4 p-5 border-b border-[#1A232F]"
          >
            <div className="flex justify-between items-center">
              <p className="text-sm font-semibold" >
                Liquidity Provider Burned
              </p>
              <Checkbox
      name="burned"
      checked={fresh_minted.burned} 
      onCheckedChange={() => {
        dispatch(updateFreshMinted({ burned: !fresh_minted.burned })); 
      }}
      className="data-[state=checked]:text-[#FFC107] data-[state=checked]:border-[#FFC107] border-[#898989] ring-offset-[#FFC107]"
    />

            </div>
            <div className="flex justify-between items-center ">
              <p className="text-sm font-semibold" >
                Top 10 Holders (Holding less than 15% Supply)
              </p>
              <Checkbox
                name="top10"
                // checked={top10}
                checked={fresh_minted.top10}
                onCheckedChange={() => {
                  dispatch(updateFreshMinted({ top10: !fresh_minted.top10 })); // Toggle `burned`
                }}
                className={`data-[state=checked]:text-[#FFC107] 
                  data-[state=checked]:border-[#FFC107] 
                  border-[#898989] 
                  ring-offset-[#FFC107]`}
              />
            </div>
            <div className="flex justify-between items-center ">
              <p className="text-sm font-semibold" >
                With social media account (at least 1)
              </p>
              <Checkbox
  name="social"
  checked={fresh_minted.social}
  onCheckedChange={() => {
    dispatch(updateFreshMinted({ social: !fresh_minted.social }));
  }}
  className={`data-[state=checked]:text-[#FFC107] data-[state=checked]:border-[#FFC107] border-[#898989] ring-offset-[#FFC107]`}
/>

      </div>
          </div>
          <div  className="w-full p-5 flex flex-col gap-4">
            <div className="flex justify-between items-center ">
              <p className="text-sm font-semibold" >
                Liquidity
              </p>
              <div className="flex items-center gap-5">
                <Input
                  type="number"
                  name="liquidityMin"
                  inputMode="numeric"
                  placeholder="Min"
                  value={fresh_minted.minLiquidity}
                  onChange={handleMinLiquidityInputChange}
                  className="bg-[#0C141F] rounded-lg  border-[#212E40] focus:outline-none text-xs w-[100px]"
                />
                <Input
                  type="number"
                  name="liquidityMax"
                  inputMode="numeric"
                  placeholder="Max"
                  value={fresh_minted.maxLiquidity}
                  onChange={handleMaxLiquidityInputChange}
                  className="bg-[#0C141F] rounded-lg  border-[#212E40] focus:outline-none text-xs w-[100px]"
                />
              </div>
            </div>
            <div className=" flex justify-between items-center ">
              <p className="text-sm font-semibold" >
                Volume
              </p>
              <div className="flex items-center gap-5">
                <Input
                  type="number"
                  name="volumeMin"
                  inputMode="numeric"
                  placeholder="Min($)"
                  value={fresh_minted.minVolume}
                  onChange={handleMinVolumeInputChange}
                  className="bg-[#0C141F] rounded-lg  border-[#212E40] focus:outline-none text-xs w-[100px]"
                />
                <Input
                  type="number"
                  name="volumeMax"
                  inputMode="numeric"
                  placeholder="Max($)"
                  value={fresh_minted.maxVolume}
                  onChange={handleMaxVolumeInputChange}
                  className="bg-[#0C141F] rounded-lg  border-[#212E40] focus:outline-none text-xs w-[100px]"
                />
              </div>
            </div>
            <div className="flex justify-between items-center ">
              <p className="text-sm font-semibold" >
                Max Cap
              </p>
              <div className="flex items-center gap-5">
                <Input
                  type="number"
                  name="capMin"
                  inputMode="numeric"
                  placeholder="Min($)"
                  value={fresh_minted.minMCap}
                  onChange={handleMinMCapInputChange}
                  className="bg-[#0C141F] rounded-lg  border-[#212E40] focus:outline-none text-xs w-[100px]"
                />
                <Input
                  type="number"
                  name="capMax"
                  inputMode="numeric"
                  placeholder="Max($)"
                  value={fresh_minted.maxMCap}
                  onChange={handleMaxMCapInputChange}
                  className="bg-[#0C141F] rounded-lg  border-[#212E40] focus:outline-none text-xs w-[100px]"
                />
              </div>
            </div>
            <div className="flex justify-between items-center ">
              <p className="text-sm font-semibold" >
                Transactions
              </p>
              <div className="flex items-center gap-5">
                <Input
                  type="number"
                  name="tMin"
                  inputMode="numeric"
                  placeholder="Min($)"
                  value={fresh_minted.minTransactions}
                  onChange={handleMinTransactionsInputChange}
                  className="bg-[#0C141F] rounded-lg  border-[#212E40] focus:outline-none text-xs w-[100px]"
                />
                <Input
                  type="number"
                  name="tMax"
                  inputMode="numeric"
                  placeholder="Max($)"
                  value={fresh_minted.maxTransactions}
                  onChange={handleMaxTransactionsInputChange}
                  className="bg-[#0C141F] rounded-lg  border-[#212E40] focus:outline-none text-xs w-[100px]"
                />
              </div>
            </div>
            <div className="flex justify-between items-center ">
              <p className="text-sm font-semibold" >
                Buys
              </p>
              <div className="flex items-center gap-5">
                <Input
                  type="number"
                  name="buysMin"
                  inputMode="numeric"
                  placeholder="Min"
                  value={fresh_minted.minBuys}
                  onChange={handleMinBuysInputChange}
                  className="bg-[#0C141F] rounded-lg  border-[#212E40] focus:outline-none text-xs w-[100px]"
                />
                <Input
                  type="number"
                  name="buysMax"
                  inputMode="numeric"
                  placeholder="Max"
                  value={fresh_minted.maxBuys}
                  onChange={handleMaxBuysInputChange}
                  className="bg-[#0C141F] rounded-lg  border-[#212E40] focus:outline-none text-xs w-[100px]"
                />
              </div>
            </div>
            <div className="flex justify-between items-center ">
              <p className="text-sm font-semibold" >
                Sells
              </p>
              <div className="flex items-center gap-5">
                <Input
                  type="number"
                  name="sellsMin"
                  inputMode="numeric"
                  placeholder="Min"
                  value={fresh_minted.minSells}
                  onChange={handleMinSellsInputChange}
                  className="bg-[#0C141F] rounded-lg  border-[#212E40] focus:outline-none text-xs w-[100px]"
                />
                <Input
                  type="number"
                  name="sellsMax"
                  inputMode="numeric"
                  placeholder="Max"
                  value={fresh_minted.maxSells}
                  onChange={handleMaxSellsInputChange}
                  className="bg-[#0C141F] rounded-lg  border-[#212E40] focus:outline-none text-xs w-[100px]"
                />
              </div>
            </div>
          </div>
          <Button
            variant="default"
            type="submit"
            size="lg"
            className="w-[70%] bg-[#0D6EFD] text-white font-semibold text-sm flex items-center justify-center mx-auto mb-5"
       
        >
            {" "}
            Apply Changes{" "}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default FreshMintedFilter;