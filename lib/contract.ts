import type { Abi } from "viem";

export const baseNoteBoxAbi = [
  {
    type: "event",
    name: "NoteAdded",
    inputs: [
      { indexed: true, name: "user", type: "address" },
      { indexed: false, name: "note", type: "string" },
    ],
  },
  {
    type: "function",
    name: "addNote",
    stateMutability: "nonpayable",
    inputs: [{ name: "note", type: "string" }],
    outputs: [],
  },
  {
    type: "function",
    name: "getNotes",
    stateMutability: "view",
    inputs: [{ name: "user", type: "address" }],
    outputs: [{ name: "", type: "string[]" }],
  },
] as const satisfies Abi;