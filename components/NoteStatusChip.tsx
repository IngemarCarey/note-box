import type { NoteStatus } from "@/lib/types";

const tones: Record<NoteStatus, { label: string; background: string; color: string }> = {
  ready: { label: "Ready", background: "rgba(107,124,147,0.12)", color: "#506171" },
  saving: { label: "Saving", background: "rgba(183,93,78,0.12)", color: "#915246" },
  saved: { label: "Saved", background: "rgba(47,93,80,0.14)", color: "#2f5d50" },
  synced: { label: "Synced", background: "rgba(47,93,80,0.12)", color: "#2f5d50" },
  latest: { label: "Latest", background: "rgba(47,93,80,0.12)", color: "#2f5d50" },
  copied: { label: "Copied", background: "rgba(107,124,147,0.12)", color: "#506171" },
};

export function NoteStatusChip({ status }: { status: NoteStatus }) {
  const tone = tones[status];

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "8px 12px",
        borderRadius: 999,
        background: tone.background,
        color: tone.color,
        fontSize: "0.85rem",
        fontWeight: 700,
      }}
    >
      <span style={{ width: 8, height: 8, borderRadius: 999, background: tone.color }} />
      {tone.label}
    </span>
  );
}