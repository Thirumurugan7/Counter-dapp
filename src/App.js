import logo from "./logo.svg";
import "./App.css";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
  polygonMumbai,
} from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Counter from "./component/Counter";

const config = getDefaultConfig({
  appName: "counter",
  projectId: "a24e4649efcfa381e630dc59e39d1288",
  chains: [mainnet, polygon, optimism, arbitrum, base, zora, polygonMumbai],
  ssr: true, // If your dApp uses server side rendering (SSR)
});
const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <div className="App">
            <header className="App-header">
              <ConnectButton />

              <Counter />
            </header>
          </div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
