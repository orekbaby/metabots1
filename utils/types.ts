// apiTypes.ts

export interface WalletAnalysisSummary {
  realized: number;
  unrealized: number;
  total: number;
  totalInvested: number;
  totalWins: number;
  totalLosses: number;
  winPercentage: number | null;
  lossPercentage: number | null;
}

export interface WalletAnalysis {
  mostProfit: MostProfitTrade[];
  mostLosses: any[]; 
  summary: WalletAnalysisSummary;
  }
  

export interface WalletData {
  noOfQueriesLeft: number;
  label: string;
  address: string;
  decryptedPrivateKey: string;
  status:boolean;
  action:string;
  walletAddress: string;
  usdBalance: number;
  solBalance: number;
  walletAnalysis: WalletAnalysis[];
  mostProfit: MostProfitTrade[];
  realized: number;
  unrealized: number;
  total: number;
  totalInvested: number;
  totalWins: number;
  totalLosses: number;
  winPercentage: number | null;
  lossPercentage: number | null;
  trades: {
    tx: string;
    from: {
      address: string;
      amount: number;
      token: {
        name: string;
        symbol: string;
        image: string;
        decimals: number;
      };
    };
    to: {
      address: string;
      amount: number;
      token: {
        name: string;
        symbol: string;
        image: string;
        decimals: number;
      };
    };
    price: {
      usd: number;
      sol: string;
    };
    volume: {
      usd: number;
      sol: number;
    };
    wallet: string;
    program: string;
    time: number;
    type: string;
  }[];
}


export interface CreateWalletResponse {
  status: boolean;
  data: WalletData;
}

export interface MostProfitTrade {
  holding: number;
  held: number;
  sold: number;
  realized: number;
  unrealized: number;
  total: number;
  total_invested: number;
  meta: {
    name: string;
    symbol: string;
    image: string;
    description: string;
    website: string;
  };
  pnlPercentage: number;
  avgBuyPrice: number;
  avgSellPrice: number;
  trades: Trade[];
}


export interface Trade {
  tx: string;
  from: { address: string; amount: number; token: Token };
  to: { address: string; amount: number; token: Token };
  price: { usd: number; sol: string };
  volume: { usd: number; sol: string };
  time: number;
  type: string;
}

export interface Token {
  name: string;
  symbol: string;
  image: string;
  decimals: number;
}

interface TakeProfitParams {
  pricePercentage: number;
  amountPercentage: number;
  _id: string;
}



export interface CopyTradeApiResponse {
  status: boolean;
  data: CopyTradeData[];
}
export interface CopyTradeData {
  _id: string;
  user: string;
  action: string;
  chain: string;
  walletAddress: string;
  watchedAddr: string;
  label: string;
  isgreaterThan: boolean;
  amount: string;
  paymentToken: string;
  tradeAmount: number;
  takeProfitParams: TakeProfitParams;
  paused: boolean;
 expiration: string; 
  protocolIdentifier: string;
  copiedTrades: any[];
  tradesExecuted: number;
  maxTradesAllowed: number;
  createdAt: string; 
  updatedAt: string; 
  __v: number;
  trades: {
    tx: string;
    from: {
      address: string;
      amount: number;
      token: {
        name: string;
        symbol: string;
        image: string;
        decimals: number;
      };
    };
    to: {
      address: string;
      amount: number;
      token: {
        name: string;
        symbol: string;
        image: string;
        decimals: number;
      };
    };
    price: {
      usd: number;
      sol: string;
    };
    volume: {
      usd: number;
      sol: number;
    };
    wallet: string;
    program: string;
    time: number;
    type: string;
  }[];
}



interface TokenData {
  name: string;
  address: string;
  symbol: string;
  mint: string;
  uri: string;
  decimals: number;
  hasFileMetaData: boolean;
  createdOn: string;
  description: string;
  image: string;
  showName: boolean;
  website: string; 
  twitter: string; 
  telegram: string;

}

interface Liquidity {
  quote: number;
  usd: number;
}


interface Price {
  quote: number;
  usd: number;
}


interface MarketCap {
  quote: number;
  usd: number;
}

 



interface Security {
  freezeAuthority: string | null;
  mintAuthority: string | null;
}

// Types for transaction details
interface Txns {
  buys: number;
  total: number;
  volume: number;
  sells: number;
}

// Types for the pool
interface Pool {
  poolId: string;
  liquidity: Liquidity;
  price: Price;
  tokenSupply: number;
  lpBurn: number;
  tokenAddress: string;
  marketCap: MarketCap;
  decimals: number;
  security: Security;
  quoteToken: string;
  market: string;
  deployer: string;
  openTime: number;
  createdAt: number;
  lastUpdated:number;
  txns: Txns;
}

