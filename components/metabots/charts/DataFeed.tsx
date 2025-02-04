//@ts-nocheck

export const useTvDataFeed = (tokenId, tokenSymbol, poolId, pools) => {
    const pathname = usePathname();
    const { solanaWalletAddress} = useSolanaWalletStore()
  
    return useMemo(() => {
      return makeDataFeed(tokenId, tokenSymbol, poolId, pools);
    }, [pathname, tokenId, tokenSymbol, pools, solanaWalletAddress]);
  };
  
/**
* @param {Object} params - Parameters for query building
   * @param {string|number} params.resolution - Time resolution
   * @param {Object} params.periodParams - Time period parameters
   * @param {string} params.tokenId - Token identifier
   * @param {string} params.poolId - Pool identifier
   * @returns {string} Complete API endpoint with query parameters
   * 
   * 
   */

function buildApiQuery({ resolution, periodParams, tokenId, poolId }) {
    // let resolutionStr = formatResolution(resolution);

    const baseQuery = `?type=${resolution.toLowerCase()}`;

    const dayInSeconds = 3600 * 24;
    const timeQuery = periodParams.to - periodParams.from > dayInSeconds
      ? `&time_from=${periodParams.from}&time_to=${periodParams.to}`
      : '';

    if (periodParams.custom && periodParams.to - periodParams.from > dayInSeconds) {
      resolutionStr = '30m';
    }
return `https://data.solanatracker.io/chart/${tokenId}/${poolId}${baseQuery}${timeQuery}`;
  }