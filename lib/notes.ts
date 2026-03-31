import { DEFAULT_OWNER } from "@/lib/constants";
import type { NoteItem } from "@/lib/types";

export const mockNotes: NoteItem[] = [
  {
    id: "note-001",
    content: "Shipped the first onchain draft. Keep the interface quiet and let the timeline do the talking.",
    preview: "Shipped the first onchain draft. Keep the interface quiet...",
    createdAt: "2026-03-31T07:15:00.000Z",
    relativeTime: "12 minutes ago",
    owner: DEFAULT_OWNER,
    txHash: "0x8a6b2f9b6ab50a2ab7b388b7dbab8a779f5a97631dfbe2df144f7da1920be101",
    source: "mock",
  },
  {
    id: "note-002",
    content: "Writing faster on mobile works when the composer stays open, calm, and free from dashboard clutter.",
    preview: "Writing faster on mobile works when the composer stays open...",
    createdAt: "2026-03-31T05:20:00.000Z",
    relativeTime: "2 hours ago",
    owner: DEFAULT_OWNER,
    txHash: "0xe7d4cfeb479ea2b2ae2c592f5761cfb53a6d6056c4f9dc821d9840c2d8de560a",
    source: "mock",
  },
  {
    id: "note-003",
    content: "Archive view should feel like a personal writing ledger, not a project homepage or metrics dashboard.",
    preview: "Archive view should feel like a personal writing ledger...",
    createdAt: "2026-03-30T18:45:00.000Z",
    relativeTime: "Yesterday",
    owner: DEFAULT_OWNER,
    source: "mock",
  },
  {
    id: "note-004",
    content: "A slim note slab with time and ownership is enough. The content needs the widest column.",
    preview: "A slim note slab with time and ownership is enough...",
    createdAt: "2026-03-29T11:05:00.000Z",
    relativeTime: "2 days ago",
    owner: DEFAULT_OWNER,
    source: "mock",
  },
];

export function getLatestNote(notes: NoteItem[]) {
  return notes[0] ?? null;
}

export function getNoteById(id: string) {
  return mockNotes.find((note) => note.id === id) ?? null;
}