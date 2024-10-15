"use client";

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store/index';
import { cookieToInitialState } from "wagmi";
import Web3ModalProvider from '@/context';
import {config} from "@/config"
interface ClientProvidersProps {
  children: React.ReactNode;
  cookies: string | null; // Expecting cookies
}

export default function ClientProviders({ children, cookies }: ClientProvidersProps) {
  // Use cookies directly to derive initialState
  const initialState = cookies ? cookieToInitialState(config, cookies) : {};

  return (
    <Provider store={store}>
      <Web3ModalProvider cookies={cookies}> {/* Pass cookies prop here */}
        {children}
      </Web3ModalProvider>
    </Provider>
  );
}
