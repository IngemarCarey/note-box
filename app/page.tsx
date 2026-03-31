"use client";

import { ActionBar } from "@/components/ActionBar";
import { ColumnNav } from "@/components/ColumnNav";
import { NoteSummaryPanel } from "@/components/NoteSummaryPanel";
import { NoteTimeline } from "@/components/NoteTimeline";
import { PageIntro } from "@/components/PageIntro";
import { TopTabs } from "@/components/TopTabs";
import { useLatestNote, useUserNotes } from "@/lib/hooks";

const columnItems = [
  { href: "/", label: "Workspace", meta: "Latest note and quick actions" },
  { href: "/write", label: "Compose", meta: "Write and save a new entry" },
  { href: "/my", label: "Timeline", meta: "Review your personal archive" },
  { href: "/archive", label: "Archive", meta: "Browse grouped note slices" },
];

export default function HomePage() {
  const { latestNote } = useLatestNote();
  const { notes } = useUserNotes();

  return (
    <main className="grid-gap">
      <TopTabs />
      <div style={{ display: "grid", gap: 16 }}>
        <PageIntro
          eyebrow="Notes Hub"
          title="A quiet room for onchain notes."
          detail="Write short entries, keep your latest thought close, and move through your note stream without dashboard noise."
        />
        <div className="hub-layout" style={{ alignItems: "start" }}>
          <div style={{ display: "grid", gap: 16 }}>
            <ColumnNav items={columnItems} current="/" />
            <section className="surface" style={{ borderRadius: 28, padding: 20, display: "grid", gap: 14 }}>
              <p className="section-title">Quick actions</p>
              <ActionBar />
              <p className="muted" style={{ margin: 0 }}>Keep the newest note in motion and let the archive build over time.</p>
            </section>
          </div>
          <NoteSummaryPanel note={latestNote} />
          <section className="surface" style={{ borderRadius: 28, padding: 20, display: "grid", gap: 18 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "baseline", flexWrap: "wrap" }}>
              <p className="section-title">Recent flow</p>
              <span className="muted" style={{ fontSize: "0.88rem" }}>{notes.length} entries</span>
            </div>
            <NoteTimeline notes={notes.slice(0, 3)} />
          </section>
        </div>
      </div>
    </main>
  );
}