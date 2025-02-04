// //   const filterPumpMoonData =  (newToken: any) =>   {
// //     const filterParams = {
// //       liquidityBurned:freshMinted.burned,
// //       withSocialMediaAccount: freshMinted.social,
// //       top10HoldersPercentage: freshMinted.top10,

// //       liquidity:{
// //         min:freshMinted.minLiquidity
// //         max:freshMinted.maxLiquidity
// //       },
     
// //     }

// // return filterMemeToken (data ?? [], filterParams)
// //   }



// i want you to modify this code to do the following, i want to filter the data coming from my websockets using the following parameters, i also want the filter to persist, so i will like it to handle the initial state  in the redux store., for instance the check options will be set to false while the input the initial value is between 0 and 1000000000000000
// the data that is being filterd is coming from an api, this is the name coming from the api

// //input filters
// "txns": {
//     "buys": 112,
//     "volume": 2416,
//     "sells": 7
// }

// //marketCap
// "marketCap": {
//     "quote": 29.853991922957423,
//     "usd": 5527.756277819196
// },


// //liquidity
// "liquidity": {
//     "quote": 207.00737167,
//     "usd": 38387.22860970769
// },


// //check filters
// //with social media at least one
// "twitter": "https://x.com/darkprotrump",
// "telegram": "https://t.me/darkprotrump4547",
// "website": "https://darkprotrump4547.com/"

// //liquidity burn
// "lpBurn": 100,

// //top 10 holders
// results: {
//     largestHolder: {
//       wallet: '5SCyZaZo6cctQDB3BGnT6y8smhUmibmtDErs9CPfzDWP',
//       percentage: 87.73594673039351,
//       usdValue: 6716.92325165931
//     },
//     totalHolders: 4,
//     top10Percentage: 100,
//     devPercentage: 6.7062499999998995
//   }
// }




// please put this is outside the function  from the web sockets i dont want it in the websockets function.

// please take into account the exact words used used before the check button
// Liquidity Provider Burned

// the keyword here is holding less than 15% supply
// Top 10 Holders (Holding less than 15% Supply)

// the key word here is socila media account with at least 1
// With social media account (at least 1)


// import { useSelector } from 'react-redux';

// useEffect(() => {
//   const filters = useSelector((state) => state.filters);

//   const handleLatestTokensUpdated = (newTokenData) => {
//     const isWithinFilters = (data) => {
//       // Check if data matches filter criteria from Redux store
//       const { checkFilters, inputFilters } = filters;

//       const meetsCheckFilters =
//         (!checkFilters.lpBurn || data.lpBurn > 0) &&
//         (!checkFilters.top10Holders || data.results?.top10Percentage >= 10) &&
//         (!checkFilters.socialMedia || data.twitter || data.telegram || data.website);

//       const meetsInputFilters = Object.keys(inputFilters).every((key) => {
//         const filter = inputFilters[key];
//         return data[key] >= filter.min && data[key] <= filter.max;
//       });

//       return meetsCheckFilters && meetsInputFilters;
//     };

//     if (newTokenData && isWithinFilters(newTokenData)) {
//       setFreshMinted((prevData) => [...prevData, newTokenData]);
//     }
//   };

//   solanaTrackerWebsocket.on('latestTokensUpdated', handleLatestTokensUpdated);
//   return () => solanaTrackerWebsocket.off('latestTokensUpdated', handleLatestTokensUpdated);
// }, [filters]);
