import Link from "next/link";

export function ActionBar() {
  return (
    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
      <Link href="/write" className="primary-button" style={{ padding: "12px 16px", borderRadius: 16 }}>
        Write Note
      </Link>
      <Link href="/my" className="ghost-button" style={{ padding: "12px 16px", borderRadius: 16 }}>
        View My Notes
      </Link>
    </div>
  );
}