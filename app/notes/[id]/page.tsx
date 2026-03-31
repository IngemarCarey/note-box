import Link from "next/link";
import { notFound } from "next/navigation";

import { CopyNoteButton } from "@/components/CopyNoteButton";
import { NoteStatusChip } from "@/components/NoteStatusChip";
import { PageIntro } from "@/components/PageIntro";
import { formatDateTime, shortenAddress } from "@/lib/format";
import { getNoteById } from "@/lib/notes";

export default async function NoteDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const note = getNoteById(id);

  if (!note) {
    notFound();
  }

  return (
    <main className="grid-gap">
      <PageIntro
        eyebrow="Note Detail"
        title="A single entry, kept in focus."
        detail="Read the note, keep the timestamp close, and move back into the archive when you are ready."
      />
      <div className="detail-layout">
        <article className="surface" style={{ borderRadius: 30, padding: 24, display: "grid", gap: 22 }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <NoteStatusChip status="latest" />
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <CopyNoteButton content={note.content} />
              <Link href="/my" className="ghost-button" style={{ padding: "10px 14px", borderRadius: 14 }}>
                Back to My Notes
              </Link>
            </div>
          </div>
          <p style={{ margin: 0, fontSize: "1.35rem", lineHeight: 1.9, maxWidth: "56ch" }}>{note.content}</p>
        </article>

        <aside className="surface" style={{ borderRadius: 28, padding: 20, display: "grid", gap: 16, alignSelf: "start" }}>
          <p className="section-title">Entry data</p>
          <div style={{ display: "grid", gap: 12 }}>
            <div>
              <p className="eyebrow">Saved at</p>
              <p style={{ margin: "6px 0 0", fontWeight: 700 }}>{formatDateTime(note.createdAt)}</p>
            </div>
            <div>
              <p className="eyebrow">Owner</p>
              <p style={{ margin: "6px 0 0", fontWeight: 700 }}>{shortenAddress(note.owner)}</p>
            </div>
            <div>
              <p className="eyebrow">Source</p>
              <p style={{ margin: "6px 0 0", fontWeight: 700 }}>{note.source === "chain" ? "Onchain entry" : "Studio sample"}</p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}