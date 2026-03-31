"use client";

import { PageIntro } from "@/components/PageIntro";
import { TopTabs } from "@/components/TopTabs";
import { formatDateTime } from "@/lib/format";
import { mockNotes } from "@/lib/notes";

const groups = [
  { title: "Today", items: mockNotes.slice(0, 2) },
  { title: "Earlier", items: mockNotes.slice(2) },
];

export default function ArchivePage() {
  return (
    <main className="grid-gap">
      <TopTabs />
      <PageIntro
        eyebrow="Archive"
        title="Grouped slices from the note ledger."
        detail="Archive view stays light. It helps you skim recent writing batches without turning the app into a dashboard."
      />
      <section className="archive-layout">
        {groups.map((group) => (
          <div key={group.title} className="surface" style={{ borderRadius: 28, padding: 20, display: "grid", gap: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "baseline" }}>
              <h2 style={{ margin: 0, fontSize: "1.2rem", letterSpacing: "-0.04em" }}>{group.title}</h2>
              <span className="muted" style={{ fontSize: "0.88rem" }}>{group.items.length} notes</span>
            </div>
            <div style={{ display: "grid", gap: 12 }}>
              {group.items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: "grid",
                    gap: 8,
                    paddingTop: 12,
                    borderTop: "1px solid rgba(47,93,80,0.12)",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                    <strong>{item.relativeTime}</strong>
                    <span className="muted" style={{ fontSize: "0.86rem" }}>{formatDateTime(item.createdAt)}</span>
                  </div>
                  <p style={{ margin: 0, lineHeight: 1.7 }}>{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}