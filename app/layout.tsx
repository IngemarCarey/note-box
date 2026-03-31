import type { ReactNode } from "react";

import "./globals.css";
import { NotebookHeader } from "@/components/NotebookHeader";
import { Providers } from "@/components/providers";

const APP_URL = "https://note-box-neon.vercel.app";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="base:app_id" content="69cb7cb02b941e5a27786828" />
        <meta name="talentapp:project_verification" content="cc70748a7595888b1c54695aba6ba428a2a05d9ffa2ea666a5849fcd62afedc02a7e881c2deee4842fbcdf84c0428722dc71ca468baf90fcf6b0493f399491c3" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>note-box</title>
        <meta name="description" content="Quiet onchain notes on Base." />
        <link rel="canonical" href={APP_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="note-box" />
        <meta property="og:title" content="note-box" />
        <meta property="og:description" content="Quiet onchain notes on Base." />
        <meta property="og:url" content={APP_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="note-box" />
        <meta name="twitter:description" content="Quiet onchain notes on Base." />
      </head>
      <body>
        <Providers>
          <div className="app-shell">
            <div className="site-frame">
              <NotebookHeader />
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
