"use client";

import { QueryClient } from "@tanstack/react-query";
import { createConfig, http } from "wagmi";
import { base } from "wagmi/chains";
import { injected } from "wagmi/connectors";

import { BUILDER_CODE, BUILDER_CODE_DATA_SUFFIX } from "@/lib/constants";

export const queryClient = new QueryClient();

export const builderCode = BUILDER_CODE;
export const builderCodeSuffix = BUILDER_CODE_DATA_SUFFIX;

export const wagmiConfig = createConfig({
  chains: [base],
  connectors: [injected()],
  transports: {
    [base.id]: http(),
  },
  // Base attribution and ERC-8021 analytics suffix.
  dataSuffix: {
    value: builderCodeSuffix,
    required: false,
  },
});
