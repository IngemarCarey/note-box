import type { ReactNode } from "react";

import "./globals.css";
import { NotebookHeader } from "@/components/NotebookHeader";
import { Providers } from "@/components/providers";
import { APP_URL, BASE_APP_ID } from "@/lib/constants";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="base:app_id" content={BASE_APP_ID} />
        <meta name="talentapp:project_verification" content="cc70748a7595888b1c54695aba6ba428a2a05d9ffa2ea666a5849fcd62afedc02a7e881c2deee4842fbcdf84c0428722dc71ca468baf90fcf6b0493f399491c3" />
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
