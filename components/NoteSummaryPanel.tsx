import Link from "next/link";

import { formatDateTime, shortenAddress } from "@/lib/format";
import type { NoteItem } from "@/lib/types";

export function NoteSummaryPanel({ note, title = "Latest note" }: { note: NoteItem | null; title?: string }) {
  if (!note) {
    return (
      <section className="surface" style={{ borderRadius: 28, padding: 22, display: "grid", gap: 10 }}>
        <p className="section-title">{title}</p>
        <p style={{ margin: 0, fontSize: "1.1rem", fontWeight: 700 }}>No note yet</p>
        <p className="muted" style={{ margin: 0 }}>Connect a wallet and add the first entry.</p>
      </section>
    );
  }

  return (
    <section className="surface" style={{ borderRadius: 28, padding: 22, display: "grid", gap: 14 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <p className="section-title">{title}</p>
        <span className="pill-button" style={{ padding: "7px 11px", fontSize: "0.82rem" }}>{note.source === "chain" ? "Live" : "Preview"}</span>
      </div>
      <p style={{ margin: 0, fontSize: "1.2rem", lineHeight: 1.7 }}>{note.content}</p>
      <div className="muted" style={{ display: "grid", gap: 6, fontSize: "0.92rem" }}>
        <span>{formatDateTime(note.createdAt)}</span>
        <span>{shortenAddress(note.owner)}</span>
      </div>
      <Link href={`/notes/${note.id}`} className="ghost-button" style={{ width: "fit-content", padding: "10px 14px" }}>
        Open Detail
      </Link>
    </section>
  );
}