// // Types for the token
// interface Token {
//     name: string;
//     symbol: string;
//     mint: string;
//     uri: string;
//     decimals: number;
//     hasFileMetaData: boolean;
//     createdOn: string;
//     description: string;
//     image: string;
//     showName: boolean;
//     website?: string; // Optional field
// }

// // Types for the liquidity details
// interface Liquidity {
//     quote: number;
//     usd: number;
// }

// // Types for the price details
// interface Price {
//     quote: number;
//     usd: number;
// }

// // Types for the market cap
// interface MarketCap {
//     quote: number;
//     usd: number;
// }

// // Types for the security details
// interface Security {
//     freezeAuthority: string | null;
//     mintAuthority: string | null;
// }

// // Types for transaction details
// interface Txns {
//     buys: number;
//     total: number;
//     volume: number;
//     sells: number;
// }

// // Types for the pool
// interface Pool {
//     poolId: string;
//     liquidity: Liquidity;
//     price: Price;
//     tokenSupply: number;
//     lpBurn: number;
//     tokenAddress: string;
//     marketCap: MarketCap;
//     decimals: number;
//     security: Security;
//     quoteToken: string;
//     market: string;
//     deployer: string;
//     openTime: number;
//     createdAt: number;
//     txns: Txns;
// }

// // Types for the risk information
// interface RiskDetail {
//     name: string;
//     description: string;
//     level: string;
//     score: number;
// }

// interface Risk {
//     rugged: boolean;
//     risks: RiskDetail[];
//     score: number;
// }

// // Types for the event data
// interface EventChange {
//     priceChangePercentage: number;
// }

// interface Events {
//     "1m": EventChange;
//     "5m": EventChange;
//     "15m": EventChange;
//     "30m": EventChange;
//     "1h": EventChange;
//     "2h": EventChange;
//     "3h": EventChange;
//     "4h": EventChange;
//     "5h": EventChange;
//     "6h": EventChange;
//     "12h": EventChange;
//     "24h": EventChange;
// }

// // Type for the main data item
// interface LatestData {
//     token: TokenData;
//     pools: Pool[];
//     events: Events;
//     risk: Risk;
// }

// // Type for the API response
// interface ApiResponse {
//     latestData: LatestData[];
    
// }
