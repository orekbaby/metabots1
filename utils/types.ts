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
  mostProfit: any[]; 
  mostLosses: any[]; 
  summary: WalletAnalysisSummary;
}

export interface WalletData {
  noOfQueriesLeft: number;
  label: string;
  status:boolean;
  action:string;
  walletAddress: string;
  usdBalance: number;
  solBalance: number;
  walletAnalysis: WalletAnalysis[];
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
