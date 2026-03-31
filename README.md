# note-box

Quiet onchain notes mini app built with Next.js, TypeScript, Wagmi, and Viem.

## Routes
- `/`
- `/write`
- `/my`
- `/notes/[id]`
- `/archive`

## Contract
- BaseNoteBox: `0x929B1470896e378Bf24d292f284D2B777480250a`

## Notes
- UI text is English only.
- `lib/wagmi.ts` includes a builder code placeholder for later replacement.
- `utils/track.js` sends transaction attribution events.
