import Link from "next/link";

type ColumnNavItem = {
  href: string;
  label: string;
  meta: string;
};

export function ColumnNav({ items, current }: { items: ColumnNavItem[]; current: string }) {
  return (
    <aside
      className="surface"
      style={{
        borderRadius: 28,
        padding: 18,
        display: "grid",
        gap: 12,
      }}
    >
      <p className="section-title">Sections</p>
      {items.map((item, index) => {
        const active = item.href === current;
        return (
          <Link
            key={item.href}
            href={item.href}
            style={{
              padding: "14px 14px 15px",
              borderRadius: 18,
              border: active ? "1px solid rgba(47,93,80,0.28)" : "1px solid rgba(47,93,80,0.08)",
              background: active ? "rgba(47,93,80,0.08)" : "rgba(255,255,255,0.35)",
              display: "grid",
              gap: 6,
            }}
          >
            <span style={{ fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(31,41,55,0.45)" }}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <span style={{ fontWeight: 700 }}>{item.label}</span>
            <span className="muted" style={{ fontSize: "0.92rem" }}>
              {item.meta}
            </span>
          </Link>
        );
      })}
    </aside>
  );
}