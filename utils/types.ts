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
}
