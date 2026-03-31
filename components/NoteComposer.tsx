"use client";

import { FormEvent, useEffect, useState } from "react";
import { useAccount, useWaitForTransactionReceipt, useWriteContract } from "wagmi";

import { NoteStatusChip } from "@/components/NoteStatusChip";
import { SaveNoteButton } from "@/components/SaveNoteButton";
import { APP_ID, APP_NAME, CONTRACT_ADDRESS } from "@/lib/constants";
import { baseNoteBoxAbi } from "@/lib/contract";
import { trackTransaction } from "@/utils/track";

type NoteComposerProps = {
  onSaved?: (content: string, txHash?: string) => void;
};

export function NoteComposer({ onSaved }: NoteComposerProps) {
  const { address, isConnected } = useAccount();
  const [content, setContent] = useState("");
  const [lastSaved, setLastSaved] = useState<string | null>(null);
  const [mode, setMode] = useState<"ready" | "saving" | "saved">("ready");
  const [fallbackTxHash, setFallbackTxHash] = useState<string | undefined>();

  const { data: hash, isPending, writeContract, error } = useWriteContract();
  const receipt = useWaitForTransactionReceipt({
    hash,
    query: {
      enabled: Boolean(hash),
    },
  });

  useEffect(() => {
    if (receipt.isSuccess && content) {
      const txHash = receipt.data?.transactionHash ?? hash;
      setMode("saved");
      setLastSaved(content);
      setFallbackTxHash(txHash);
      onSaved?.(content, txHash);
      setContent("");

      if (address && txHash) {
        trackTransaction(APP_ID, APP_NAME, address, txHash);
      }
    }
  }, [address, content, hash, onSaved, receipt.data?.transactionHash, receipt.isSuccess]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = content.trim();
    if (!trimmed) return;

    if (!isConnected || !address) {
      setMode("saved");
      setLastSaved(trimmed);
      setFallbackTxHash(undefined);
      onSaved?.(trimmed);
      setContent("");
      return;
    }

    setMode("saving");
    writeContract({
      address: CONTRACT_ADDRESS,
      abi: baseNoteBoxAbi,
      functionName: "addNote",
      args: [trimmed],
    });
  }

  const isSaving = isPending || receipt.isLoading || mode === "saving";
  const count = content.length;

  return (
    <form
      onSubmit={handleSubmit}
      className="surface"
      style={{
        borderRadius: 30,
        padding: 20,
        display: "grid",
        gap: 16,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <div>
          <p className="section-title">Composer</p>
          <h2 style={{ margin: "8px 0 0", fontSize: "1.6rem", letterSpacing: "-0.04em" }}>Write a short onchain note</h2>
        </div>
        <NoteStatusChip status={isSaving ? "saving" : mode} />
      </div>

      <label htmlFor="note-content" className="muted" style={{ fontSize: "0.92rem" }}>
        Keep it short, clear, and personal.
      </label>

      <textarea
        id="note-content"
        value={content}
        onChange={(event) => {
          setContent(event.target.value.slice(0, 120));
          if (mode !== "ready") setMode("ready");
        }}
        placeholder="Draft a note you want to keep onchain..."
        rows={9}
        style={{
          width: "100%",
          resize: "vertical",
          borderRadius: 22,
          border: "1px solid rgba(47,93,80,0.14)",
          background: "rgba(255,255,255,0.8)",
          padding: "18px 18px 22px",
          fontSize: "1.05rem",
          lineHeight: 1.8,
          minHeight: 260,
          outline: "none",
          color: "var(--ink)",
        }}
      />

      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
        <div className="muted" style={{ display: "grid", gap: 6, fontSize: "0.9rem" }}>
          <span>{count}/120 characters</span>
          <span>{isConnected ? "Base wallet detected" : "Wallet optional for preview mode"}</span>
          {error ? <span style={{ color: "var(--clay)" }}>{error.message ?? "Transaction was not completed."}</span> : null}
        </div>
        <div style={{ width: "min(100%, 220px)" }}>
          <SaveNoteButton disabled={!content.trim() || isSaving} isSaving={isSaving} />
        </div>
      </div>

      {lastSaved ? (
        <div
          style={{
            padding: 16,
            borderRadius: 18,
            background: "rgba(47,93,80,0.08)",
            border: "1px solid rgba(47,93,80,0.12)",
            display: "grid",
            gap: 8,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
            <strong>Latest saved result</strong>
            <span className="muted" style={{ fontSize: "0.88rem" }}>{fallbackTxHash ? "Transaction tracked" : "Preview saved locally"}</span>
          </div>
          <p style={{ margin: 0, lineHeight: 1.65 }}>{lastSaved}</p>
        </div>
      ) : null}
    </form>
  );
}
