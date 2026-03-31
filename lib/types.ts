export type NoteStatus = "ready" | "saving" | "saved" | "synced" | "latest" | "copied";

export type NoteItem = {
  id: string;
  content: string;
  preview: string;
  createdAt: string;
  relativeTime: string;
  owner: `0x${string}`;
  txHash?: `0x${string}`;
  source: "mock" | "chain";
};