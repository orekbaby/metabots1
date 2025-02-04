// @ts-ignore
import { useMemo, useEffect, use } from "react";
import { usePathname } from "next/navigation"
import { useWalletContext } from "@/context/WalletContext";

// @ts-ignore
export function flatten(obj, { prefix = "", restrictTo }) {
    let restrict = restrictTo;
    if (restrict) {
      restrict = restrict.filter((k: any) => obj.hasOwnProperty(k));
    }
    const result: any = {};
  (function recurse(obj, current, keys) {
      (keys || Object.keys(obj)).forEach((key: any) => {
        const value = obj[key];
        const newKey = current ? current + "." + key : key; // joined key with dot
  if (value && typeof value === "object") {
          // @ts-ignore
          recurse(value, newKey); // nested object
        } else {
          result[newKey] = value;
        }
      });


    })(obj, prefix, restrict);
    return result;
  }


  export const useTvDataFeed = (tokenId:string, tokenSymbol:string, poolId:any, pools:any) => {
    const pathname = usePathname();
    const { selectedWallet, balances } = useWalletContext();
  
    return useMemo(() => {
      return makeDataFeed(tokenId, tokenSymbol, poolId, pools);
    }, [pathname, tokenId, tokenSymbol, pools, selectedWallet]);
  };
// @ts-ignore
  const makeDataFeed = (tokenId, tokenSymbol, poolId, pools = false) => {
    let subscriptions = {};
    let realtimeHandler = false;
  
    const getApi = async (url: string) => {
      try {
        const response = await fetch(url, {
          credentials: "include",
          headers: {
            'x-api-key': process.env.NEXT_PUBLIC_NADLES_SOLANA_KEY as string
          }
        });
        if (response.ok) {
          const responseJson = await response.json();
          return responseJson.oclhv;
        }
      }
  catch (err) { }
      return null;
    };

}