// Types for the risk information
interface RiskDetail {
  name: string;
  description: string;
  level: string;
  score: number;
}

interface Risk {
  rugged: boolean;
  risks: RiskDetail[];
  score: number;
}

// Types for the event data
interface EventChange {
  priceChangePercentage: number;
}

interface Events {
  "1m": EventChange;
  "5m": EventChange;
  "15m": EventChange;
  "30m": EventChange;
  "1h": EventChange;
  "2h": EventChange;
  "3h": EventChange;
  "4h": EventChange;
  "5h": EventChange;
  "6h": EventChange;
  "12h": EventChange;
  "24h": EventChange;
}

// Type for the main data item
 export interface LatestData {
  token: TokenData;
  pools: Pool[];
  events: Events;
  risk: Risk;
}

// export interface RadyiumScannerData {
//   token: Token;
//   pools: Pool[];
//   events: Events;
//   risk: Risk;
// }

interface NewlyGraduatedData {
  token: TokenData;
  pools: Pool[];
  events: Events;
  risk: Risk;
}

interface SoonToMoonData {
  token: TokenData;
  pools: Pool[];
  events: Events;
  risk: Risk;
}

export interface TooltipData {
  
  results: {
    largestHolder: {
      wallet: string;
      percentage: number;
      usdValue: number;
    };
    totalHolders: number;
    top10Percentage: number;
    devPercentage: number;
  };
}

export interface TrendingData {
  token: TokenData;
  pools: Pool[];
  events: Events;
  risk: Risk;
}

// Type for the API response
export interface ApiResponse {
  latestData: LatestData[];
  tokenAddressDynamic: LatestData[];
  newlyGraduatedData:NewlyGraduatedData[];
  soonToMoonData:SoonToMoonData[];
  trendingData:TrendingData[];
  results:TooltipData
  token: TokenData;
  pools: Pool[];
  events: Events;
  risk: Risk;
  
}

 export interface JitoTipData {
  time: string;
  landed_tips_25th_percentile: number;
  landed_tips_50th_percentile: number;
  landed_tips_75th_percentile: number;
  landed_tips_95th_percentile: number;
  landed_tips_99th_percentile: number;
  ema_landed_tips_50th_percentile: number;
}

 export interface JitoTipResponse {
  status: boolean;
  data: JitoTipData;
}


export interface ToolTipResponse {
  results: TooltipData
}

export interface IFilter {
  burned: boolean;
  top10: boolean;
  social: boolean;
  minLiquidity: string;
  maxLiquidity: string;
  minVolume: string;
  maxVolume: string;
  minMCap: string;
  maxMCap: string;
  minTransactions: string;
  maxTransactions: string;
  minBuys: string;
  maxBuys: string;
  minSells: string;
  maxSells: string;
}


export interface TokenInfo {
  name: string;
  symbol: string;
  mint: string;
  uri: string;
  decimals: number;
  hasFileMetaData: boolean;
  createdOn: string;
  image: string;
  website: string; 
  twitter: string; 
  telegram: string;
}

export interface FetchDynamicTokenResponse {
  token: TokenInfo;
  pools: any[];  // Assuming you have other details for pools
  events: any;   // Assuming you have other details for events
  risk: any;     // Assuming you have other details for risk
  buys: number;
  sells: number;
  txns: number;
}



// Define the interface for each trade object
export interface TradeToken {
  tx: string;
  amount: number;
  priceUsd: number;
  volume: number;
  volumeSol: number;
  type: 'buy' | 'sell';
  wallet: string;
  time: number; // Timestamp in milliseconds
  program: string;
  pools: string[];
}

export interface LatestTradesResponse {
  trades: TradeToken[];
  nextCursor: string | null; 
  hasNextPage: boolean; 
}



 export interface TransactionData {
  wallet: string;
  first_buy_time: number;
  last_transaction_time: number;
  held: number;
  sold: number;
  holding: number;
  realized: number;
  unrealized: number;
  total: number;
  total_invested: number;
  sold_usd: number;
  total_transactions: number;
  buy_transactions: number;
  sell_transactions: number;
  average_buy_amount: number;
  current_value: number;
  cost_basis: number;
}

export interface HolderAccount {
  wallet: string;
  amount: number;
  value: {
    quote: number;
    usd: number;
  };
  percentage: number;
}

export interface HoldersData {
  total: number;
  accounts: HolderAccount[];
}

export interface HoldersProps {
  holdersData: HoldersData | null; 
  tokenAddressDynamic: FetchDynamicTokenResponse;
  loading: boolean;              
}


export interface OCLHV {
  open: number;
  close: number;
  low: number;
  high: number;
  volume: number;
  time: number; // Assuming 'time' is a UNIX timestamp
}

export interface ChartInformation {
  oclhv: OCLHV[];
}






