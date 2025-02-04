import React, { createContext, useContext, useState, ReactNode } from 'react';

interface WalletVisibilityContextType {
  isWalletVisible: boolean;
  toggleWalletVisibility: () => void;
}

const WalletVisibilityContext = createContext<WalletVisibilityContextType | undefined>(undefined);

export const useWalletVisibility = () => {
  const context = useContext(WalletVisibilityContext);
  if (!context) {
    throw new Error('useWalletVisibility must be used within a WalletVisibilityProvider');
  }
  return context;
};

export const WalletVisibilityProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isWalletVisible, setIsWalletVisible] = useState(false);

  const toggleWalletVisibility = () => {
    setIsWalletVisible((prevState) => {
      console.log('Toggling wallet visibility:', !prevState);
      return !prevState;
    });
  };
  

  return (
    <WalletVisibilityContext.Provider value={{ isWalletVisible, toggleWalletVisibility }}>
      {children}
    </WalletVisibilityContext.Provider>
  );
};
