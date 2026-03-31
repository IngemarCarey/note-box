import { NoteEntryCard } from "@/components/NoteEntryCard";
import type { NoteItem } from "@/lib/types";

export function NoteTimeline({ notes }: { notes: NoteItem[] }) {
  return (
    <section style={{ display: "grid", gap: 14 }}>
      {notes.map((note, index) => (
        <div key={note.id} style={{ display: "grid", gridTemplateColumns: "42px minmax(0,1fr)", gap: 12, alignItems: "start" }}>
          <div style={{ display: "grid", justifyItems: "center", gap: 8, paddingTop: 8 }}>
            <span style={{ fontSize: "0.75rem", color: "rgba(31,41,55,0.5)", letterSpacing: "0.12em" }}>{String(index + 1).padStart(2, "0")}</span>
            <span style={{ width: 1, minHeight: 90, background: "rgba(47,93,80,0.14)" }} />
          </div>
          <NoteEntryCard note={note} />
        </div>
      ))}
    </section>
  );
}