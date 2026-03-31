"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/", label: "Hub" },
  { href: "/write", label: "Compose" },
  { href: "/my", label: "Timeline" },
  { href: "/archive", label: "Archive" },
];

export function TopTabs() {
  const pathname = usePathname();

  return (
    <div
      className="surface"
      style={{
        borderRadius: 22,
        padding: 8,
        display: "grid",
        gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
        gap: 8,
      }}
    >
      {tabs.map((tab) => {
        const active = pathname === tab.href || (tab.href !== "/" && pathname.startsWith(tab.href));
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={active ? "pill-button" : "ghost-button"}
            style={{ padding: "10px 12px", textAlign: "center", fontSize: "0.9rem" }}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}