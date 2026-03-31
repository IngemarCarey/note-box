import Link from "next/link";

import { formatDateTime, shortenAddress } from "@/lib/format";
import type { NoteItem } from "@/lib/types";

export function NoteEntryCard({ note }: { note: NoteItem }) {
  return (
    <Link
      href={`/notes/${note.id}`}
      className="surface"
      style={{
        borderRadius: 22,
        padding: 18,
        display: "grid",
        gap: 12,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "flex-start" }}>
        <div>
          <p className="eyebrow">Entry</p>
          <p style={{ margin: "6px 0 0", fontWeight: 700 }}>{note.relativeTime}</p>
        </div>
        <span style={{ fontSize: "0.82rem", color: "rgba(31,41,55,0.6)" }}>{note.source === "chain" ? "Onchain" : "Studio sample"}</span>
      </div>
      <p style={{ margin: 0, fontSize: "1.02rem", lineHeight: 1.7 }}>{note.preview}</p>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, color: "rgba(31,41,55,0.62)", fontSize: "0.88rem", flexWrap: "wrap" }}>
        <span>{formatDateTime(note.createdAt)}</span>
        <span>{shortenAddress(note.owner)}</span>
      </div>
    </Link>
  );
}