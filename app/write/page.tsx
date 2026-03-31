"use client";

import { useState } from "react";

import { NoteComposer } from "@/components/NoteComposer";
import { NoteStatusChip } from "@/components/NoteStatusChip";
import { NoteSummaryPanel } from "@/components/NoteSummaryPanel";
import { PageIntro } from "@/components/PageIntro";
import { TopTabs } from "@/components/TopTabs";
import { useLatestNote } from "@/lib/hooks";
import type { NoteItem } from "@/lib/types";

export default function WritePage() {
  const { latestNote } = useLatestNote();
  const [savedPreview, setSavedPreview] = useState<NoteItem | null>(null);

  return (
    <main className="grid-gap">
      <TopTabs />
      <PageIntro
        eyebrow="New Note"
        title="Write now, append forever."
        detail="Use the writing panel as your working surface. Save a short note to Base or preview the flow before wallet connection."
      />
      <div className="write-layout">
        <NoteComposer
          onSaved={(content, txHash) =>
            setSavedPreview({
              id: "local-preview",
              content,
              preview: content,
              createdAt: new Date().toISOString(),
              relativeTime: "Just now",
              owner: latestNote?.owner ?? "0x4B3aE6A67418bcD4eF7B2b4A4A1b85172E4C55A9",
              txHash: txHash as `0x${string}` | undefined,
              source: txHash ? "chain" : "mock",
            })
          }
        />
        <div style={{ display: "grid", gap: 16 }}>
          <section className="surface" style={{ borderRadius: 28, padding: 20, display: "grid", gap: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
              <p className="section-title">Current state</p>
              <NoteStatusChip status={savedPreview ? "saved" : "ready"} />
            </div>
            <p style={{ margin: 0, lineHeight: 1.7 }}>
              Keep the composer open, save short entries, and let the latest note remain visible while you continue writing.
            </p>
          </section>
          <NoteSummaryPanel note={savedPreview ?? latestNote} title="Latest visible entry" />
        </div>
      </div>
    </main>
  );
}