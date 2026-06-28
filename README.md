# note-box

A quiet onchain notes mini app built with Next.js, TypeScript, Wagmi, and Viem.

Repository: https://github.com/IngemarCarey/note-box.git

## Overview

note-box is a small web app for writing and viewing onchain notes.

The project focuses on a simple interface, clear navigation, and English-only UI text.

It is built with a modern TypeScript stack and uses Wagmi and Viem for chain interactions.

## Features

- Write notes through a dedicated compose page.
- View notes by individual note route.
- Browse personal notes from the main notes area.
- Access archived notes from a separate archive route.
- Use a minimal interface designed around quiet note-taking.
- Interact with the deployed `BaseNoteBox` contract.

## Tech Stack

- Next.js
- TypeScript
- Wagmi
- Viem

## Routes

The app includes the following routes:

- `/`
- `/write`
- `/my`
- `/notes/[id]`
- `/archive`

## Contract

The app references the following deployed contract:

`BaseNoteBox`: `0x929B1470896e378Bf24d292f284D2B777480250a`

## Getting Started

Clone the repository:

```bash
git clone https://github.com/IngemarCarey/note-box.git
```

Move into the project directory:

```bash
cd note-box
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local development URL shown in your terminal.

## Common Commands

Run the development server:

```bash
