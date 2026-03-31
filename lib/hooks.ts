"use client";

import { useMemo } from "react";
import { useAccount, useReadContract } from "wagmi";

import { CONTRACT_ADDRESS, DEFAULT_OWNER } from "@/lib/constants";
import { baseNoteBoxAbi } from "@/lib/contract";
import { mockNotes } from "@/lib/notes";
import type { NoteItem } from "@/lib/types";

export function useActiveOwner() {
  const { address } = useAccount();
  return address ?? DEFAULT_OWNER;
}

export function useLatestNote() {
  const owner = useActiveOwner();
  const { data, isLoading, refetch } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: baseNoteBoxAbi,
    functionName: "getNotes",
    args: [owner],
    query: {
      enabled: Boolean(owner),
    },
  });

  const latest = useMemo<NoteItem | null>(() => {
    const chainNotes = (data as string[] | undefined)?.filter(Boolean) ?? [];
    if (chainNotes.length === 0) {
      return mockNotes[0] ?? null;
    }

    return {
      id: `chain-latest-${chainNotes.length}`,
      content: chainNotes[chainNotes.length - 1],
      preview: chainNotes[chainNotes.length - 1],
      createdAt: new Date().toISOString(),
      relativeTime: "Latest onchain",
      owner,
      source: "chain",
    };
  }, [data, owner]);

  return { latestNote: latest, isLoading, refetch };
}

export function useUserNotes() {
  const owner = useActiveOwner();
  const { data, isLoading, refetch } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: baseNoteBoxAbi,
    functionName: "getNotes",
    args: [owner],
    query: {
      enabled: Boolean(owner),
    },
  });

  const notes = useMemo<NoteItem[]>(() => {
    const chainNotes = (data as string[] | undefined)?.filter(Boolean) ?? [];
    if (chainNotes.length === 0) {
      return mockNotes;
    }

    return [...chainNotes]
      .reverse()
      .map((content, index) => ({
        id: `chain-note-${chainNotes.length - index}`,
        content,
        preview: content,
        createdAt: new Date(Date.now() - index * 3600_000).toISOString(),
        relativeTime: index === 0 ? "Latest onchain" : `${index + 1} entries ago`,
        owner,
        source: "chain" as const,
      }));
  }, [data, owner]);

  return { notes, isLoading, refetch };
}