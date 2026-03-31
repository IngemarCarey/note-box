"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";

import { shortenAddress } from "@/lib/format";

export function WalletButton() {
  const { address, isConnected } = useAccount();
  const { connect, connectors, isPending } = useConnect();
  const { disconnect } = useDisconnect();

  if (isConnected) {
    return (
      <button className="pill-button" style={{ padding: "10px 14px", fontWeight: 700 }} onClick={() => disconnect()}>
        {shortenAddress(address)}
      </button>
    );
  }

  return (
    <button
      className="primary-button"
      style={{ padding: "10px 16px", fontWeight: 700 }}
      onClick={() => connect({ connector: connectors[0] })}
      disabled={isPending || connectors.length === 0}
    >
      {isPending ? "Connecting..." : "Connect Wallet"}
    </button>
  );
}