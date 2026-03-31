"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { WalletButton } from "@/components/WalletButton";

const navItems = [
  { href: "/", label: "Hub" },
  { href: "/write", label: "Write" },
  { href: "/my", label: "My Notes" },
  { href: "/archive", label: "Archive" },
];

export function NotebookHeader() {
  const pathname = usePathname();

  return (
    <header style={{ marginBottom: 18 }}>
      <div
        className="surface"
        style={{
          borderRadius: 26,
          padding: "14px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 14,
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span className="icon-badge">N</span>
            <div>
              <p className="eyebrow">Onchain Notes</p>
              <p style={{ margin: 0, fontSize: "1.15rem", fontWeight: 700, letterSpacing: "-0.04em" }}>note-box</p>
            </div>
          </Link>
          <nav style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {navItems.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={active ? "pill-button" : "ghost-button"}
                  style={{ padding: "10px 14px", fontSize: "0.94rem" }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <WalletButton />
      </div>
    </header>
  );
}