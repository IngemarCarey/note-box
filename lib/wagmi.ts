"use client";

import { QueryClient } from "@tanstack/react-query";
import { createConfig, http } from "wagmi";
import { injected } from "wagmi/connectors";
import { base } from "wagmi/chains";

export const queryClient = new QueryClient();

export const wagmiConfig = createConfig({
  chains: [base],
  connectors: [injected()],
  transports: {
    [base.id]: http(),
  },
});

// TODO(builder-code): Replace this placeholder with the production builder code
// data suffix once the final Base builder code value is provided.
export const builderCodeSuffix = "";