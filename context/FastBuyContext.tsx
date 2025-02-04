// FastBuyContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FastBuyContextType {
  fastBuyValue: string;
  setFastBuyValue: (value: string) => void;
}

const FastBuyContext = createContext<FastBuyContextType | undefined>(undefined);

export const useFastBuy = () => {
  const context = useContext(FastBuyContext);
  if (!context) {
    throw new Error('useFastBuy must be used within a FastBuyProvider');
  }
  return context;
};

interface FastBuyProviderProps {
  children: ReactNode;
}

export const FastBuyProvider = ({ children }: FastBuyProviderProps) => {
  const [fastBuyValue, setFastBuyValue] = useState('0.5');

  return (
    <FastBuyContext.Provider value={{ fastBuyValue, setFastBuyValue }}>
      {children}
    </FastBuyContext.Provider>
  );
};
