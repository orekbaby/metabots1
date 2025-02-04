"use client"
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Context type definition
interface TpSlContextType {
  isOn: boolean;
  toggleIsOn: () => void;
}

// Create context
const TpSlContext = createContext<TpSlContextType | undefined>(undefined);

// Provider component
export const TpSlProvider = ({ children }: { children: ReactNode }) => {
  const [isOn, setIsOn] = useState<boolean>(true)

  useEffect(() => {
    const storedSetting = localStorage.getItem('tpSlSetting');
    if (storedSetting !== null) {
      setIsOn(JSON.parse(storedSetting));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tpSlSetting', JSON.stringify(isOn));
  }, [isOn]);

  // Function to toggle the state
  const toggleIsOn = () => setIsOn((prev) => !prev);

  return (
    <TpSlContext.Provider value={{ isOn, toggleIsOn }}>
      {children}
    </TpSlContext.Provider>
  );
};

// Custom hook to use the context
export const useTpSl = () => {
  const context = useContext(TpSlContext);
  if (!context) throw new Error('useTpSl must be used within a TpSlProvider');
  return context;
};
