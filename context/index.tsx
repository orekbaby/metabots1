'use client';
import { wagmiAdapter, projectId } from '@/config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createAppKit } from '@reown/appkit/react'
import { mainnet } from '@reown/appkit/networks'
import React, { type ReactNode } from 'react'
import { cookieToInitialState, WagmiProvider, type Config } from 'wagmi'
import { TpSlProvider } from './TPSLContext';
import { FastBuyProvider } from './FastBuyContext';
import { WalletProvider } from './WalletContext';
import { useSelector } from 'react-redux';
import { WalletVisibilityProvider } from './WalletVisibilityContext';

// Set up queryClient
const queryClient = new QueryClient()

if (!projectId) {
  throw new Error('Project ID is not defined')
}

// Set up metadata
const metadata = {
  name: 'appkit-example',
  description: 'AppKit Example',
  url: 'https://appkitexampleapp.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

// Create the modal
export const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [mainnet],
  defaultNetwork: mainnet,
  metadata: metadata,
  features: {
    analytics: true,
    swaps: false,
    email: false,
    socials: [],
    emailShowWallets: false,
  },
})


function ContextProvider({ children, cookies }: { children: ReactNode; cookies: string | null }) {
  const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config, cookies)
  const { user } = useSelector((state: any) => state.auth);

  

const queryClient = new QueryClient();
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig as Config} initialState={initialState}>
       <QueryClientProvider client={queryClient}>
      <FastBuyProvider>
       <TpSlProvider>
       <WalletProvider>
       <WalletVisibilityProvider >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </WalletVisibilityProvider>
      </WalletProvider>
     
      </TpSlProvider>

      </FastBuyProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default ContextProvider