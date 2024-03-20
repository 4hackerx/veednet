"use client";

import { WalletProvider } from "../library/context/WalletProvider";

import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
      <WalletProvider>{children}</WalletProvider>
  );
}


// "use client";

// import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
// import { PetraWallet } from "petra-plugin-wallet-adapter";
// import { ReactNode } from "react";

// const wallets = [new PetraWallet()];

// export function WalletProvider({ children }: { children: ReactNode }) {
//   return (
//     <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
//       {children}
//     </AptosWalletAdapterProvider>
//   );
// }

