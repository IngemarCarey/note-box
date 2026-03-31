"use client";

import { EmptyState } from "@/components/EmptyState";
import { NoteSummaryPanel } from "@/components/NoteSummaryPanel";
import { NoteTimeline } from "@/components/NoteTimeline";
import { PageIntro } from "@/components/PageIntro";
import { TopTabs } from "@/components/TopTabs";
import { useLatestNote, useUserNotes } from "@/lib/hooks";

export default function MyNotesPage() {
  const { latestNote } = useLatestNote();
  const { notes } = useUserNotes();

  return (
    <main className="grid-gap">
      <TopTabs />
      <PageIntro
        eyebrow="My Notes"
        title="A personal stream of appended entries."
        detail="Your archive lives in sequence. The latest note stays close while older entries settle into a calm vertical flow."
      />
      <div className="my-layout">
        <section className="surface" style={{ borderRadius: 28, padding: 20, display: "grid", gap: 18 }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "baseline", flexWrap: "wrap" }}>
            <p className="section-title">Entry stream</p>
            <span className="muted" style={{ fontSize: "0.88rem" }}>{notes.length} total entries</span>
          </div>
          {notes.length > 0 ? <NoteTimeline notes={notes} /> : <EmptyState title="No notes yet" detail="Connect a wallet and add your first onchain entry." />}
        </section>
        <div style={{ display: "grid", gap: 16 }}>
          <NoteSummaryPanel note={latestNote} title="Current latest" />
          <section className="surface" style={{ borderRadius: 28, padding: 20, display: "grid", gap: 12 }}>
            <p className="section-title">Status</p>
            <p style={{ margin: 0, lineHeight: 1.7 }}>
              Latest entry, timeline order, and detail route are ready for real contract reads. Mock entries stay in place when the wallet has no saved note yet.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}