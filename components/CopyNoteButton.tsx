"use client";

import { useState } from "react";

export function CopyNoteButton({ content }: { content: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <button className="ghost-button" onClick={handleCopy} style={{ padding: "10px 14px", borderRadius: 14 }}>
      {copied ? "Copied" : "Copy Note"}
    </button>
  );
}